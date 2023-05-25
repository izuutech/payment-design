import { useState } from "react";
import "./groupInput.css";
import { CgMenuGridR } from "react-icons/cg";

export default function GroupInputs({ disableInput }) {
  const [input, setInputs] = useState({
    cvv: "",
    month: "",
    year: "",
    password: "",
  });
  const [focus, setFocus] = useState({
    cvv: false,
    month: false,
    year: false,
    password: false,
  });

  const handleKey = (e, position) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      setInputs({
        ...input,
        [position]: `${input[position].slice(0, -1)}`,
      });
    }
  };
  const handleInput = (e, position, maxLength) => {
    if (input[position].length < maxLength || !maxLength) {
      setInputs({ ...input, [position]: e.target.value });
    }
  };
  const handleFocus = (e, position) => {
    setFocus({
      ...{
        cvv: false,
        month: false,
        year: false,
        password: false,
      },
      [position]: true,
    });
  };
  return (
    <div className="giMain">
      <div className="giBox">
        <div className="giLeft">
          <div className="title">CVV Number</div>
          <div className="summary">
            Enter the 3 or 4 digit number on the card
          </div>
        </div>
        <div className={`giRight ${focus.cvv ? "borderFocus" : ""}`}>
          <div className={`inpcvv`}>
            <input
              className={`giInp`}
              type="number"
              max={999}
              value={input.cvv}
              onChange={(e) => handleInput(e, "cvv", 3)}
              onKeyDown={(e) => handleKey(e, "cvv")}
              onFocus={(e) => handleFocus(e, "cvv")}
              disabled={disableInput}
            />
          </div>
          <CgMenuGridR size={25} color="grey" />
        </div>
      </div>
      <div className="giBox">
        <div className="giLeft">
          <div className="title">Expiry Date</div>
          <div className="summary">Enter the expiration date of the card</div>
        </div>
        <div className="giRightNoBox">
          <input
            className={`expInp ${focus.month ? "borderFocus" : ""}`}
            type="number"
            max={99}
            value={input.month}
            onChange={(e) => handleInput(e, "month", 2)}
            onKeyDown={(e) => handleKey(e, "month")}
            onFocus={(e) => handleFocus(e, "month")}
            disabled={disableInput}
          />
          <div className="slash">/</div>
          <input
            className={`expInp ${focus.year ? "borderFocus" : ""}`}
            type="number"
            max={99}
            value={input.year}
            onChange={(e) => handleInput(e, "year", 2)}
            onKeyDown={(e) => handleKey(e, "year")}
            onFocus={(e) => handleFocus(e, "year")}
            disabled={disableInput}
          />
        </div>
      </div>
      <div className="giBox">
        <div className="giLeft">
          <div className="title">Password</div>
          <div className="summary">Enter your dynamic password</div>
        </div>
        <div className={`giRight ${focus.password ? "borderFocus" : ""}`}>
          <div className={`inpcvv`}>
            <input
              className={`giInp`}
              type="password"
              value={input.password}
              onChange={(e) => handleInput(e, "password")}
              onKeyDown={(e) => handleKey(e, "password")}
              onFocus={(e) => handleFocus(e, "password")}
              disabled={disableInput}
            />
          </div>
          <CgMenuGridR size={25} color="grey" />
        </div>
      </div>
    </div>
  );
}
