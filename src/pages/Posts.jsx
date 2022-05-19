import * as React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import PostItem from '../components/Card';

const Posts = () => {
  const posts = useSelector(state => state.posts)

  return (
    <div style={{padding: '1rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr 1fr'}}>
      {posts.map(post => (
        <Link to={`/details/${post.id}`} key={post.id}>
          <PostItem post={post}/>
        </Link>
      ))}
    </div>
  )
}

export default Posts;