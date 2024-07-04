import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

type Pokemon = {
  id: number;
  name: string;
};

type QueryResult = {
  pokemon_v2_pokemon: Pokemon[];
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://beta.pokeapi.co/graphql/v1beta",
});

client
  .query<QueryResult>({
    query: gql`
      {
        pokemon_v2_pokemon {
          id
          name
        }
      }
    `,
  })
  .then(({ data }) => {
    console.table(data.pokemon_v2_pokemon);
  });
