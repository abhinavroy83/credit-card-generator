import "./App.css";
import Form from "./component/Form";
import Card from "./component/Card";
import { useState } from "react";

function App() {
  const [cardinfo, setcardinfo] = useState({
    cardNumber: "0000 0000 0000 000",
    cardholderName: "Abhinav",
    cardMonth: '00',
    cardYear:'00',
    cvv:'000'
  });

  const updateCardInfo = (newCardInfo) => {
    setcardinfo(newCardInfo);
  };

  return (
    <div className="App">
      <Card
        cardholderName={cardinfo.cardholderName}
        cardNumber={cardinfo.cardNumber}
        cardMonth={cardinfo.cardMonth}
        cardYear={cardinfo.cardYear}
        cvv={cardinfo.cvv}
      />

      <Form updateCardInfo={updateCardInfo} />
    </div>
  );
}

export default App;
