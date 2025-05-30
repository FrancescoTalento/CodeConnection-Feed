import './style.css'
import CodeImg from './assets/code.jpg'
import Code from './assets/code.svg'
import Share from './assets/share.svg'
import Chat from './assets/chat.svg'
import icone from './assets/icone.svg'


export default function Card({dados}){
    //{id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos,comentarios,usuario}
    return(<>
        {dados ? dados.map((dado, index) => {
           return(
            <article className='card' key={index}>
                <div className='card__imagem'>
                    <img src={dado.imagem_capa} />
                </div>
                <div className='card__conteudo'>
                    <div className='conteudo__texto'>
                        <h3>{dado.titulo}</h3>
                        <p>{dado.resumo}</p>
                    </div>
                </div>
                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <img src={Code} alt='códigos' />
                            {dado.linhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt='compartilhamentos' />
                            {dado.compartilhamentos}
                        </li>
                        <li>
                            <img src={Chat} alt='comentários' />
                            {dado.comentarios}
                        </li>
                    </ul>
                    <div className='rodape__usuario'>
                        <img src={dado.usuario.imagem} alt='imagem do usuário' />
                        {dado.usuario.nome}
                    </div>
                </div>
            </article>
            )
        }) 
        : null}
    </>
    )
}