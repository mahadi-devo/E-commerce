import {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(products=>setProducts(products))
  }, []);


  return (
    <div className="App">
      <h1 className="p-5 text-center">Store Products</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {
          products.map(product => (
              <Card className="m-2" style={{ width: '18rem' }} key={product.id}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button variant="primary">Buy {product.price}</Button>
                </Card.Body>
              </Card>
          ))
        }
      </div>
    </div>
  );
}

export default App;
