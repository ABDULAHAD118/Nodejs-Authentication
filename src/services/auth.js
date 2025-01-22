const sessionIdTouserMap = new Map();

const setUser = (id, user) => {
    sessionIdTouserMap.set(id, user);
}

const getUser = (id) => {
    return sessionIdTouserMap.get(id);
}

export { setUser, getUser }