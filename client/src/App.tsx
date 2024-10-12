import Header from './layouts/Header';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainPage /> } />
            <Route path="*" element={ <Navigate to={'/'} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
