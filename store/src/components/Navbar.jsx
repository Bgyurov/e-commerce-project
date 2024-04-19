import { Button, Container, Navbar, Modal, Badge, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext.jsx';
import CartProduct from './partials/CartProduct.jsx';
import { BsCart3 } from 'react-icons/bs';

function NavBar() {

    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    const navigate = useNavigate();

    const purchaseItems = () => {
        navigate('/order-details');
        setShow(false);

    };

    useEffect(() => {
        setTotalCost(cart.getTotalCost()); // Update total cost whenever cart items change
    }, [cart.items]);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand className='text-white' href="/">VapeBG</Navbar.Brand>
                <Navbar.Toggle className="border-warning bg-white" />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow} variant="outline-warning">
                        <BsCart3 style={{ marginRight: '0.5rem' }} /><Badge bg="secondary">{productsCount}</Badge>
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ? (
                        <>
                            <p>Items in your cart:{productsCount}</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {totalCost.toFixed(2)}</h1>
                            <Button variant="success" onClick={purchaseItems}>
                                Purchase items!
                            </Button>
                        </>
                    ) : (
                        <h1>There are no items in your cart!</h1>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavBar;
