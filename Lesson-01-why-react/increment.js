const domcontainer = document.querySelector("#root");

const Increment = () => {
  const [counter,setCounter] = React.useState(0);
  return (
    <div>
      <h1 id="display">{counter}</h1>
      <div>
        <button id="button1" onClick={()=>setCounter(counter+1)} >Increment+</button>
        <button id="button2" onClick={()=>setCounter(counter-1)}>Decrement-</button>
      </div>
    </div>
  );
};

ReactDOM.render(<div className = "container">
         < Increment />
         < Increment />
         < Increment />
</div>, domcontainer);


