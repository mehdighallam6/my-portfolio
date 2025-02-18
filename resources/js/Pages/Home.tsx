import { Head } from '@inertiajs/react';
import {TextReveal} from "@/Components/magicui/text-reveal";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
                <TextReveal text="My portfolio website is launching soon"/>
            </div>
        </>
    );
}
