import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setstep] = useState(1);
  const [visbile, setvisbile] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <div className="container-steps">
      <button className="isOpen" onClick={() => setvisbile(!visbile)}>
        x
      </button>
      <div className={!visbile ? "visbile steps" : "steps"}>
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">{messages[step - 1]}</p>

        <div className="buttons">
          <button
            onClick={() => (step > 1 ? setstep(step - 1) : null)}
            className="previous"
          >
            Previous
          </button>
          <button
            onClick={() => (step < 3 ? setstep(step + 1) : null)}
            className="next"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
