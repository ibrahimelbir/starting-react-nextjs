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
  observer(({ router }) => {
    const { store } = useContext(MobXProviderContext);
    const pokemon = store.pokemon.find((p) => p.id.toString() === router.query.id);
    return (
      <PageContainer>
        <CssBaseline />
        {pokemon && (
          <div>
            <h1>{pokemon.name.english}</h1>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Attribute</b></TableCell>
                  <TableCell><b>Value</b></TableCell>
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

export default Pokemon;
