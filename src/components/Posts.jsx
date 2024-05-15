import React, { useState } from "react";
import Thumbnail1 from "../photos/blog1.jpg";
import Thumbnail2 from "../photos/blog2.jpg";
import Thumbnail3 from "../photos/blog3.jpg";
import Thumbnail4 from "../photos/blog4.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the title of the very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolo",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is the title of the very second post on this blog.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolo",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "technology",
    title: "This is the title of the very third post on this blog.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolo",
    authorID: 2,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "entertainment",
    title: "This is the title of the very fourth post on this blog.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolo",
    authorID: 4,
  },
];
const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      {posts.map(() => 
        <PostItem />
      )}
    </section>
  );
};

export default Posts;
