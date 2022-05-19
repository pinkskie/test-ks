import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

const PostItem = ({post, full}) => (
  <Card sx={{ width: '100%' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height={full ? "500" : "140"}
        image={post.img}
        alt={post.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Typography style={{marginTop: '1rem'}} variant="body2" color="text.secondary">
          {post.date}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default PostItem;