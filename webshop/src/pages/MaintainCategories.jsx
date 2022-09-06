import { useEffect, useState } from "react";

function MaintainCategories() {
    const [products, setProducts] = useState([]);


useEffect(() => {
    fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then((json) => setProducts(json)); 
}, []);

return ( 
<div>
    {products.map(element => 
        <div key={element.id}>
            <div>{element.name}</div>
            <div>{element.price}</div>
        </div>)}
</div> );
}
    
export default MaintainCategories;