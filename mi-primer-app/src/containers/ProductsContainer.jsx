import { useState } from "react";
import CardComponent from "../component/CardComponent";

const ProductsContainer = () => {

  const [carrito, setCarrito] = useState([])

  const agregarCarrito = (event, name) => {
    carrito.push(name);
    setCarrito([...carrito]);
  }
  
    return (
      <div className="container">
        {carrito.length}
          <div class="row">
            <CardComponent title={'Amplificador EVH'} img={'https://www.valenciamusical.com/1674-medium_default/evh-5150-iii-head-el34-50w.jpg'}agregarCarrito={agregarCarrito}/>
            <CardComponent title={'Amplificador Marshall'} img={'https://www.ecomusicweb.com/wp-content/uploads/2018/11/mb30.jpg'}agregarCarrito={agregarCarrito}/>
            <CardComponent title={'Amplificador Fender'} img={'https://mercasonic.soniccdn.com/sda/large/2616/3822616.jpg'}agregarCarrito={agregarCarrito}/>
            <CardComponent title={'Amplificador Ashdown'} img={'https://http2.mlstatic.com/D_NQ_NP_755601-MLA31631099273_072019-W.jpg'}agregarCarrito={agregarCarrito}/>
            <CardComponent title={'Amplificador Hartke'} img={'https://http2.mlstatic.com/D_NQ_NP_823098-MLA41353727041_042020-O.webp'}agregarCarrito={agregarCarrito}/>
          </div>
      </div>
    );
  };
  export default ProductsContainer;
  