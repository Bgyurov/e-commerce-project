import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductData } from '../products.js';
import { CartContext } from '../CartContext.jsx'
import { Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const cart = useContext(CartContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

  
   

    useEffect(() => {
        const productData = getProductData(productId);
        if (productData) {
            setProduct(productData);
        } else {
            console.error('Product data does not exist for ID: ' + productId);
        }
    }, [productId]);

    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
    };

    const handleAddToCart = () => {
        cart.addOneToCart(productId);
    };

    const handleRemoveFromCart = () => {
        cart.removeOneFromCart(productId);
    };

    const handleDeleteFromCart = () => {
        cart.deleteFromCart(productId);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4 bg-light p-4 rounded shadow-sm">
            <div className="row">
                <div className="col-md-6">
                <div className=" mb-5">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>

                <Button  variant="secondary"><BsArrowLeft /> Back</Button>
                </Link>
            </div>
                    <img
                        src={`../${product.sliderImg[currentSlide]}`}
                        alt={product.title}
                        className="img-fluid rounded"
                        style={{
                            width: '80%',
                            height: '80%',
                            transition: 'transform 0.3s ease',
                            transform: isHovered ? 'scale(1.1, 1.1)' : 'scale(1, 1)',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className='text-black'>{product.title}</h2>
                    <p className='text-black'>Price: ${product.price}</p>
                    {product.description && <p className='text-black'>Description: {product.description}</p>}
                    {cart.getProductQuantity(productId) > 0 ? (
                        <div>
                            <p className='text-black'>In Cart: {cart.getProductQuantity(productId)}</p>
                            <Button className="btn btn-primary me-2" onClick={handleAddToCart}>+</Button>
                            <Button className="btn btn-primary me-2" onClick={handleRemoveFromCart}>-</Button>
                            <Button className="btn btn-danger" onClick={handleDeleteFromCart}>Remove from cart</Button>
                        </div>
                    ) : (
                        <Button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</Button>
                    )}
                </div>
            </div>
            <div className="row mt-5">
                {product.sliderImg.map((img, index) => (
                    <div key={index} className="col-sm-2">
                        <img src={`../${img}`} alt={`Thumbnail ${index}`} className="img-thumbnail" style={{ cursor: 'pointer', height: '100px', width: 'auto', margin: '0 5px' }} onClick={() => handleThumbnailClick(index)} />
                    </div>
                ))}
            </div>
          
        </div>
    );
};
      

export default ProductPage;
