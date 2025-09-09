import "@/styles/globals.css";
import App from 'next/app';
import { Provider } from 'mobx-react';
import { createStore } from '../src/store';

const store = createStore({ pokemon: [] });

function MyApp({ Component, pageProps, initialPokemon }) {
  if (initialPokemon && store.pokemon.length === 0) {
    store.setPokemon(initialPokemon);
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  try {
    const res = await fetch('http://localhost:3000/pokemon.json');
    const pokemon = res.ok ? await res.json() : [];
    return {
      ...appProps,
      initialPokemon: pokemon,
    };
  } catch (error) {
    console.error('Error fetching initial Pokémon:', error);
    return {
      ...appProps,
      initialPokemon: [],
    };
  }
};

export default MyApp;
