import Logo from './assets/Logo.svg'
import Feed from './assets/feed.svg'
import Perfil from './assets/account_circle.svg'
import Info from './assets/info.svg'
import Sair from './assets/logout.svg'

import './style.css'

export default function SideBar(){
    return(
        <aside>
            <img src={Logo}/>
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a src='#' className='item__link-publicacao'>Publicar</a>
                    </li>
                    <li>
                        <a src='#' className='item__link--ativo'>
                            <img src={Feed}></img>
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a src='#' className='item__link'>
                            <img src={Perfil} />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a src='#' className='item__link'>
                            <img src={Info} />
                            <span>About us</span>
                        </a>
                    </li>
                    <li>
                        <a src='#' className='item__link'>
                            <img src={Sair} />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )

}