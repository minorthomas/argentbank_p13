import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Connection } from '../pages/connection/Connection';
import { Profile } from '../pages/profile/Profile';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Connection />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
}
