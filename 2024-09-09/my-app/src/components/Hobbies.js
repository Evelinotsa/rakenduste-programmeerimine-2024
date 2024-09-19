import { useState } from "react";

function MyHobbies({ name, hobbies }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>Minu huvid ja hobid</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <h2>Võta ühendust</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Sõnum:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Saada ära</button>
      </form>
    </div>
  );
}

export default MyHobbies;
