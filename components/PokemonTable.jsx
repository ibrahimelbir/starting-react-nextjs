
import PokemonRow from "./PokemonRow";
import { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";

const PokemonTable = observer(() => {
  const { store } = useContext(MobXProviderContext);
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
});

export default PokemonTable;
