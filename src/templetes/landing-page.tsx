import { CallToAction } from "./sections";
import CustomerStorySection from "./sections/customer-story-section/customer-story-section";
import FeatureSection from "./sections/feature-section/feature-section";
import HeroSection from "./sections/hero-section/hero-section";
import SupportSection from "./sections/support-section/support-section";


export default function Loading_page() {
    return (
        <>
            <article className="flex flex-col gap-10 md:gap-20">
                <HeroSection/>
                <FeatureSection/>
                <SupportSection/>
                <CustomerStorySection/>
                <CallToAction />
            </article>
        </>
    )
}