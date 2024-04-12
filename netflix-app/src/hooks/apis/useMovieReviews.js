import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useMovieReviewsQuery = ({id}) => {
    const fetchMovieReviews = () => {
        return api.get(`/movie/${id}/reviews`)
    }

    return useQuery({
        queryKey: ['movie-review', id],
        queryFn: fetchMovieReviews,
        select: (result) => result?.data,
    })
}