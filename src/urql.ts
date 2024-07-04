import { cacheExchange, Client, fetchExchange, gql } from "@urql/core";

type Pokemon = {
  id: number;
  name: string;
};

type QueryResult = {
  pokemon_v2_pokemon: Pokemon[];
};

const client = new Client({
  url: "https://beta.pokeapi.co/graphql/v1beta",
  exchanges: [cacheExchange, fetchExchange],
});

client
  .query<QueryResult>(
    gql`
      {
        pokemon_v2_pokemon {
          id
          name
        }
      }
    `,
    {}
  )
  .toPromise()
  .then(({ data }) => {
    console.table(data?.pokemon_v2_pokemon);
  });
