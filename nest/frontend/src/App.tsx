import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [agricultores, setAgricultores] = useState([]);
  const [agricultoresOriginais, setAgricultoresOriginais] = useState([]);

  const [buscaId, setBuscaId] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState<any | null>(null);

  const buscarPorId = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/agricultor/${buscaId}`);
      setResultadoBusca(res.data);
    } catch (err) {
      console.error('Erro ao buscar agricultor por ID:', err);
      setResultadoBusca(null);
    }
  };

  useEffect(() => {
    const fetchAgricultores = async () => {
      try {
        const res = await axios.get('http://localhost:3000/agricultor');
        console.log('Dados recebidos:', res.data);
        setAgricultores(res.data);
        setAgricultoresOriginais(res.data);
      } catch (err) {
        console.error('Erro ao buscar agricultores:', err);
      }
    };

    fetchAgricultores();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard de Agricultores</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar agricultor por ID"
          value={buscaId}
          onChange={(e) => setBuscaId(e.target.value)}
        />
        <button onClick={buscarPorId}>Buscar</button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por nome"
          onChange={(e) => {
            const valor = e.target.value.toLowerCase();
            const filtrados = agricultoresOriginais.filter((a: any) =>
              a.fullName.toLowerCase().includes(valor)
            );
            setAgricultores(filtrados);
          }}
        />
        <input
          type="text"
          placeholder="Buscar por CPF"
          onChange={(e) => {
            const valor = e.target.value;
            const filtrados = agricultoresOriginais.filter((a: any) =>
              a.cpf.includes(valor)
            );
            setAgricultores(filtrados);
          }}
        />
      </div>
      {resultadoBusca && (
        <div style={{ marginBottom: '1rem' }}>
          <h2>Resultado da busca:</h2>
          <p>
            <strong>Nome:</strong> {resultadoBusca.nome} | <strong>CPF:</strong> {resultadoBusca.cpf}
          </p>
        </div>
      )}
      {agricultores.length === 0 ? (
        <p>Nenhum agricultor cadastrado.</p>
      ) : (
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {agricultores.map((agricultor: any) => (
              <tr key={agricultor._id}>
                <td>{agricultor.fullName}</td>
                <td>{agricultor.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App
