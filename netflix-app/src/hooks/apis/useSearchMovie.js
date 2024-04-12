import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export const useSearchMovieQuery = ({keyword, page, sort}) => {
    
    const fetchSearchMovie = () => {
        const sortType = ['none','popularity.desc', 'popularity.asc'][sort]

        switch(sort){
            case 0:
                return keyword ? api.get(`/search/movie?query=${keyword}&page=${page}`) : api.get(`/movie/popular?page=${page}`)
            default: 
                switch(keyword){
                    case null:
                        return api.get(`/discover/movie?page=${page}&sort_by=${sortType}`);
                    default :
                        return api.get(`/search/movie?query=${keyword}&page=${page}`)
                }   
        }
    }

    return useQuery({
        queryKey: ['movie-search', keyword, page, sort],
        queryFn: fetchSearchMovie,
        select: (result) => result.data.results
    })
}