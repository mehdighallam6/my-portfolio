import {Head, Link, useForm} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import {GalleryVerticalEnd} from 'lucide-react';
import {Label} from '@/Components/ui/label';
import {Input} from '@/Components/ui/input';
import {Button} from '@/Components/ui/button';
import InputError from '@/Components/InputError';
import {ModeToggle} from '@/Components/mode-toggle';
import {FlipWords} from '@/Components/ui/flip-words';

export default function Login({ status }: { status?: string; canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const words = ['secure', 'fast', 'seamless', 'intuitive'];

    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <Head title="Login" />
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-between">
                    <Link href={route('home')} className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        My Portfolio
                    </Link>
                    <ModeToggle />
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <form className="flex flex-col gap-6" onSubmit={submit}>
                            <div className="flex flex-col items-center gap-2 text-center">
                                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                                <h1 className="text-2xl font-bold">Login to your account</h1>
                                <p className="text-balance text-sm text-muted-foreground">
                                    Enter your email below to login to your account
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <div className="h-full w-full flex justify-center items-center px-4">
                    <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                        Build <FlipWords words={words} /> <br />
                        experiences with ease
                    </div>
                </div>
            </div>
        </div>
    );
}
