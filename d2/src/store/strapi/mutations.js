
export function mGetPosts (state, payload) {
    state.posts = payload;
}

export function mGetCurPost (state, payload) {
    console.log(payload);
    state.curPost = payload;
}

export function mUpdatePost(state, payload) {
    state.curPost = payload
}
