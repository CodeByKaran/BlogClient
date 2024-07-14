import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [totalBlog, setTotalBlog] = useState(null);

  return (
    <BlogContext.Provider value={{ totalBlog, setTotalBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
