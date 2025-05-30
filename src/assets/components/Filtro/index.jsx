import './style.css'


export default function Filtro({filtros, limpaFiltros}){
    return(
        <section className='container-filtro'>
            <ul>
                {filtros ? filtros.map((filtro, index) => {
                    return (
                        <li key={index}>
                            {filtro}
                        </li>
                    )
                })  : null}
            </ul>
            <button onClick={limpaFiltros}>Limpar Tudo</button>
        </section>
    )
}