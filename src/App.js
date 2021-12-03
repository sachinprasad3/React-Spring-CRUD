import './App.css';
import Add from './pages/Add';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import View from './pages/View';
import Navbar from './components/Navbar';
import Update from './pages/Update';
import Home from './pages/Home';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact component={Add}/> */}
          {/* <Route path="/view" component={View}/> */}

          <Route path="/" element={<Home />}/>
          <Route path="/view" element={<View />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/update/:id" element={<Update />}/>

        </Routes>
      </Router>

      <ToastContainer />

    </div>
  );
}

export default App;
