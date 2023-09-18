import React, { useState } from "react";
import "./form.css";

function Form() {
  let [values, setvalues] = useState({
    CHN: "",
    CNO: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  const [error, Seterror] = useState({
    CHN: false,
    CNO: false,
    mm: false,
    yy: false,
    cvc: false,
  });
  const handle = (e) => {
    let { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });

    Seterror({
      ...error,
      [name]: false,
    });
  };

  const validForm = () => {
    const newEroor = {};
    if (!values.CHN || !isValidName(values.CHN)) {
      newEroor.CHN = true;
    }
    if (!values.CNO || !isValidNumber(values.CNO)) {
      newEroor.CNO = true;
    }
    if (!values.mm || !isValidMonth(values.mm)) {
      newEroor.mm = true;
    }
    if (!values.yy || !isValidYear(values.yy)) {
      newEroor.yy = true;
    }
    if (!values.cvc || !isValidCVC(values.cvc)) {
      newEroor.cvc = true;
    }
    Seterror(newEroor);
    return Object.values(newEroor).some((errors) => errors);
  };
  const isValidName = (name) => {
    return /^[A-Za-z\s]+$/.test(name) && name.length >= 2;
  };
  const isValidNumber = (number) => {
    return number.length === 16 && /^\d+$/.test(number);
  };

  const isValidMonth = (month) => {
    return (
      /^\d+$/.test(month) &&
      parseInt(month, 10) >= 1 &&
      parseInt(month, 10) <= 12
    );
  };

  const isValidYear = (year) => {
    return /^\d+$/.test(year) && year.length === 2;
  };

  const isValidCVC = (cvc) => {
    return /^\d+$/.test(cvc) && cvc.length === 3;
  };

  //handle form

  const Handleform = (e) => {
    validForm();
    e.preventDefault();
    console.log(values);
    console.log(error)
  };
  return (
    <form className="formbox" onSubmit={Handleform}>
      <label>CARDHOLDER NAME</label>

      <input
        type="text"
        name="CHN"
        placeholder="e.g. Jane Appleseed"
        value={values.CHN}
        onChange={handle}
      />

      {error.CHN ? <label id="warning">Cardholder name required</label> : ""}
      <label>CARD NUMBER</label>
      <input
        type="text"
        name="CNO"
        placeholder="e.g. 1234 5678 9123 0000"
        value={values.CNO}
        onChange={handle}
      />
      {error.CNO ? <label id="warning">Cardholder number required</label> : ""}
      <div className="Date_cvv">
        <div>
          <label>EXP.DATE (MM/YY)</label>
          <div className="Date">
            <div>
              <input
                type="text"
                placeholder="MM"
                name="mm"
                value={values.mm}
                onChange={handle}
              />
              {error.mm ? <label id="warning">invalid month</label> : ""}
            </div>
            <div>
              <input
                type="text"
                placeholder="YY"
                name="yy"
                value={values.yy}
                onChange={handle}
              />
              {error.yy ? <label id="warning">invalid year</label> : ""}
            </div>
          </div>
        </div>
        <div className="cvv">
          <label>CVC</label>
          <input
            type="text"
            placeholder="e.g. 123"
            name="cvc"
            value={values.cvc}
            onChange={handle}
          />
          {error.cvc ? <label id="warning">invalid CVC</label> : ""}
        </div>
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Form;
