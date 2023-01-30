import Menu from "./Menu"
import imgintro from '../assets/images/bg-pattern-intro.svg'

const Header = () => {
  return (
    <header className="bg">
        <Menu />

        <div className="info">
            <h2>A modern <br /> publishing plattform</h2>
            <p>Grow your audience and build your online brand</p>

            <div className="botones">
                <button>Start for Free</button>
                <button>Learn More</button>
            </div>
        </div>
    </header>
  )
}

export default Header