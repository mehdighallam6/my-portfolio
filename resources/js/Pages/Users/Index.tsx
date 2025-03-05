import SideBarLayout from '@/Layouts/SideBarLayout';
import { Head } from '@inertiajs/react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";

export default function Index({users}: any) {
    return (
        <SideBarLayout>
            <Head title="Users"/>
            <div className="sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mt-5 mb-16">
                    <div>
                        <h2 className="text-xl font-semibold leading-tight">Users</h2>
                        <p className="text-gray-400 text-sm mt-1">Manage users of your organization</p>
                    </div>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="hidden md:table-cell">Email</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                users.map((user: any) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell className="hidden md:table-cell">{user.email}</TableCell>
                                        <TableCell className="flex flex-row-reverse gap-1"></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </SideBarLayout>
    );
}
