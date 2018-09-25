import React from 'react';

const cursos = [

    {nome: "React"},
    {nome: "Redux"},
    {nome: "NodeJs"},
    {nome: "React Native"},

]

export default class Curso extends React.Component{

    constructor(){
        super();
    }

    render(){
       return (        
        <h1 className="title">Você esta olhando o curso de {cursos[this.props.params.id].nome}</h1>
       );
    }

}