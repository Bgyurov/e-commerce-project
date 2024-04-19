import {Row , Col} from 'react-bootstrap'
import { productsArray } from '../products.js'
import ProductCard from '../components/partials/ProductCard.jsx'
function Store() {
    return (
        <>
        <h1 align='center' className='p-3'>Welcome to the <span className='text-warning'>Vape</span>Bg</h1>
        <Row xs={1} md={3} className="g-4">
            {productsArray.map((product , idx) => (

            <ul align="center" key={idx}>
                <ProductCard product={product} />
            </ul>
            ))}
           
        </Row>
        </>
    )
}
export default Store