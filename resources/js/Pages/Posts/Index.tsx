import SideBarLayout from '@/Layouts/SideBarLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <SideBarLayout>
            <Head title="Posts" />
            <div>
                Posts
            </div>
        </SideBarLayout>
    );
}
