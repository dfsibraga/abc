import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

/*
function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}
*/

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        isCompleted: true,
      },
      {
        id: 2,
        title: "Dinner with daughter",
        isCompleted: true,
      },
      {
        id: 3,
        title: "Meeting with partner",
        isCompleted: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
        <div>
          <div
            className="servicosOnline"
            style={{ backgroundColor: "#f4f4f4", marginRight: "0" }}
          >
            <img
              src="http://lifeclub.pt/servicosonline/lifeclub_planosdetreino_servicosonline.jpg"
              width="30%"
              height="30%"
            />
            <img
              src="http://lifeclub.pt/servicosonline/lifeclub_nutricao_servicosonline.jpg"
              width="30%"
              height="30%"
            />
            <img
              src="http://lifeclub.pt/servicosonline/lifeclub_servicos_pt_servicosonline.jpg"
              width="30%"
              height="30%"
            />
          </div>
          <div
            style={{
              backgroundColor: "#fc6907",
              marginTop: "2px",
              padding: "2px",
            }}
          >
            <a className="servicosOnlineLink" href="">
              Clique aqui para informações sobre Serviços Online
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
