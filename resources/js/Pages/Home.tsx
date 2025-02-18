import { Head } from '@inertiajs/react';
import {TextReveal} from "@/Components/magicui/text-reveal";
import {ModeToggle} from "@/Components/mode-toggle";
import {ShinyButton} from "@/Components/magicui/shiny-button";

export default function Home() {

    const scrollToBottom = () => {
        window.scrollBy({ top: 2000, behavior: "smooth" });
    };

    return (
        <>
            <Head title="Home" />
            <div className="flex flex-col items-center bg-white dark:bg-black">
                <div className="my-5 flex flex-col items-center gap-3">
                    <ModeToggle/>
                    <ShinyButton onClick={scrollToBottom}>Scroll</ShinyButton>
                </div>
                <div
                    className="z-10 flex min-h-64 items-center justify-center">
                    <TextReveal text="My portfolio website is launching soon"/>
                </div>
            </div>
        </>
    );
}
