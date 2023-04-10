import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const FavoritesContainer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      {state.favs.map((e) => (
             <Card key={e.id} sx={{ maxWidth: 345 }}>
                
              <CardMedia
                sx={{ height: 140 }}
                image="https://res.cloudinary.com/doz9ge8ss/image/upload/v1681068876/images_pg4gam.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {e.company.catchPhrase}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Email: {e.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Telefono: {e.phone} 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
      ))}
    </div>
    
  );
};

export default FavoritesContainer;
