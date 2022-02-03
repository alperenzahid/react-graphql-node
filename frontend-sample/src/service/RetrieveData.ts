import {gql} from "apollo-boost";

class Retrieve{
    public static characters(filter = [''], page: number = 1){
        return {
            query: Retrieve.GET_CHARACTERS,
            variables: {filter, page}
        }
    }

    private static GET_CHARACTERS = gql`query GetCharacters($filter: [String!]!, $page: Int!) {
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
}


export default Retrieve;