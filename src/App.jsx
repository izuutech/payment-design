import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GrClose } from "react-icons/gr";
import { HiPencil } from "react-icons/hi";
import CardInput from "./components/cardInput";
import GroupInputs from "./components/groupInputs";
import CardPreview from "./components/cardPreview";
import { creditCard } from "./assets/credit-cards.png";

function App() {
  const [disableInput, setDisableInput] = useState(true);
  const [cardInput, setCardInput] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    let interval = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="main">
        <div className="top">
          <GrClose size={30} />
        </div>
        <div className="box">
          <div className="left">
            <div className="logoTopBox">
              <div className="logobox">
                <div className="imgbox">
                  <img src={creditCard} className="logo" />
                </div>
                <span className="h1">
                  AceCoin<span className="h1pay">Pay</span>
                </span>
              </div>
              <div className="timer">
                <div className="timebox">{formatTime(seconds)[0]}</div>
                <div className="timebox">{formatTime(seconds)[1]}</div>
                <div className="colon">:</div>
                <div className="timebox">{formatTime(seconds)[3]}</div>
                <div className="timebox">{formatTime(seconds)[4]}</div>
              </div>
            </div>
            <div className="header">
              <div className="headerLeft">
                <div className="title">Card number</div>
                <div className="summary">
                  Enter the 16-digit card number on the card
                </div>
              </div>
              <div
                className={
                  !disableInput
                    ? "headerRight headerRightDisable"
                    : "headerRight"
                }
                onClick={() => setDisableInput(!disableInput)}
              >
                <HiPencil size={20} />
                Edit
              </div>
            </div>
            <CardInput
              setCardInput={setCardInput}
              cardInput={cardInput}
              disableInput={disableInput}
            />
            <GroupInputs disableInput={disableInput} />
            <div
              className="btn"
              onClick={() => {
                setSubmitting(!submitting);
              }}
            >
              {submitting ? <div className="loading-spinner"></div> : "Pay Now"}
            </div>
          </div>
          <div className="right">
            <CardPreview cardInput={cardInput} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
