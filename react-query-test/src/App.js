import {useQueries} from '@tanstack/react-query'
import axios from 'axios';

const App =() => {
  const ids = [1,2,3,4];

  const fetchPostDetail = async(id) => {
    return await axios.get(`http://localhost:3004/posts/${id}`)
  }

  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['post', id],
      queryFn: () => fetchPostDetail(id),
      staleTime: Infinity,
    })),
    combine: (response)=>{
      console.log(response)
			return{
				data: response.map((result)=> result.data.data),
        pending: null
			}
		}
  })

    console.log(results)

  return (
    <div></div>
  );
}

export default App;
