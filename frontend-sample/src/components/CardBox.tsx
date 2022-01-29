
import charactersQuery from "../queries/charactersQuery";
import {useQuery} from "@apollo/client";
import React from "react";
import Card from "./Card";
import "./CardBox.css"

export default function CardBox({filter=[''], page=1}:any){

    const {query, variables} = charactersQuery(filter,page)
    const { data, loading, error, //startPolling,stopPolling
    } = useQuery(query, {
        variables,
        //pollInterval: 500,
    })
    //const [getCharacters, { loading, error, data }] = useLazyQuery(query);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Whoops</h2>;
    }

    const characters = data.characters;
    return (<div className="cardBox">
        {
            characters && characters.map((cardData: any) =>{
                return <Card key={cardData.id} data={cardData} />
            })
        }
    </div>)
}