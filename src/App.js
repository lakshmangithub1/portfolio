import Navbar from './components/Navbar'; 
import MainHead from './components/MainHead'; 
import Education from './components/Education';
import './App.css';
const  App = () =>{
  return (
    <div className='app'>
      <Navbar /> 
      <MainHead/> 
      <Education />
    </div>
  );
}

export default App;
