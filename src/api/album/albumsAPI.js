import instant from "..";

export const getAlbums = () => {
    return instant.get(`Album`)
}