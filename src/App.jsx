
import './App.css'
import SearchData from './components/Datafetch-debounce/SearchData'
import Form from './components/Form-validation/Form'
import MainModal from './components/Focusable-Modal/MainModal'
import Clock from './components/Digital-clock/Clock'
import Stopwatch from './components/Stop-watch/Stopwatch'
function App() {

  return (
    <>
      <SearchData/>
      <Form/>
      <MainModal/>
      <Clock/>
      <Stopwatch/>
    </>
   
  )
}

export default App
