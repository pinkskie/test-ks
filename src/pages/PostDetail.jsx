import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux"
import { getById } from '../store/reducer';
import PostItem from '../components/Card';

const PostDetail = () => {
  const {id} = useParams();
  const details = useSelector(getById(id))
  
  return (
    <div style={{padding: '1rem'}}>
      <PostItem post={details} full/>
    </div>
  )
}

export default PostDetail;

