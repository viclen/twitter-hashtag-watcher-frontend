/**
 * reducer para as listas e o estado da aplicacao
 * @param {*} state o estado da aplicacao
 * @param {*} action a acao a ser feita
 */

const tweets = (state = {
    hashtag: "",
    watching: "",
    language: "en",
    rejected: [],
    approved: [],
    list: [],
    ai_enabled: false
}, action) => {
    switch (action.type) {
        case 'SET_APPROVED':
            state.approved = action.list;
            break;
        case 'SET_REJECTED':
            state.rejected = action.list;
            break;
        case 'SET_LIST':
            state.list = action.list;
            break;
        case 'SET_HASHTAG':
            state.hashtag = action.hashtag;
            break;
        case 'SET_WATCHING':
            state.watching = action.watching;
            break;
        case 'SET_LANGUAGE':
            state.language = action.language;
            break;
        case 'SET_AI':
            state.ai_enabled = action.ai_enabled;
            break;
        default:
            return state
    }

    return { ...state };
}

export default tweets
