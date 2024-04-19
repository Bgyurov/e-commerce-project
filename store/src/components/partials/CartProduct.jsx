import { Card, Button, Col } from 'react-bootstrap';
import { CartContext } from "../../CartContext.jsx"
import { useContext } from "react"
import { getProductData } from "../../products.js"

function CartProduct(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <Card className="mb-3">
            <Card.Body className="d-flex align-items-center">
                    <img src={`../${productData.imageUrl}`} alt={productData.title} style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '10px'}} />
                <Col xs={8} sm={9} md={10} lg={11}>
                    <div className='mr-5'>
                        <h5 className="card-title mb-0">{productData.title}</h5>
                        <p className="card-text mb-2">{quantity} in cart</p>
                        <p className="card-text mb-0">Total: ${(quantity * productData.price)}</p>
                    <Button variant="danger" size="sm" onClick={() => cart.deleteFromCart(productData.id)}>Remove</Button>
                    </div>
                </Col>
            </Card.Body>
        </Card>
    )
}
export default CartProduct;