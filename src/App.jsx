
import './App.css'
import SearchData from './components/Datafetch-debounce/SearchData'
import Form from './components/Form-validation/Form'
import MainModal from './components/Focusable-Modal/MainModal'
import Clock from './components/Digital-clock/Clock'
import Stopwatch from './components/Stop-watch/Stopwatch'
import Star from './components/Star-rating/Star'
function App() {

  return (
    <>
      <SearchData/>
      <Form/>
      <MainModal/>
      <Clock/>
      <Stopwatch/>
      <Star maxStars={5} />
    </>
   
  )
}

export default App
