import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Container from "./components/Container/Container";

const App = () => {
    return (
        <main>
            <NavBar />
            <Container>
                <Home />
            </Container>
        </main>
    );
};

export default App;
