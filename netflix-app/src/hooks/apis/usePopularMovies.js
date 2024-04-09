import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const usePopularMoviesQuery = () => {
    const fetchPopularMovies = () => {
        return api.get(`/movie/popular`)
    }

    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data
    })
}