
import './App.css'
import Header from './components/Header'
import imgLogo from './assets/images/logo.svg'
import imgEditor from './assets/images/illustration-editor-mobile.svg'
import imgLaptop from './assets/images/illustration-laptop-mobile.svg'
import imgPhone from './assets/images/illustration-phones.svg'

function App() {

  return (
    <div className="App">
      <Header />

      <div className='elemento'>
        <h3>Designed for the future</h3>
        <div className='fondoElemento2'>
          <img src={ imgEditor } alt="Imagen" />
        </div>
      </div>
      
      <div className='elemento texto'>
        <h3 className='overpass t-700'>Introducing an extensible editor</h3>
        <p className='ubuntu'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
        change the looks of a blog.</p>
      </div>
      
      <div className='elemento texto'>
        <h3 className='overpass t-700'>Robust content management</h3>
        <p className='ubuntu'>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
      </div>

      <div className='elemento central'>
        <img src= { imgPhone } alt="Imagen" />
        <h3 className='overpass t-700'>State of the Art Infrastructure</h3>
        <p className='ubuntu'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
      </div>

      <div className='fondoElemento2'>
        <img src={ imgLaptop } alt="imagen" />
      </div>

      <div className='elemento texto'>
        <h3 className='overpass t-700'>Free, open, simple</h3>
        <p className='ubuntu'>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
      </div>

      <div className='elemento texto'>
        <h3 className='overpass t-700'>Powerful tooling</h3>
        <p className='ubuntu'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites. </p>
      </div>

      <footer className='ubuntu'>
        <img src={ imgLogo } alt="Imagen" />
        <ul>
          <li>Product
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marcketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </li>
          <li>Company
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </li>
          <li>Connect
            <ul>
            <li>Contac</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
