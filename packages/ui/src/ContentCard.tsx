import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface ContentCardProps {
  imageCard: string;
  titleCard: string;
  textCard: string;
  firstAction: string;
  firstLink:string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  imageCard,
  titleCard,
  textCard,
  firstAction,
  firstLink,
}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 240, width: 300, objectFit:"cover" }} image={imageCard} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titleCard}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {textCard}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={firstLink}>{firstAction}</Button>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
