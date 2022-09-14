import { useState, useEffect } from 'react';
import DummyProducts from '../../constants/DummyProducts';
import { ProductType } from '../../types';

const useProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    // TODO: replace api call
    setProducts(DummyProducts);
  }, []);

  return {
    products,
  };
};

export default useProducts;
