import React from 'react';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { TabletProgress } from './components/TabletProgress';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useReveal } from './hooks/useReveal';

function App() {
    const sectionIds = ['hero', 'about', 'work', 'skills', 'contact'];
    const { activeSection, sectionProgress, totalProgress } = useScrollSpy(sectionIds);
    useReveal();

    return (
        <div className="page">
            <Header />
            <TabletProgress progress={totalProgress} />

            <main>
                <Hero />
                <About />
                <Work />
                <Skills />
                <Contact />
            </main>

            <SideNav activeSection={activeSection} sectionProgress={sectionProgress} />
            <Footer />
        </div>
    );
}

export default App;
