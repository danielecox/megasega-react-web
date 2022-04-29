import React, { useState }  from 'react'
import Logo from '../../img/mega-question.png';
import './Mega.css';

export default (props) => {
    const [jogos, setJogos] = useState(6);
    //const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0));
    const [numeros, setNumeros] = useState(Array(jogos).fill(0));

    function gerarNumerosNaoContidos(array){
        const min = 1;
        const max = 60;
        const novoNumero = parseInt(Math.random() * (max - min)) + min;

        return array.includes(novoNumero) ? gerarNumerosNaoContidos(array) : novoNumero;
    }

    function gerarNumeros(){
        //const novoArray = Array(props.qtdNumero)
        const novoArray = Array(jogos)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContidos(a)], [])
            .sort((a, b) => a - b)

        setNumeros(novoArray);
    }

    return(
        <>
            <label htmlFor="meuInput">Quantidade de Jogos:</label>
            <input id="meuInput"
                   type="number" 
                   value={jogos} 
                   onChange={e => setJogos(+e.target.value)} 
                   min={6} max={15}
            />
            <br/>
            <button onClick={gerarNumeros} >Gerar números</button>
            <br/>

            <h3>Resultado gerado: </h3>            
            <img src={Logo} alt=""width={100} height={50} />  
            <h4>{numeros.join(' - ')}</h4> 
            
        </>
    )
};