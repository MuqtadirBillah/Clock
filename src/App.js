import { useState } from 'react';

function App() {

  const [date, setDate] = useState();

  function Time(){
    var d = new Date();
    setDate(d.toLocaleTimeString());
  }
  setInterval(Time, 1000);

  return (
    <div className="appDiv">
      <h1>{date}</h1>
    </div>
  );
}

export default App;
