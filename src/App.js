 
import './App.css';
import { Product } from './Components/Product';

function App() {
  const products = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const products2 = [
    {name:"Samsung", type:"disc"} ,{name:"HTC",type:"disc"} ,{name:"Micromax",type:"disc"}, {name:"Apple",type:"circle"}];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {products.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
      <h1>Mobile Manufactures</h1>
     
         {products2.map((e) => {
            return (
              <Product {...e}/>
            )
         })}
     
    </div>
  );
}

export default App;
