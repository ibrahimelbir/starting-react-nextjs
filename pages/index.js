import { useEffect } from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";
import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";


const Title = styled.h1`
  text-align: center;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const Home = ({ initialPokemon }) => {

  return (
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/pokemon.json");
    if (!res.ok) throw new Error("Failed to fetch pokemon");
    const pokemon = await res.json();
    return { props: { initialPokemon: pokemon } };
  } catch (error) {
    console.error("SSR fetch error:", error);
    return { props: { initialPokemon: [] } };
  }
}

export default Home;