import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useTopRatedMoviesQuery = () => {
    const fetchTopRatedMovies = () => {
        return api.get(`/movie/top_rated`)
    }

    return useQuery({
        queryKey: ['movie-top-rated'],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data
    })
}