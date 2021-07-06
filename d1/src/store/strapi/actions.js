import axios from 'axios'
const baseUrl = "http://47.242.73.141"

export function initActions ({ dispatch }) {
    dispatch('aGetPosts');
}

export function aGetPosts ({ commit }) {
    axios.get(baseUrl + '/posts')
    .then(response => {
        commit('mGetPosts', response.data)
   })
}


