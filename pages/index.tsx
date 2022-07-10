import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts";
import PokeCard from "../components/pokemons/PokeCard";
import {
  PokemonResponse as PokemonListResponse,
  PokemonSmall,
} from "../interfaces/responses";
import { PokeApi } from "../services/poke-services";

interface Props {
  pokemons: PokemonSmall[];
}
const Home: NextPage<Props> = (props) => {
  return (
    <Layout title="Listado de pokémons">
      <div className="grid-poke-cards pt-[3rem]">
        {props.pokemons.map((pokemon) => (
          <PokeCard
            name={pokemon.name}
            id={pokemon.id}
            url={pokemon.url}
            img={pokemon.img}
            key={pokemon.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await PokeApi.get<PokemonListResponse>("/pokemon?limit=10");
  const formattedData: PokemonSmall[] = data.results.map((pokemon, index) => {
    const id = index + 1;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return {
      ...pokemon,
      id,
      img,
    };
  });
  return {
    props: {
      pokemons: formattedData,
    },
  };
};

export default Home;
