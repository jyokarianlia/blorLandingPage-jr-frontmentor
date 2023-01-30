import imgLogo from '../assets/images/logo.svg'
import imgMenu from '../assets/images/icon-hamburger.svg'
import imgMenuCerrar from '../assets/images/icon-close.svg'
import imgFlechaAbajo from '../assets/images/icon-arrow-dark.svg'
import imgFlechaArriba from '../assets/images/icon-arrow-light.svg'
import { useState } from 'react'

const Menu = () => {
    const [menuActivo , setMenuActivo] = useState ( false )
    const [subMenu , setSubMenu] = useState ( '' )
  return (
    <div>
        <div className="sideBar">
            <img src={ imgLogo } alt="Logo" />

            { menuActivo ? 
                <img src={ imgMenuCerrar } alt="Icono cerrar"  onClick={ () => setMenuActivo( false ) } />  
            : 
                <img src={ imgMenu } alt="Icono hamburger"  onClick={ () =>setMenuActivo( true ) } />  
            }
        </div>

        <div className={ menuActivo ? ' menu verMenu' : 'menu' }>
            <ul>
                <li onClick={ () => setSubMenu('product') }>Product <img src={ imgFlechaAbajo } alt="flecha abajo" className={ subMenu == 'product' && 'img' } />
                    { subMenu == 'product' &&
                        <ul className='ul'>
                            <li>Overview</li>
                            <li>Pricing</li>
                            <li>Marketplace</li>
                            <li>Features</li>
                            <li>Integrations</li>
                        </ul>
                    }
                </li>

                <li onClick={ () => setSubMenu('company') }>Company <img src={ imgFlechaAbajo } alt="flecha abajo" className={ subMenu == 'company' && 'img' } />
                    { subMenu == 'company' &&
                        <ul className='ul'>
                            <li>About</li>
                            <li>Team</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    }
                </li>

                <li onClick={ () => setSubMenu('connect') }>Connect <img src={ imgFlechaAbajo } alt="flecha abajo" className={ subMenu == 'connect' && 'img' } />
                    { subMenu == 'connect' &&
                        <ul className='ul'>
                            <li>Contact</li>
                            <li>Newsletter</li>
                            <li>LinkedIn</li>
                        </ul>
                    }
                </li>
            </ul>

            <div className="divider"></div>

            <div className="botons">
                <button>Login</button>
                <button className='signUp'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Menu