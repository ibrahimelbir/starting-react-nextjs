import { CssBaseline } from "@mui/material";
import styled from "@emotion/styled";
import { withRouter } from "next/router";
import store from "../../src/store"

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

const Pokemon  = ({router}) => {
  const pokemon = store.pokemon.find((p)=> p.id.toString() === router.query.id);
  return(
  <PageContainer>
    <CssBaseline />
    <h1>{pokemon.name.english}</h1>
  </PageContainer>
)};

export default withRouter(Pokemon);
