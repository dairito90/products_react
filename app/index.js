import React from 'react';
import ReactDom from 'react-dom';
require('./index.css');
import ProductList from './components/ProductList';

ReactDom.render(
<ProductList/>,
    document.getElementById('content')
)
