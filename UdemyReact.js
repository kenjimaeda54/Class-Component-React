
import React, {Component} from 'react';

function index(){
   return(
       <div>
       <h1>Ola conheça nossa equipe</h1>
       <Equipe nome="Matheus" proficao="desinger" idade="26"/>
       <Equipe nome="Leticia" proficao="engenheira" idade="20"/>
       </div>
   );

}

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre usuario={this.props.nome} funcao={this.props.proficao} 
                        anos={this.props.idade}/>
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2> Ola eu sou(a): {this.props.usuario} </h2>
                <h3> Minha função é: {this.props.funcao} </h3>
                <h3> Eu tenho {this.props.anos} anos </h3>
            </div>   
        );
    }
}

export default index;