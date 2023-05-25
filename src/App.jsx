import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GrClose } from "react-icons/gr";
import { HiPencil } from "react-icons/hi";
import CardInput from "./components/cardInput";
import GroupInputs from "./components/groupInputs";

function App() {
  const [count, setCount] = useState(0);

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
                <div className="timebox">1</div>
                <div className="colon">:</div>
                <div className="timebox">2</div>
                <div className="timebox">9</div>
              </div>
            </div>
            <div className="header">
              <div className="headerLeft">
                <div className="title">Card number</div>
                <div className="summary">
                  Enter the 16-digit card number on the card
                </div>
              </div>
              <div className="headerRight">
                <HiPencil size={20} />
                Edit
              </div>
            </div>
            <CardInput />
            <GroupInputs />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
