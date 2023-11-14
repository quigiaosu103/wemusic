import instant from "..";

export const getTopSongs = () => {
    return instant.get(`Song`)
}