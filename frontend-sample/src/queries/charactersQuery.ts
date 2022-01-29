import {gql} from "apollo-boost";

const charactersQuery = (filter = [''], page: number = 1)=>{
    return {
       query: GET_CHARACTERS,
       variables: {filter, page}
    }
}
const GET_CHARACTERS = gql`
    query GetCharacters($filter: [String!]!, $page: Int!) {
            characters(filter: $filter, page: $page){
                id,
                name
                status
                species
                type
                gender
                origin {
                  name
                  url
                }
                location {
                  name
                  url
                }
                image
                episode
                url
                created
              }
          }
  `;

export default charactersQuery;