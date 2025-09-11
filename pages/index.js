import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";
import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";
import  Store  from "../src/store";
import { Provider } from "mobx-react";



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


const Home = () => {
  const store = new Store();
  return (
    <Provider store={store}>
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
    </Provider>
  );
};


export default Home;