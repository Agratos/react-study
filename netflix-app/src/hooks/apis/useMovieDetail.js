import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useMovieDetailQuery = ({id}) => {
    const fetchMovieDetail = () => {
        return api.get(`/movie/${id}`)
    }

    return useQuery({
        queryKey: ['movie-detail', id],
        queryFn: fetchMovieDetail,
        select: (result) => result?.data,
    })
}