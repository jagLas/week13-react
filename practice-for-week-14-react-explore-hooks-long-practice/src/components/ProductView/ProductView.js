import React, { useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  const [sideOpen, setSideOpen] = useState(() => {
    const sidePanel = localStorage.getItem('sideOpen');
    if (sidePanel == undefined) {
      // console.log('no data stored')
      return true;
    } else {
      return (sidePanel === 'true') ? true: false;
    }
  });

  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    // console.log('checking if product is selected')
    if (selectedProduct) {
      // console.log('Setting sideOpen to true')
      setSideOpen(true)
    }
  }, [selectedProduct])

  useEffect(() => {
    // console.log('checking if side is closed')
    if (!sideOpen) {
      // console.log('Setting product to ""')
      setSelectedProduct('');
    }
    localStorage.setItem('sideOpen', sideOpen)
  },[sideOpen])

  // console.log('ProductView Loaded')

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              isSelected={(selectedProduct.id === item.id) ? true: false}
              key={item.id}
              product={item}
              onClick={() => {
                // console.log('SELECTED', item)
                setSelectedProduct(item);
              }}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
              onClick={() => {
                // console.log('TOGGLE SIDE PANEL');
                setSideOpen(prevSideOpen => !prevSideOpen)
              }}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails product={selectedProduct} visible={sideOpen} />
      </div>
    </div>
  );
}

export default ProductView;