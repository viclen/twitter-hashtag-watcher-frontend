const tweets = (state = {
    hashtag: "",
    watching: "",
    language: "",
    rejected: [],
    approved: [],
    list: [],
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
        default:
            return state
    }

    return { ...state };
}

export default tweets
