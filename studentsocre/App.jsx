import React, { useEffect, useState } from "react";
import Table from "./src/components/Table";
import { Button, Container, Input } from "reactstrap";
import {
  GetAlunosAprovados,
  GetAlunosPorMatricula,
  GetAlunosReprovados,
  GetTodosAlunos,
} from "./src/hooks/useAlunos";
import './App.css';

const columns = [
  {
    dataKey: "matricula",
    title: "Matricula",
  },
  {
    dataKey: "nome",
    title: "Nome",
  },
  {
    formatter: (item) => item.materias.$values[0].nota,
    dataKey: "$value[0].nota",
    title: "Matematica",
  },
  {
    formatter: (item) => item.materias.$values[1].nota,
    dataKey: "$value[1].nota",
    title: "Portugues",
  },
  {
    formatter: (item) => item.materias.$values[2].nota,
    dataKey: "materias.$value[2].nota",
    title: "Biologia",
  },
  {
    formatter: (item) => item.materias.$values[3].nota,
    dataKey: "materias.$value[3].nota",
    title: "Quimica",
  },
];

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [isAprovado, setIsAprovado] = useState("all");
  const [matricula, setMatricula] = useState("");

  useEffect(() => {
    (async () => {
      const todosAlunos = await GetTodosAlunos();
      setAlunos(todosAlunos);
    })();
  }, []);

  const handleAprovodos = async (event) => {
    const value = event.target.value;
    let response;
    setIsAprovado(value);
    if (value === "true") {
      response = await GetAlunosAprovados();
    } else if (value === "false") {
      response = await GetAlunosReprovados();
    } else {
      response = await GetTodosAlunos();
    }
    setAlunos(response);
  };

  const handleMatricula = async () => {
    const response = await GetAlunosPorMatricula(matricula);
    setAlunos([response]);
  };

  return (
    <div className="app-container">
      <Container fluid>
        <h1>Student Score</h1>
        <div className="input-group">
          <Input
            className="search-input"
            placeholder="Enter Matricula"
            value={matricula}
            onChange={(event) => setMatricula(event.target.value)}
          />
          <Button className="search-button" onClick={handleMatricula}>Pesquisar</Button>
        </div>
        <Input type="select" className="select-input" value={isAprovado} onChange={handleAprovodos}>
          <option value="all">Todos</option>
          <option value="true">Aprovados</option>
          <option value="false">Reprovados</option>
        </Input>
        <Table data={alunos} columns={columns} />
      </Container>
    </div>
  );
}
