import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { useContext_ } from "./ContextProvider";


export default function Header() {
  const { onClearPosts } = useContext_()
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}