import "./cardPreview.css";
import apple from "../assets/apple.png";
import mastercard from "../assets/mc.png";
import chip from "../assets/chip.png";
import order from "../assets/order.png";
import { AiOutlineWifi } from "react-icons/ai";

export default function CardPreview({ cardInput }) {
  return (
    <div className="cpbox">
      <div className="blueLine"></div>
      <div className="mastercard">
        <div className="mcTop">
          <img src={chip} className="chip" />
          <AiOutlineWifi size={30} />
        </div>
        <div className="nameBox">Jonathan Michael</div>
        <div className="cardHidden">
          <div className="pass"></div>
          <div className="pass"></div>
          <div className="pass"></div>
          <div className="pass"></div>
          <div className="cardData">{cardInput.fourth}</div>
        </div>
        <div className="bottomCard">
          <div className="date">09/22</div>
          <div className="cardbox">
            <img src={mastercard} className="cardboxImg" />
            <div className="cardboxTxt">mastercard</div>
          </div>
        </div>
      </div>
      <div className="graybox">
        <div className="section">
          <div className="sectionTitle">Company</div>
          <div className="sectionData">
            <div className="applebox">
              <img src={apple} className="apple" />
            </div>
            Apple
          </div>
        </div>
        <div className="section">
          <div className="sectionTitle">Order Number</div>
          <div className="sectionData">1266201</div>
        </div>
        <div className="section">
          <div className="sectionTitle">Product</div>
          <div className="sectionData">Macbook Air</div>
        </div>
        <div className="section">
          <div className="sectionTitle">VAT (20%)</div>
          <div className="sectionData">$100.00</div>
        </div>
      </div>
      <div className="cut">
        <div className="circle"></div>
        <div className="dashes"></div>
        <div className="circler"></div>
      </div>
      <div className="grayboxDown">
        <div className="downLeft">
          <div className="youHave">You have to Pay</div>
          <div className="bigNo">
            549.<span className="smallNine">99</span>
            <span className="currency">USD</span>
          </div>
        </div>

        <div className="downRight">
          <img src={order} className="order" />
        </div>
      </div>
    </div>
  );
}
