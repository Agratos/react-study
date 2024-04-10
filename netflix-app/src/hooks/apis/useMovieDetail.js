import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useMovieDetailQuery = ({id}) => {
    const fetchMovieDetail = () => {
        return api.get(`/genre/movie/list`)
    }

    return useQuery({
        queryKey: ['movie-detail', id],
        queryFn: fetchMovieDetail,
        //select: (result) => result.data,
    })
}