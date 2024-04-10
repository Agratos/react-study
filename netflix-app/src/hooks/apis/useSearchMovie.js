import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useSearchMovieQuery = ({keyword, page}) => {
    const fetchSearchMovie = () => {
        return keyword ? api.get(`/search/movie?query=${keyword}&page=${page}`) : api.get(`/movie/popular?page=${page}`)
    }

    return useQuery({
        queryKey: ['movie-search', keyword, page],
        queryFn: fetchSearchMovie,
        select: (result) => result.data
    })
}