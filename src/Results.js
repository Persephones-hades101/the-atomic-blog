import { useContext_ } from "./ContextProvider";

export default function Results() {
  const { posts } = useContext_()
  return <p>🚀 {posts.length} atomic posts found</p>;
}