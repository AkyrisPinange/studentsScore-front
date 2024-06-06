import api from "../service/clientApi";


export function GetTodosAlunos() {
  return api.get("/api/Alunos/alunos").then(function ( response) {
    // handle success
    return response.data;
  });
}

export function GetAlunosAprovados() {
  return api.get("/api/Alunos/aprovados").then(function (response) {
    // handle success
    return response.data.$values;
  });
}

export function GetAlunosReprovados() {
  return api.get("/api/Alunos/reprovados").then(function (response) {
    // handle success
    return response.data.$values;
  });
}

export function GetMelhorAlunosPorMateria(materia) {
  return api
    .get(`/api/Alunos/melhor-aluno/${materia}`)
    .then(function (response) {
      // handle success
      return response;
    });
}

export function GetAlunosPorMatricula(matricula) {
  return api.get(`/api/Alunos/${matricula}`).then(function (response) {
    // handle success
    return response.data;
  });
}

export function GetAlunosOrdenarBubble() {
  return api.get(`/api/Alunos/ordenar/bubble`).then(function (response) {
    // handle success
    return response;
  });
}

export function GetAlunosQuick() {
  return api.get(`/api/Alunos/ordenar/quick`).then(function (response) {
    // handle success
    return response;
  });
}
