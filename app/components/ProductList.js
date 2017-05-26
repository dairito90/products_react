import React from 'react';

function Product(props) {

    return (

        <div className="item">
            <div className="image">
                <img src={this.props.productImageUrl}/>
            </div>
            <div className="content">
                <div className="header">
                    <a>
                        <i className="caret"/>
                    </a>
                </div>
                <div className="description">
                    <a href={this.props.url}></a>
                    <p>{this.props.description}</p>
                </div>
                <div className="extra">
                    <span>Submitted by</span>
                    <img className="avatar image" src={this.props.submitterAvatarUrl}/>
                </div>
            </div>
        </div>

    );
}

class ProductList extends React.Component {

    render() {
        const product = Seed.product[0];
        return (
            <div>
                <Product id={product.id} title={product.title} description={product.description} url={product.url} votes={product.votes} submitterAvatarUrl={product.submitterAvatarUrl} productImageUrl={product.productImageUrl}/>
            </div>

        );
    }
}

export default ProductList;
