import { createContext, useContext, useEffect, useState } from "react"

import axios from 'axios';

const PostsContext = createContext({})
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('http://localhost:3000/posts')
        setPosts(response)
      } catch (error) {
        console.error({ error })
      }
    }

    fetchData()
  }, [])

  return(
    <PostsContext.Provider value={{posts}}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => {
  const { posts } = useContext(PostsContext)

  return { posts }
}