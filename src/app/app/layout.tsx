export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <header className="border-b">
                <div className="mx-auto max-w-6xl px-6 py-4.flex items-center justify-between">
                    <div className="font-semibold">Content Decay AI</div>
                    <nav className="text-sm text-muted-foreground">App</nav>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>   
        </div>
    );
}