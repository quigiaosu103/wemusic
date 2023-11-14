import instant from "..";

export const getArtists = () => {
    return instant.get(`Artist`)
}