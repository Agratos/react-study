import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useMovieGenreQuery = () => {
    const fetchMovieGenre = () => {
        return api.get(`/genre/movie/list`)
    }

    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (result) => result?.data.genres,
        staleTime: 30000,
    })
}