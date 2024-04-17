import { useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const currencyCodes = ["USD", "EUR", "GBP", "GHS", "JPY", "CAD"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Corrected: Set the value instead of null
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Here you can add your logic for making the API request and handling the response
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/convert", {
  //       formData,
  //     });
  //     console.log("hello")
  //     console.log(response.data)
  // setResult(response.data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { from, to, amount } = formData; // Destructure formData
      const response = await axios.post("http://localhost:5000/api/convert", {
        from,
        to,
        amount,
      });
      if (response.data) {
        setResult(response.data); // Set the result state
      }
    } catch (error) {
      setError(error.response.data.message); // Set the error state
    }
  };
  

  return (
    <>
      <div>
        <section className="hero">
          <h1>Global Currency Converter</h1>
          <p>
            Your go-to solution for real-time currency conversions worldwide
          </p>
          <section className="converter">
            <form onSubmit={handleSubmit}>
              <select
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select From Currency</option>
                {currencyCodes.map((code) => (
                  <option value={code} key={code}>
                    {code}
                  </option>
                ))}
              </select>
              <select
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select To Currency</option>
                {currencyCodes.map((code) => (
                  <option value={code} key={code}>
                    {code}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                className="input"
              />
              <button type="submit" className="submit-btn">
                Convert
              </button>
            </form>
            {/* Display result if available */}
            {result && (
              <div className="result">
                <p>
                  Converted Amount : {result.convertedAmount} {result.target}
                </p>
                <p>Conversion Rate : {result.conversionRate}</p>
              </div>
            )}
            {/* Display error if available */}
            {error && <p className="error">Error : {error}</p>}
          </section>
        </section>
        <section className="additional-info">
          <h2>Why choose Global Currency Converter</h2>
          <p>Detailed explanations on advantages or instructions to use</p>
        </section>
      </div>
    </>
  );
}

export default App;
