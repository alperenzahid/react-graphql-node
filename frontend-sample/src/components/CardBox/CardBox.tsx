import {useLazyQuery} from "@apollo/client";
import React, {useEffect, useRef, useState} from "react";
import Card, {TCardData} from "../Card/Card";
import "./CardBox.css";
import InfiniteScroll from "react-infinite-scroll-component"
import Retrieve from "../../service/RetrieveData";


export default function CardBox({filter = [""]}: {filter: string[] | undefined}): JSX.Element {

    const lastPage = useRef(0);
    const {query} = Retrieve.characters(filter, lastPage.current)

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
                dataLength={characters.length}
                next={fetchMoreData}
                hasMore={characters.length < 500}
                loader={<div className='loadingMessage'><h3>Loading...</h3></div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className="scrollArea">
                {
                    characters.map((cardData: TCardData, index: number) => {
                        return <Card key={index} data={cardData}/>
                    })
                }
                </div>

            </InfiniteScroll>
        </div>

    )
}