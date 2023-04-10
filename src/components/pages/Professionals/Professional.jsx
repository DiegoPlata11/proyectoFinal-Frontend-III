import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

const Professional = ({ users, dispatch, favs }) => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <h3>Nuestros profesionales</h3>
      {users.map((user) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={user.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  Dr
                </Avatar>
              }
              title={user.name}
            />
            <CardMedia
              component="img"
              height="194"
              image={
                "https://res.cloudinary.com/doz9ge8ss/image/upload/v1681068876/images_pg4gam.jpg"
              }
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Telefono:{user.phone}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  dispatch({ type: "HANDLE_FAVORITE", payload: user })
                }
              >
                <FavoriteIcon
                  color={
                    favs.some((fav) => fav.id === user.id)
                      ? "error"
                      : "disabled"
                  }
                />
              </IconButton>
              <Link to={`/dentista/${user.id}`}>
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Professional;
