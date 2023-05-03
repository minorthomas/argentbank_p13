import { Router } from './router/router';
import Layout from './layouts/Layout';

import './styles/global.scss';

export function App() {
    return (
        <>
            <Layout>
                <Router />
            </Layout>
        </>
    );
}
