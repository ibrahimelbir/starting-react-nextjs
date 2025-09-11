import { CssBaseline, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import { withRouter } from "next/router";
import { observer, MobXProviderContext } from "mobx-react";
import { useContext } from "react";

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

const Pokemon = withRouter(
  observer(({ pokemon }) => {
    return (
      <PageContainer>
        <CssBaseline />
        {pokemon && (
          <div>
            <h1>{pokemon.name.english}</h1>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Attribute</b>
                  </TableCell>
                  <TableCell>
                    <b>Value</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(pokemon.base).map((k) => (
                  <TableRow key={k}>
                    <TableCell>{k}</TableCell>
                    <TableCell>{pokemon.base[k]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </PageContainer>
    );
  })
);

export async function getStaticPaths() {
  const allPokemon = await require("../../src/pokemon.json");
  return {
    paths: allPokemon.map((p) => ({
      params: {
        id: p.id.toString(),
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  try {
    const allPokemon = await require("../../src/pokemon.json");

    const pokemon = allPokemon.find((p) => p.id.toString() === params.id);

    return { props: { pokemon: pokemon || null } };
  } catch (error) {
    console.error("Error: ", error);
    return { props: { pokemon: null } };
  }
}

export default Pokemon;
