import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  // const blogName = "Overreacted"
  // const alt = "blog logo"
  // const aboutText ="Persomal blog by DanAbramov. I explain with words and code."

  return (
    <div className="App">
      <Header blogName={blogData.blogName}/>
      <About image={blogData.image} alt={alt} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    </div>
  );
}

export default App;
