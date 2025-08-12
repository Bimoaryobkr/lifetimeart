import AboutUs from "@/components/sections/aboutUs/aboutUs";
import FAQ from "@/components/sections/FAQ/FAQ";
import Footer from "@/components/sections/footer/footer";
import Hero from "@/components/sections/hero/hero";
import OurWork from "@/components/sections/ourWork/ourWork";
import Services from "@/components/sections/services/services";
import Testimonials from "@/components/sections/testimonials/testimonials";

export default function Home() {
    return (
        <div className="min-h-screen gap-16">
            <main className="flex flex-col gap-32 items-center">
                <Hero />
                <AboutUs />
                <Services />
                <OurWork />
                <Testimonials />
                <FAQ />
            </main>
            <footer className="items-center">
                <Footer />
            </footer>
        </div>
    );
}
