import './App.css';

function App() {

  
  return (
    <div className="App">
      <h1>Welcome to Myrhiam's Flower Business</h1>
      <Flower name="dalia" price={3.87} color={"red"}/>
      <Flower name="sun Flower" price={6.5} color={"orange"}/>
      <Flower name="rose" price={1.23} color={"pink"}/>
      <Flower name="daisy" price={5.4} color={"yellow"}/>
    </div>
  );
}

const expensiveStyle = {fontWeight: "500", color: "red", textDecorationLine: "underline"}
const onSaleStyle = {color: "green"}

const Flower = (props) => (
  <div>
    <h2 style={{color: props.color}}>{props.name}</h2>
    <h4 style={props.price >= 5 ? expensiveStyle : onSaleStyle}>{props.price}</h4>

  </div>

)

export default App;
