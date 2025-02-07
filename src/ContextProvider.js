import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}



// Create a new Context
const Context = createContext()


function ContextProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
        `${post.title} ${post.body}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    // Provide value to the child components
    <Context.Provider value={{
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }}>
      {children}
    </Context.Provider>
  )
}


function useContext_() {
  const context = useContext(Context)
  return context;
}

export { ContextProvider, useContext_ };