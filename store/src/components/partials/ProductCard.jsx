import { Card, Button , Form , Row ,Col  , Badge} from "react-bootstrap"
import { Link } from "react-router-dom"; 
import { CartContext } from "../../CartContext.jsx"
import { useContext } from "react"
function ProductCard(props){
    const product = props.product;
    const isNew = product.isNew
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    return (
        <Card style={{ width: '18rem', backgroundColor: '#dee0e3' }}>
            {isNew ? 
            <>
           <Badge className="position-absolute top-0 start-0 m-2" pill bg="warning" text="dark">
                New
            </Badge>
            </>
            : null}
        <Card.Body style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card.Img variant="top" style={{ maxHeight: '80%', width: '100%', objectFit: 'contain' }} src={`../${product.imageUrl}`} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
            </Link>
            {productQuantity > 0 ?
                <>
                    <Form  as={Row}>
                        <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                       
                    </Form>
                    <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                </>
                :
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
            }
        </Card.Body>
    </Card>

    )
}

export default ProductCard