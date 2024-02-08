import SearchForm from './components/SearchForm';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container d-flex flex-column">
        <div className="container border border-dark rounded bg-light mt-5 p-3 d-flex flex-column">
            <SearchForm />
            <hr />
            <MainContainer />
        </div>
        <div>
          <Footer imageSource={"sunny.png"} />
        </div>
    </div>

  );
}

export default App;
