
import PokemonRow from "./PokemonRow";
import store from "../src/store";
import { observer } from "mobx-react";

const PokemonTable = () => {
  return (
    <table width="100%" suppressHydrationWarning>
      <tbody>
        {store.filteredPokemon
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} onClick={(pokemon) => store.setSelectedPokemon(pokemon)} />
          ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
