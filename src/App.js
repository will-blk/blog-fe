import { Posts } from './pages/posts';
import { PostsProvider } from './pages/posts/context';

function App() {
  return (
    <PostsProvider>
      <Posts/>
    </PostsProvider>
  );
}

export default App;
