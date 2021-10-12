import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
