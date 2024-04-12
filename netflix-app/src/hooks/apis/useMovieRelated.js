import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useMovieRelatedQuery = ({id}) => {
    const fetchMovieRelated = () => {
        return api.get(`/movie/${id}/similar`)
    }

    return useQuery({
        queryKey: ['movie-related', id],
        queryFn: fetchMovieRelated,
        select: (result) => result?.data,
    })
}