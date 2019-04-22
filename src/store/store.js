import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); 

export default new Vuex.Store({
	state:{
		people: [],
	},
	getters: {
		people: state => state.people,
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
	},
	mutations: {
		loadPeople(state, payload){
			state.people = payload;
		},
	}
})