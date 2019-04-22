import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		people: [],
		planets: [],
		films: []
	},
	getters: {
		people: state => state.people,
		planets: state => state.planets,
		films: state => state.films,
		film: state => url => {
			return state.films.filter(item => item.url == url)
		},

	},
	actions: {
		loadPeople(context){
			const url = 'https://swapi.co/api/people/?format=json';

			axios.get(url)
				.then((response) => {
					context.commit('loadPeople', response.data.results);
				})
				.catch(error => {
					console.log(error);
				});
		
		},
		loadFilms(context){
			const url = 'https://swapi.co/api/films/?format=json';

			axios.get(url)
				.then((response) => {
					context.commit('loadFilms', response.data.results)
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	mutations: {
		loadPeople(state, payload){
			state.people = payload;
		},
		loadFilms(state, payload){
			state.films = payload
		}
	}
})