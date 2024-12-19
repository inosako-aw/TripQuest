import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer.jsx';
import App from './components/FlipPage.jsx';

function MainApp() {
    const [currentPage, setCurrentPage] = useState(0);

    return ( 
        <StrictMode>
            <App currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Footer setPage={setCurrentPage} />
        </StrictMode>
    );
}

createRoot(document.getElementById('root')).render(<MainApp />);
