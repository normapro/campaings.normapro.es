'use client';

import Header from "@/components/Header";
import Home from "@/components/test-y-reunion-components/Home";
import TestInfo from "@/components/test-y-reunion-components/TestInfo";
import ReunionPersonalizada from "@/components/test-y-reunion-components/ReunionPersonalizada";
import Footer from "@/components/Footer";

export default function TestYReunionPage() {
    return (
        <div>
            <Header />
            <Home />
            <TestInfo />
            <ReunionPersonalizada />
            <Footer />
        </div>
    );
}