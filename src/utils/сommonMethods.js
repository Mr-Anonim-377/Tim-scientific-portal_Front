import { createStore } from 'vuex';
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// const basePath = 'http://furure-agro.ru:84';
const basePath = 'http://future-agro.ru:84';

export function setUri(uri) {
	store.commit('SET_URI_TO_STATE', uri);
}

export function setBasePath(uri) {
	store.commit('SET_BASE_PATH_TO_STATE', uri);
}

export const store = createStore({
	state() {
		return {
			uri: '',
		};
	},
	mutations: {
		SET_URI_TO_STATE: (state, uri) => {
			state.uri = uri;
		},
	},
	actions: {
		POST_DATA_FROM_API() {
			axios
				.post(basePath, this.state.uri, {
					crossdomain: true,
					headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' },
				})
				.then((data) => {
					return data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		GET_DATA_FROM_API() {
			return axios
				.get(basePath + this.state.uri, {})
				.then((data) => {
					return data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	getters: {},
});

const app = createApp({ store });
app.use(store);
app.use(VueAxios, axios);
