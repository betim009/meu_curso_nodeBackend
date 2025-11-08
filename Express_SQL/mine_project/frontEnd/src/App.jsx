import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [tvs, setTvs] = useState([]);
  const [alert, setAlert] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getTvs = async () => {
      const endpoint = "http://localhost:3000/tvs";
      const { data } = await axios.get(endpoint);
      setTvs(data);
    };

    getTvs();
  });

  const handleClickDelete = async (id) => {
    const endpoint = `http://localhost:3000/tvs/${id}`;
    const { data } = await axios.delete(endpoint);

    setAlert(data.status);
  };

  const handleClickGravar = async () => {
    const endpoint = "http://localhost:3000/tvs";
    const { data } = await axios.post(endpoint, {
      name,
      price: Number(price)
    });
    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        placeholder="nome da televisao"
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="number"
        placeholder="valor da televisao"
        onChange={({ target }) => setPrice(target.value)}
      />
      <button onClick={handleClickGravar}>GRAVAR</button>

      <h2>Televisoes</h2>
      {tvs.map((tv, i) => (
        <div key={i}>
          <h2>{tv.tv}</h2>
          <p>{tv.preco}</p>
          {alert}
          <button onClick={() => handleClickDelete(tv.id)}>EXCLUIR</button>
        </div>
      ))}
    </>
  );
}

export default App;
