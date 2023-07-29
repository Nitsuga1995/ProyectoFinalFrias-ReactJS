import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ItemCount from '../item-count';
import { AppContext } from '../../context';

const Item = ({ data }) => {
  const {id, title, image, stock, price} = data;

  const { addProductToCarrito } = React.useContext(AppContext);

  
  const addToCarrito = (quantity) => {
    addProductToCarrito ({
      id: id,
      producto: title,
      pricePerUnit: price,
      quantity: quantity
    })
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={'/product/' + id}>
          {title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={stock} addToCarrito={addToCarrito}/>
      </CardActions>
    </Card>
  );
}

export default Item