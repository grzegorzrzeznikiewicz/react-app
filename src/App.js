import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Container from "./components/Container/Container";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import NoMatch from "./components/NoMatch/NoMatch";
import {Route, Routes} from 'react-router-dom';
import List from "./components/List/List";

const App = () => {
    return (
        <main>
            <NavBar/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="/list/:listId" element={<List/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </Container>
        </main>
    );
};

export default App;
