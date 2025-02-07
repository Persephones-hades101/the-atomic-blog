import { useContext_ } from "./ContextProvider";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = useContext_()
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}