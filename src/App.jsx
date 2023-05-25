import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GrClose } from "react-icons/gr";
import { HiPencil } from "react-icons/hi";
import CardInput from "./components/cardInput";
import GroupInputs from "./components/groupInputs";
import CardPreview from "./components/cardPreview";

function App() {
  const [disableInput, setDisableInput] = useState(true);
  const [cardInput, setCardInput] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [time, setTime] = useState({
    minute: 1,
    secs: 9,
  });

  // useEffect(() => {
  //   let interval = setInterval(() => {

  //     if (time.secs <= 0 && time.minute > 0) {
  //       setTime((prev) => ({
  //         ...time,
  //         minute: prev.minute - 1,
  //         secs: 59,
  //       }));
  //     } else if (time.secs === 0 && time.minute === 0) {
  //       setTime({
  //         minute: 2,
  //         secs: 0,
  //       });
  //     } else if (time.secs > 0) {
  //       setTime((prev) => ({ ...time, secs: prev.secs - 1 }));
  //     } else {
  //       setTime({ ...time, secs: 59 });
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

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
                  <img src="/public/credit-cards.png" className="logo" />
                </div>
                <span className="h1">
                  AceCoin<span className="h1pay">Pay</span>
                </span>
              </div>
              <div className="timer">
                <div className="timebox">0</div>
                <div className="timebox">{time.minute}</div>
                <div className="colon">:</div>
                <div className="timebox">
                  {time.secs.toString().length > 1
                    ? time.secs.toString().charAt(0)
                    : 0}
                </div>
                <div className="timebox">
                  {time.secs.toString().length === 2
                    ? time.secs.toString().charAt(1)
                    : time.secs}
                </div>
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
                  disableInput
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
            <div className="btn">Pay Now</div>
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
