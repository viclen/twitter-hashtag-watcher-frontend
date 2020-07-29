/**
 * acoes usadas pelo redux
**/

export const setList = list => ({
    type: "SET_LIST",
    list
});

export const setApproved = list => ({
    type: "SET_APPROVED",
    list
});

export const setRejected = list => ({
    type: "SET_REJECTED",
    list
});

export const setHashtag = hashtag => ({
    type: "SET_HASHTAG",
    hashtag
});

export const setWatching = watching => ({
    type: "SET_WATCHING",
    watching
});

export const setLanguage = language => ({
    type: "SET_LANGUAGE",
    language
});

export const setAI = ai_enabled => ({
    type: "SET_AI",
    ai_enabled
});