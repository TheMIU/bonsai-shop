import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../common/Product';

function Products() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

// get all
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/product/all');
    if (response.data.length === 0) {
      alert('No data found');
    } else {
      setData(response.data);
    }
  } catch (error) {
    alert(error);
  }
};

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center p-5 bg-[#000000cc]'>
      {data.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
}

export default Products;
