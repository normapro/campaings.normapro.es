'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/components/zonas-radon-components/Home';
import Home2 from '@/components/zonas-radon-components/Home2';
import Localizador from '@/components/zonas-radon-components/Localizador';

export default function zonasRadonPage() {
    return (
        <div>
            <Header />
            <Home />
            <Localizador />
            <Home2 />
            <Footer />
        </div>
    );  
} 