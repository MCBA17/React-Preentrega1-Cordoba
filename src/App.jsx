import './App.css'
import Navbar from "./components/navbar"
import ItemListContainer from './components/itemlistcontainer'

function App() {

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <ItemListContainer />
    </main>
    </>
  )
}

export default App
