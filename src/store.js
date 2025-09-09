import { makeObservable, observable, computed } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedPokemon = null;

  constructor(initialData = {}) {
    this.pokemon = initialData.pokemon || [];
    this.filter = initialData.filter || "";
    this.selectedPokemon = initialData.selectedPokemon || null;

    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedPokemon: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

export const createStore = (initialData) => new Store(initialData);

export default createStore();