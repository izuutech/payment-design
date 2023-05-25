import "../cardInput.css";
import master from "../../public/mc.png";
import { MdVerified } from "react-icons/md";

export default function CardInput() {
  return (
    <div className="cibox">
      <div className="ciLeft">
        <img src={master} className="ciMaster" />
        <div className="cardBox">
          <input
            type="number"
            className="cardNo"
            placeholder="2345"
            maxLength={4}
          />
          <div className="dash">-</div>
          <input
            type="number"
            className="cardNo"
            placeholder="1343"
            maxLength={4}
          />
          <div className="dash">-</div>
          <input
            type="number"
            className="cardNo"
            placeholder="2094"
            maxLength={4}
          />
          <div className="dash">-</div>
          <input
            type="number"
            className="cardNo"
            placeholder="3432"
            maxLength={4}
          />
        </div>
      </div>
      <div className="verifyBox">
        <MdVerified size={25} color="rgb(35, 105, 200)" />
      </div>
    </div>
  );
}
