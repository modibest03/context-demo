import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
