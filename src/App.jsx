import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './assets/components/Sidebar'
import BarraDePesquisa from './assets/components/BarraDePesquisa'
import Filtro from './assets/components/Filtro'
import Ordenacao from './assets/components/Ordenacao'
import Card from './assets/components/Card'

function App() {
  const [dados, setDados] = useState([])
  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(response => response.json())
    .then(dados => setDados(dados))
  },[])

  const [filtros, setFiltros] = useState([])

  function clearFiltro(){
    setFiltros([])
  }
  function addNewFiltro(newValue){
    const valueFormatado = newValue.toLowerCase().replace(/\s+/g, '');
    if(!filtros.includes(valueFormatado))
      setFiltros(filtro=>{
        return [...filtro, valueFormatado]
      })
  }

   const [termoPesquisa, setTermoPesquisa] = useState('');

  const dadosFiltradosBase = filtros.length === 0
  ? dados.filter((value) =>
      value.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      value.resumo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      value.usuario.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
    )
  : dados.filter((value) =>
      value.tags.some(tag => filtros.includes(tag.toLowerCase()))
    );

    const dadosFiltrados = dadosFiltradosBase.length === 0 ? dados : dadosFiltradosBase
  
  
  return (
    <div className='container'>
        <SideBar />
      <div>
        <BarraDePesquisa addFiltro={addNewFiltro} termoPesquisa={termoPesquisa} setTermoPesquisa={setTermoPesquisa}/>
        <Filtro filtros={filtros} limpaFiltros={clearFiltro} />
        <Ordenacao />
        <ul className='lista-cards'>
          <Card dados={dadosFiltrados}/>
        </ul>
      </div>
    </div>
  )
}

export default App
