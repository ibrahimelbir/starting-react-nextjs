
import PokemonType from "../src/PokemonType";
import {Button} from '@mui/material';
import PropTypes from "prop-types";
import Link from "next/link";
const PokemonRow = ({ pokemon, onClick }) => (
  
    <tr>
      <td>
        <Link href={`/pokemon/${pokemon.id}`}>
        {pokemon.name.english}
        </Link>
        </td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  
);


PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType)
};

export default PokemonRow;