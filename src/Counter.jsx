import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  let content;

  if (counter === 0) {
    content = "Today is ";
  } else if (counter > 0) {
    content = counter + " days from today is ";
  } else content = Math.abs(counter) + " days ago was ";

  return (
    <div className="steps">
      <div className="buttons">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="buttons">
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <p>Count: {counter}</p>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        <span>{content}</span>
        <span>{date.toDateString()}</span>
      </h3>
    </div>
  );
}

export default Counter;
