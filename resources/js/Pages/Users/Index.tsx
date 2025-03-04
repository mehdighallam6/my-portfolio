import SideBarLayout from '@/Layouts/SideBarLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <SideBarLayout>
            <Head title="Users" />
            <div>
                Users index
            </div>
        </SideBarLayout>
    );
}
