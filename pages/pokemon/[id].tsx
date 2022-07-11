import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

interface Props {
  id: number;
  name: string;
}
const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <h1>Detalle de pokémon</h1>
      <div> {id}</div>
      <div> {name}</div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      id: "1",
      name: "Pickachu",
    },
  };
};

export default PokemonPage;
