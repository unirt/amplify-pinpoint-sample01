import { useState, useEffect } from 'react';
import DummyProducts from '../../constants/DummyProducts';
import { ProductType } from '../../types';

const useProductDetail = (id: string) => {
  const [productDetail, setProductDetail] = useState<ProductType>();
  useEffect(() => {
    // TODO: replace api call
    const target = DummyProducts.filter((product) => product.id === id);
    setProductDetail(target[0]);
  }, [id]);

  return {
    productDetail,
  };
};

export default useProductDetail;
