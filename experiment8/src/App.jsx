// 1. Import the useState hook from React
import { useState } from 'react';

function App() {
  // 2. Set up state. 'count' is the variable, 'setCount' is the function to update it. Initial value is 0.
  const [count, setCount] = useState(0);

  // 3. Event handler functions
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // 4. Render the UI (JSX)
  return (
    <div className="app-container">
      <h1>Experiment 8: Counter App</h1>

      {/* Display the current state */}
      <div className="counter-display">
        <h2>{count}</h2>
      </div>

      {/* Buttons tied to the event handlers */}
      <div className="button-group">
        <button onClick={handleIncrement}>Increment (+)</button>
        <button onClick={handleDecrement}>Decrement (-)</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;