import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useUpcomingMoviesQuery = () => {
    const fetchUpcomingMovies = () => {
        return api.get(`/movie/upcoming`)
    }

    return useQuery({
        queryKey: ['movie-upcoming'],
        queryFn: fetchUpcomingMovies,
        select: (result) => result?.data
    })
}