import "./card.css";

function Card({ cardholderName, cardNumber, cardMonth, cardYear ,cvv}) {
  return (
    <div className="card">
      {/* front card  */}
      <div className="Cardfront">
        <div>
          <p>{cardNumber}</p>
          <div>
            <p>{cardholderName}</p>
            <div>
              <p>{cardMonth}</p>
              <p>/</p>
              <p>{cardYear}</p>
            </div>
          </div>
        </div>
      </div>

      {/* back card */}
      <div className="CardBack">
        <div className="cvvv"></div>
        <div className="cvv_number">
          <p>{cvv}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
