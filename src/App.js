import React, { useState } from "react";
import './App.scss';

export default class App extends React.Component{
  constructor(props){
    super(props);

    
    this.state = {
      filmes: [
        {
          id: 1,
          nome: "Passeio de bike (Grupo)",
          imagemUrl:
            "https://www.bikemagazine.com.br/wp-content/uploads/2014/01/1cerapio3.jpg",
        },
        {
          id: 2,
          nome: "Passeio de bike (Personal)",
          imagemUrl:
            "https://hostelexplorer.com.br/wp-content/uploads/2018/04/bike-praia_do_rosa-albergue_explorer.jpg",
        },
        {
          id: 3,
          nome: "Aluguel de bike",
          imagemUrl:
            "https://m.media-amazon.com/images/I/61FVKaM+uEL._AC_SX425_.jpg",
        },
        {
          id: 4,
          nome: "Passeio de Buggy",
          imagemUrl: "https://www.idasevindasblog.com/wp-content/uploads/2017/01/DSC_0429.jpg" ,
        },
      ],
    };
  }

  render(){
    const { filmes } = this.state;
    return (
      <div>
        <h1>Meus filmes</h1>
        <ul className='container'>
          {filmes.map((f) => (
            <li key={f.id}>
            <h3>{f.nome}</h3>
            <img src={f.imagemUrl} alt={f.nome}/>
            </li>
          ))}
        </ul>
      </div>
    );

  }

}

