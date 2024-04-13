import './App.css';
import Header from './Header/Header';
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <p>Внесли изменения сайта. Добвили блок main</p>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
