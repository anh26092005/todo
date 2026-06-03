import { Toaster, toast } from 'sonner';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';

function App() {
    return <>
        <Toaster />



        <button onClick={() => toast('Hello, world!')}> toast </button>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />




                <Route path="*" element={<NotFoundPage />} />






            </Routes>








        </BrowserRouter>




    </>;

}

export default App;
