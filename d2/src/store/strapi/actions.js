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

export function aCreatePost ({ }, payload) {
    axios.post(baseUrl + '/posts', payload)
    .then(response => {
        console.log(response);
   })
}

export function aGetCurPost ({ commit }, payload) {
    axios.get(baseUrl + '/posts/' + payload)
    .then(response => {
        commit('mGetCurPost', response.data)
   })
}

export function aUpdatePost ({ }, payload) {
    axios.put(baseUrl + '/posts/' + payload.id, payload)
    .then(response => {
        console.log(response);
   })
}

export function aDeletePost ({ }, payload) {
    axios.delete(baseUrl + '/posts/' + payload)
    .then(response => {
        console.log(response);
   })
}

