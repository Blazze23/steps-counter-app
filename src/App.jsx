import { useState } from "react";
import Counter from "./Counter";

const MESSAGES = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [openCounter, setOpenCounter] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((currStep) => currStep - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((currStep) => currStep + 1);
  };

  const handleClose = () => {
    setIsOpen((is) => !is);
  };

  const handleCounter = () => {
    setOpenCounter((is) => !is);
  };

  let content;

  if (isOpen)
    content = (
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {step}: {MESSAGES[step - 1]}
        </p>

        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {content}
      <div className="buttons">
        <button className="counterBtn active" onClick={handleCounter}>
          Open Counter
        </button>
      </div>
      {openCounter && <Counter />}
    </>
  );
}

export default App;
