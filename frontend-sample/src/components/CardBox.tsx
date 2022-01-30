import charactersQuery from "../queries/charactersQuery";
import {useLazyQuery} from "@apollo/client";
import React, {useEffect, useRef, useState} from "react";
import Card from "./Card";
import "./CardBox.css";
import InfiniteScroll from "react-infinite-scroll-component"


export default function CardBox({filter = ['']}: any) {

    const lastPage = useRef(0);
    const {query} = charactersQuery(filter, lastPage.current)

    const [characters, setCharacters] = useState([]);
    const [getCharacters, { data, error }] = useLazyQuery(query,{
        onCompleted: (data)=>{
            const newCharacters = characters.concat(data.characters)
            setCharacters(newCharacters)
        }
    });

    const fetchMoreData = async () => {
        lastPage.current = lastPage.current + 1;
        getCharacters({variables: {filter, page: lastPage.current}})
    };
    useEffect(()=>{
        if(!data){
            fetchMoreData()
        }
    },[])

    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }

    if (error) {
        return <h2>Whoops</h2>;
    }

    if(!characters || characters.length === 0){
        return (<div className="cardBox"><h2>There is no characters</h2></div>)
    }
    //console.log("Rendered Characters length", characters.length);
    return (
        <div className="cardBox">

            <InfiniteScroll
                dataLength={characters.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={characters.length < 500}
                loader={<div className='loadingMessage'><h3>Loading...</h3></div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div style={{display: 'flex', flexWrap: 'wrap', width: '1280px'}}>
                {
                    characters.map((cardData: any, index: number) => {
                        return <Card key={index} data={cardData}/>
                    })
                }
                </div>

            </InfiniteScroll>
        </div>

    )
}