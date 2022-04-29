import React, { useState } from 'react'

export default (props) =>{
    const [jogos, setJogos] = useState(6);
    
    return(
        <>
            <label htmlFor="meuInput">Quantidade de Jogos:</label>
            <input id="meuInput"
                   type="number" 
                   value={jogos} 
                   onChange={e => setJogos(+e.target.value)} 
                   min={6} max={15}
            />
        </>
    );
};