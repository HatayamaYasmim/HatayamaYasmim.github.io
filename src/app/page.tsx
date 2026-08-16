import { About } from "@/components/About/About";
import { CareerTimeline } from "@/components/CareerTimeline/CareerTimeline";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";



export default function Home() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <About />
                <CareerTimeline />
                <Projects />
                <Skills />
            </main>
        </>
    );
}