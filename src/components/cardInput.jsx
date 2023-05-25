import "../cardInput.css";
import master from "../assets/mc.png";
import { MdVerified } from "react-icons/md";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

export default function CardInput({ cardInput, setCardInput, disableInput }) {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  const [verified, setVerified] = useState(false);
  const [isMasterCard, setIsMasterCard] = useState(false);
  useEffect(() => {
    if (cardInput.first.length === 4) {
      setIsMasterCard(true);
    } else {
      setIsMasterCard(false);
    }
    if (
      cardInput.first.length === 4 &&
      cardInput.second.length === 4 &&
      cardInput.third.length === 4 &&
      cardInput.fourth.length === 4
    ) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, [cardInput]);
  const handleInput = (e, position) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      setCardInput({
        ...cardInput,
        [position]: `${cardInput[position].slice(0, -1)}`,
      });
    }
  };
  const handleChange = (e, position) => {
    if (e.target.value.length <= 4) {
      setCardInput({
        ...cardInput,
        [position]: e.target.value,
      });
    } else {
      const theFocus =
        position === "first"
          ? second.current.focus()
          : position === "second"
          ? third.current.focus()
          : position === "third"
          ? fourth.current.focus()
          : null;
      theFocus;
    }
  };
  return (
    <div className="cibox">
      <div className="ciLeft">
        {isMasterCard ? (
          <img src={master} className="ciMaster" />
        ) : (
          <BsFillCreditCard2FrontFill size={30} />
        )}
        <div className="cardBox">
          <input
            type="number"
            className="cardNo"
            placeholder="2345"
            max={9999}
            value={cardInput.first}
            ref={first}
            onChange={(e) => handleChange(e, "first")}
            onKeyDown={(e) => handleInput(e, "first")}
            disabled={disableInput}
          />
          <div className="dash">-</div>
          <input
            type="number"
            className="cardNo"
            placeholder="1343"
            max={9999}
            ref={second}
            value={cardInput.second}
            onChange={(e) => handleChange(e, "second")}
            onKeyDown={(e) => handleInput(e, "second")}
            disabled={disableInput}
          />
          <div className="dash">-</div>
          <input
            type="number"
            className="cardNo"
            placeholder="2094"
            max={9999}
            ref={third}
            value={cardInput.third}
            disabled={disableInput}
            onChange={(e) => handleChange(e, "third")}
            onKeyDown={(e) => handleInput(e, "third")}
          />
          <div className="dash">-</div>
          <input
            type="number"
            className="cardNo"
            placeholder="3432"
            max={9999}
            ref={fourth}
            value={cardInput.fourth}
            disabled={disableInput}
            onChange={(e) => handleChange(e, "fourth")}
            onKeyDown={(e) => handleInput(e, "fourth")}
          />
        </div>
      </div>
      <div className="verifyBox">
        <MdVerified size={25} color={verified ? "rgb(35, 105, 200)" : ""} />
      </div>
    </div>
  );
}
