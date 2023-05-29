import Destination from './Componenets/Destination'
import Experience from './Componenets/Experience'
import Footer from './Componenets/Footer'
import Header from './Componenets/Header'
import NavBar from './Componenets/NavBar'
import Offers from './Componenets/Offers'
import Slider from './Componenets/Slider'


function App() {

  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      <section>
        <NavBar/>
      </section>
      <section>
        <Slider/>
      </section>
      <section>
        <Destination/>
      </section>
      <section>
        <Experience/>
      </section>
      <section>
        <Offers/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default App
