import {Head, router} from '@inertiajs/react';
import {TextReveal} from "@/Components/magicui/text-reveal";
import {ModeToggle} from "@/Components/mode-toggle";
import {ShinyButton} from "@/Components/magicui/shiny-button";
import {Button} from "@/Components/ui/button";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import {AnimatedSpan, Terminal, TypingAnimation} from "@/Components/magicui/terminal";

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
                <div className="flex flex-col items-center mx-auto max-w-7xl py-5">
                    <Terminal>
                        <AnimatedSpan delay={1500} className="text-green-500">
                            <span>✔ Preflight checks.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={2000} className="text-green-500">
                            <span>✔ Verifying framework. Found Laravel.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={2500} className="text-green-500">
                            <span>✔ Validating Tailwind CSS.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={3000} className="text-green-500">
                            <span>✔ Validating import alias.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={3500} className="text-green-500">
                            <span>✔ Writing components.json.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={4000} className="text-green-500">
                            <span>✔ Checking registry.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={4500} className="text-green-500">
                            <span>✔ Updating tailwind.config.ts</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={5000} className="text-green-500">
                            <span>✔ Updating app/globals.css</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={5500} className="text-green-500">
                            <span>✔ Installing dependencies.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={6000} className="text-blue-500">
                            <span>ℹ Updated 1 file:</span>
                            <span className="pl-2">- lib/utils.ts</span>
                        </AnimatedSpan>

                        <TypingAnimation delay={6500} className="text-muted-foreground">
                            Success! Project initialization completed.
                        </TypingAnimation>
                        
                    </Terminal>
                </div>
            </div>
        </>
    );
}