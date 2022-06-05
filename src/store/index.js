import { createStore } from "vuex";

export default createStore({
    state: {
        characters: [],
        characterFilter: []
    },
    mutations: {
        setCharacters(state, payload ) {
            state.characters = payload;
        },
        setCharactersFilter( state, payload ){
            state.characterFilter = payload;
        }
    },
    actions: {
        async getCharacters( { commit } ) {
            try {
                const response = await fetch( "https://rickandmortyapi.com/api/character" );
                const data = await response.json();
                commit( "setCharacters", data.results );
                commit( "setCharactersFilter", data.results );
            } catch (error) {
                console.log(error);
            }
        },
        filterByStatus( { commit, state }, status ) {
            const result = state.characters.filter( character => character.status.includes( status ) );
            commit( "setCharactersFilter", result );
        },
        filterByName( { commit, state }, name ) {
            const nameLower = name.toLowerCase();
            const result = state.characters.filter( character => {
                let characterName = character.name.toLowerCase();
                return characterName.includes( nameLower );
            })
            commit( "setCharactersFilter", result );
        }
    },
    modules: {

    }
});