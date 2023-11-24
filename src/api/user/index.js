import instant from "..";

export const postUser = (body)=> {
    return instant.post('/User', body);
}


export const getUser = async (username, pass)=> {
    return await instant.get(`User/${username}?password=${pass}`)
}
