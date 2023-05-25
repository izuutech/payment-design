import "./groupInput.css";
import { CgMenuGridR } from "react-icons/cg";

export default function GroupInputs() {
  return (
    <div className="giMain">
      <div className="giBox">
        <div className="giLeft">
          <div className="title">CVV Number</div>
          <div className="summary">
            Enter the 3 or 4 digit number on the card
          </div>
        </div>
        <div className="giRight">
          <div className="inpcvv">
            <input className="giInp" type="number" />
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
          <input className="expInp" type="number" />
          <div className="slash">/</div>
          <input className="expInp" type="number" />
        </div>
      </div>
      <div className="giBox">
        <div className="giLeft">
          <div className="title">Password</div>
          <div className="summary">Enter your dynamic password</div>
        </div>
        <div className="giRight">
          <div className="inpcvv">
            <input className="giInp" type="password" />
          </div>
          <CgMenuGridR size={25} color="grey" />
        </div>
      </div>
    </div>
  );
}
