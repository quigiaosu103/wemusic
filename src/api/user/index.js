import instant from "..";

export const postUser = (body)=> {
    return instant.post('/User', body);
}
