import SideBarLayout from '@/Layouts/SideBarLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <SideBarLayout>
            <Head title="Dashboard" />
            <div>
                Dashboard
            </div>
        </SideBarLayout>
    );
}
