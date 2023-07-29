import React, { useContext } from 'react';
import { getProducts } from '../../sdk/products';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/product-detail';
import { AppContext } from '../../context';

const ProductDetailsContainer = () => {
  const [data, setData] = React.useState({});
  const { id } = useParams();

  const { addProductToCarrito } = useContext(AppContext);

  React.useEffect(() => {
    getProducts()
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        for (var i = 0; i < data.length; i++){
          // eslint-disable-next-line 
          if (data[i].id == id){
            setData(data[i]);
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Aquí puedes manejar el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario.
      });
  }, [id]);

  console.log(id); // Verificar si el ID del producto se recibe correctamente

  return (
    <div>
      <ProductDetail data={data} addToCarrito={addProductToCarrito}/> {/* Asegurarse de que los datos se pasan al componente */}
    </div>
  );
};

export default ProductDetailsContainer;