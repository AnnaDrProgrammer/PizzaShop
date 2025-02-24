import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('http://localhost:3001/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('оооощшииииииббббббкаааа');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>'Загрузка...'</>;
  }

  return (
    <div>
      <img src={pizza.imageUrl} alt="pizzaIMG" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price}</p>
    </div>
  );
};

export default FullPizza;
