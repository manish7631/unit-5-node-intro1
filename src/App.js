 
import './App.css';

function App() {
  const products = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const products2 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {products.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
      <h1>Mobile Manufactures</h1>
      <ul>
         {products2.map((e) => {
           return <li>{e}</li>
         })}
      </ul>
    </div>
  );
}

export default App;
