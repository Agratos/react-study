import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useMovieVideoQuery = ({id}) => {
    const fetchMovieVideo = () => {
        return api.get(`/movie/${id}/videos`)
    }

    return useQuery({
        queryKey: ['movie-video', id],
        queryFn: fetchMovieVideo,
        select: (result) => result?.data,
    })
}