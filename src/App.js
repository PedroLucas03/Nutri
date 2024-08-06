import React, { useEffect, useState} from 'react';
import './App.css';
import './index.css';

function App(){
  const [nutri, setNutri] = useState([]);

useEffect(()=>{
  let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
  
  fetch(url)
  .then((r)=> r.json())
  .then((json)=> setNutri(json))
}, []);

return(
  <div>
    <header>
      <strong class='titulo'>React Nutri</strong>
    </header>

    {nutri.map((item)=>{
  return(
    <article key={item.id}>
      <strong class='titulo-artigo'>{item.titulo}</strong>
      <div class='imagens'>
      <img  src={item.capa} alt={item.titulo} />
      </div>
      <div class='texto'>
      <p>{item.subtitulo}</p>
      </div>
      <div class='botao'>
      <button  >Acessar</button>
      </div>
    </article>
  )

    })}

  </div>
);
}

export default App;
