import React from 'react';

function Product (props) {
    return (
        <div className="items">
            <div className="item">
                <div className="content">
                    <div className="name">
                        <p>Product {props.name} goes here!</p>
                    </div>
                    <div className="description">
                        <p>Product description</p>
                    </div>
                    <div className="extra">
                        <p>Just Extra!!!</p>
                    </div>
                </div>
           </div>
        </div>
    );
}


class ProductList extends React.Component {
    render () {
        return (
            <div>
            <Product
                name='Product 1'
            />
            </div>
        );
    }
}

export default ProductList;
