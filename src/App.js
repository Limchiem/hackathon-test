import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from "./component/NavigationBar"
import KantoPage from './pages/KantoPage';

function App() {
  return (
    <div className="App" id='mainApp'>
      <h1>Can you name em all</h1>
      <NavigationBar/>
      <Routes>
        <Route path="/Kanto" element={<KantoPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
