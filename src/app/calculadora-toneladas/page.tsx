'use client';

import Calculadora from "@/components/calculadora-toneladas-components/Calculadora";
import Home from "@/components/calculadora-toneladas-components/Home";
import Home2 from "@/components/calculadora-toneladas-components/Home2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CalculadoraToneladasPage() {
    return (
        <div>
            <Header />
            <Home />
            <Home2 />
            <Calculadora />
            <Footer />
        </div>
    );
}