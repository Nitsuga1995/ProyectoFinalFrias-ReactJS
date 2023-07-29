import React from 'react';
import TabsMenu from '../../components/tabs';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../sdk/products';
import ItemsList from '../../components/items-list';

const CATEGORIES = [
  { id: 'all', title: 'Todos los productos' },
  { id: 'Console', title: 'Consolas' },
  { id: 'Games', title: 'Juegos' },
  { id: 'Amiibo', title: 'Amiibos' }
];

const ItemContainer = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { category } = useParams();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';

  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate]);

  React.useEffect(() => {
    setLoading(true);
    getProducts()
      .then(res => res.json())
      .then(data => {
        // Filtrar los productos por categoría seleccionada o mostrar todos si se selecciona 'all'
        const filteredItems = category === 'all' ? data : data.filter(item => item.category === category);
        setItems(filteredItems);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      })
      .finally(() => setLoading(false)); // Se ejecutará después de que la promesa se resuelva o se rechace.
  }, [category]);

  return (
    <div>
      <TabsMenu current={current} items={CATEGORIES} />
      <div style={{ padding: 20 }}>
        <ItemsList items={items} loading={loading}/>
      </div>
    </div>
  )
}

export default ItemContainer;