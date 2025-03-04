import {Head, router} from '@inertiajs/react';
import {TextReveal} from "@/Components/magicui/text-reveal";
import {ModeToggle} from "@/Components/mode-toggle";
import {ShinyButton} from "@/Components/magicui/shiny-button";
import {Button} from "@/Components/ui/button";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";

export default function Home() {

    const scrollToBottom = () => {
        const footer = document.querySelector(".footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };


    const goToLogin = () => {
        router.get(route('login'));
    };

    return (
        <>
            <Head title="Home" />
            <div className="bg-white dark:bg-black">
                <div className="flex flex-col items-center mx-auto max-w-7xl">
                    <div className="w-full flex flex-row-reverse justify-between my-5" onClick={goToLogin}>
                        <Button variant="ghost">
                            Sign in
                            <ChevronRightIcon size={16} aria-hidden="true" />
                        </Button>
                        <ModeToggle/>
                    </div>
                    <div className="my-5">
                        <ShinyButton onClick={scrollToBottom}>Scroll</ShinyButton>
                    </div>
                    <div
                        className="z-10 flex min-h-64 items-center justify-center">
                        <TextReveal text="My portfolio website is launching soon"/>
                    </div>
                </div>
                <div className="bg-white dark:bg-black footer"></div>
            </div>
        </>
    );
}