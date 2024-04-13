import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useSearchMovieQuery = ({keyword, page, sort, genre}) => {
    
    const fetchSearchMovie = () => {
        const sortType = ['popularity.desc', 'popularity.asc'][sort]

        if(keyword && genre){
            return api.get(`/search/movie?query=${keyword}&page=${page}&sort_by=${sortType}`);
        }

        if(keyword){
            return api.get(`/search/movie?query=${keyword}&page=${page}`)
        }

        if(genre){
            return api.get(`/discover/movie?page=${page}&with_genres=${genre}&sort_by=${sortType}`);
        }

        return api.get(`/discover/movie?page=${page}&sort_by=${sortType}`);
    }

    return useQuery({
        queryKey: ['movie-search', keyword, page, sort, genre],
        queryFn: fetchSearchMovie,
        select: (result) => result.data.results
    })
}