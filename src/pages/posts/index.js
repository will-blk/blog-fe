import { usePosts } from "./context"
import { Post } from "./post"

export function Posts() {
  const { posts } = usePosts()

  return(
    <ul>
    {
      posts.map((post, index) =>
        <Post key={index} post={post}/>
      )
    }
    </ul>

  )
}