import ClockHeading  from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurentTime from './components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return(
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurentTime />
          </center>
  )
}

export default App
