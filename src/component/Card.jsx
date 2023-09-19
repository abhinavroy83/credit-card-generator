import "./card.css";

function Card({ cardholderName, cardNumber, cardMonth, cardYear, cvv }) {
  return (
    <div className="card">
      {/* front card  */}
      <div className="Cardfront">
        <div className="circle">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <div>
          <div className="cardname">
            <p>{cardNumber}</p>
          </div>
          <div className="holdername_mmyy">
            <p>{cardholderName}</p>
            <div className="mm_yy">
              <p>{cardMonth}</p>
              <p>/</p>
              <p>{cardYear}</p>
            </div>
          </div>
        </div>
      </div>

      {/* back card */}
      <div className="CardBack">
        <div className="black"></div>
        <div className="cvv_adjust">
          <div className="cvv_number">
            <p>{cvv}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
