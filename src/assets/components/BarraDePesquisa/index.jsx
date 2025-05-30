import { useState } from 'react'
import './style.css'
import Filtro from '../Filtro';

export default function BarraDePesquisa({addFiltro, termoPesquisa, setTermoPesquisa,}){
   
    //console.log(termoPesquisa);

    function handleKeyDown(event){
        if (event.key === 'Enter') {
            const filtro = event.target.value
            if(filtro.replace(/\s+/g, '').length > 3 && filtro.replace(/\s+/g, '').length < 20){
                addFiltro(filtro)
                event.target.value = ''
                setTermoPesquisa('')
            }else{
                alert("valor invalido digitado")
            }
        }
    }
    return(
        <input 
            type='search' 
            placeholder="Digite o que você procura" 
            className='barra-pesquisa'
            onChange={(event) =>{setTermoPesquisa(event.target.value)}}
            onKeyDown={handleKeyDown}
        />
    )
}