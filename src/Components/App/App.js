import Header from './../../Layouts/Header/';
import HomePage from './../../Components/HomePage/';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="container">
            <HomePage/>
        </main>
    </div>
  );
}

export default App;
