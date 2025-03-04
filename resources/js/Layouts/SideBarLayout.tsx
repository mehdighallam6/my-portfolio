import {SidebarInset, SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import { AppSidebar } from "@/Components/app-sidebar"
import {ModeToggle} from "@/Components/mode-toggle";
import {Separator} from "@/Components/ui/separator";

function Toaster(props: { closeButton: boolean, richColors: boolean, position: string }) {
    return null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex flex-col h-screen overflow-hidden">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div className="w-full h-full flex items-center">
                        <div className="flex-1">

                        </div>
                        <ModeToggle></ModeToggle>
                    </div>
                </header>
                <div className="flex flex-1 flex-col overflow-y-auto">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}