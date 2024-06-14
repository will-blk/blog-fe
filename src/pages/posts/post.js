export function Post({ post }) {
  const { title, body } = post

  return(
    <div>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  )
}