import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { GameSearch } from './components/GameSearch';
import { GameInfo } from './components/GameInfo';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<GameSearch />} />
                    <Route path='/game/:id' element={<GameInfo />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
