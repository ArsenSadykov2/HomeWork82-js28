import {Container, CssBaseline, Typography } from '@mui/material';
import {ToastContainer} from "react-toastify";
import './App.css'
import AppToolbar from './components/AppToolbar/AppToolbar';
import {Route, Routes } from 'react-router-dom';
import Artists from './features/artists/Artists';
import Albums from './features/albums/Albums';
import Tracks from './features/tracks/Tracks';

const App = () => (
    <>
        <CssBaseline/>
        <ToastContainer/>
        <header>
            <AppToolbar>

            </AppToolbar>
        </header>
        <main>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Artists/>}/>
                    <Route path="/albums" element={<Albums/>}/>
                    <Route path="/albums/:id" element={<Albums/>}/>
                    <Route path="/tracks/:id" element={<Tracks/>}/>
                    <Route path="*" element={<Typography variant="h4">Not Found Page</Typography>}/>
                </Routes>
            </Container>
        </main>
    </>
);

export default App
