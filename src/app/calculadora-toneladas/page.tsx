'use client';

import Calculadora from "@/components/calculadora-toneladas-components/Calculadora";
import Home from "@/components/calculadora-toneladas-components/Home";
import Home2 from "@/components/calculadora-toneladas-components/Home2";

export default function CalculadoraToneladasPage() {
    return (
        <div>
            <Home />
            <Home2 />
            <Calculadora />
        </div>
    );
}