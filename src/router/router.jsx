import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/home/Home';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
}
