
import styled from "@emotion/styled";
import { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";


const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = observer(() => {
  const { store } = useContext(MobXProviderContext);

  return (
    <Input
      type="text"
      value={store.filter}
      onChange={(evt) => store.setFilter(evt.target.value)}
      placeholder="Search Pokémon..."
    />
  );
});

export default PokemonFilter;
