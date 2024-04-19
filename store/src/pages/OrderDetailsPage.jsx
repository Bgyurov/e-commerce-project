import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext.jsx';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { getProductData } from '../products.js';

function OrderDetailsPage() {
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountedTotal, setDiscountedTotal] = useState(0);
    const { items, getTotalCost } = useContext(CartContext);

    const applyDiscount = () => {
        // Call getTotalCost with the discount code to calculate the discounted total
        const total = getTotalCost(discountCode);
        setDiscountedTotal(total);
        setDiscountApplied(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        applyDiscount(); // Apply the discount
    };
    let sum = 0
    return (
        <Container>
            <h1>Order Details</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        const product = getProductData(item.id); // Get product data for current item
                        sum += product.price;
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><img src={product.imageUrl} alt="Product Image" style={{ maxWidth: '100px' }} /></td>
                                <td>{product.title}</td> {/* Product name */}
                                <td>${product.price.toFixed(2)}</td> {/* Product price */}
                                <td>{item.quantity}</td> {/* Quantity */}
                            </tr>
                        );
                    })}
                    <tr>
                        <td colSpan="3"></td>
                        <td>Total:</td>
                        <td>${sum.toFixed(2)}</td>
                       
                    </tr>
                    {discountApplied && (
                        <tr>
                            <td colSpan="3"></td>
                            <td>Discount:</td>
                            <td>${(sum - discountedTotal).toFixed(2)}</td>
                        </tr>
                    )}
                    {discountApplied && (
                        <tr>
                            <td colSpan="3"></td>
                            <td>New Total:</td>
                            <td>${discountedTotal.toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>

            </Table>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="discountCode">
                    <Form.Label column sm="2">Discount Code:</Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" placeholder="Enter discount code" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
                    </Col>
                    <Col sm="6">
                        <Button variant="primary" type="submit" disabled={discountApplied}>Apply</Button>
                    </Col>
                </Form.Group>
            </Form>

        </Container>
    );
}

export default OrderDetailsPage;
