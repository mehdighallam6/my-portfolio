import { Head } from '@inertiajs/react';
import {TextReveal} from "@/Components/magicui/text-reveal";
import {ModeToggle} from "@/Components/mode-toggle";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="flex flex-col items-center bg-white dark:bg-black">
                <div className="my-5">
                    <ModeToggle/>
                </div>
                <div
                    className="z-10 flex min-h-64 items-center justify-center">
                    <TextReveal text="My portfolio website is launching soon"/>
                </div>
            </div>
        </>
    );
}
