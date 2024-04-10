import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useSearchMovieQuery = ({keyword}) => {
    const fetchSearchMovie = () => {
        return keyword ? api.get(`/search/movie?query=${keyword}`) : api.get(`/movie/popular`)
    }

    return useQuery({
        queryKey: ['movie-search', keyword],
        queryFn: fetchSearchMovie,
        //select: (result) => result.data
    })
}