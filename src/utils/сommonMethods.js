import { createStore } from 'vuex';
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const basePath = 'http://193.232.106.89:81/';

export function setUri (uri) {
    store.commit('SET_URI_TO_STATE', uri);
}

export const store = createStore({
    state () {
        return {
            uri:''
        }
    },
    mutations:{
        SET_URI_TO_STATE: (state, uri) => {
            state.uri = uri;
        },

    },
    actions:{
        GET_DATA_FROM_API() {
            return axios.get (basePath + this.state.uri, {
            })
                .then((data) => {
                    return data;
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        // ,
        // POST_USER_FROM_API() {
        //     return axios.post ('https://api.github.com/repos/{owner}/{repo}/labels', {
        //         params: {key: '1'},
        //         owner: this.owner,
        //     })
        //         .then((response) => {
        //             console.log(response);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }
    },
    getters:{}

});

const app = createApp({ store });
app.use(store);
app.use(VueAxios, axios);
