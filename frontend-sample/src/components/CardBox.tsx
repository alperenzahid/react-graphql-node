import charactersQuery from "../queries/charactersQuery";
import {useLazyQuery} from "@apollo/client";
import React, {useEffect, useRef, useState} from "react";
import Card from "./Card";
import "./CardBox.css"
import InfiniteScroll from "react-infinite-scroll-component";

export default function CardBox({filter = ['']}: any) {

    const lastPage = useRef(1);
    const {query, variables} = charactersQuery(filter, lastPage.current)
    // const {
    //     data, loading, error, //startPolling,stopPolling
    // } = useQuery(query, {
    //     variables,
    //     //pollInterval: 500,
    // })
    const [characters, setCharacters] = useState<any>([]);
    const [getCharacters, { data, loading, error }] = useLazyQuery(query);
    //const [getCharacters, { loading, error, data }] = useLazyQuery(query);

    useEffect(()=>{
        if(!data){
            console.log("Characters retrieved...");
            getCharacters({variables});
        }
    },[])
    useEffect(()=>{
        console.log("--- UseEffect start data changed---, Data: ", data);
        if(data){
            const newCharacters: any = [...characters, ...data.characters];
            setCharacters(newCharacters)
            console.log("New Characters set, ", newCharacters)
        }
    },[data])

    const fetchData = () => {
        lastPage.current = lastPage.current + 1;
        console.log(`Get More Data, Filter: ${JSON.stringify(filter)} and LastPage: ${lastPage.current}`)
        getCharacters({variables: {filter, page: lastPage.current}})
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Whoops</h2>;
    }

    if(!characters || characters.length === 0){
        return (<div className="cardBox"><h2>There is no characters</h2></div>)
    }
    console.log("Rendered Characters length", characters.length);
    return (
        <div className="cardBox">

            <InfiniteScroll
                dataLength={characters.length / 2} //This is important field to render the next data
                next={fetchData}
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

                        characters.map((cardData: any) => {
                            return <Card key={cardData.id} data={cardData}/>
                        })
                    }
                </div>

            </InfiniteScroll>
        </div>

    )
}