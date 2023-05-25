import "./groupInput.css";
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
          <input className="giInp" type="number" />
        </div>
      </div>
    </div>
  );
}
