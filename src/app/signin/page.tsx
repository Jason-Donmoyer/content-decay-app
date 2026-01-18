export default function SignInPage() {
    return (
        <div className=".min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md rounded-2xl border p-6">
                <h1 className="text-xl font-semibold">Sign in</h1>
                <p className="text-sm text-muted-foreground mt-2">
                    Auth providers will be enabled in Phase 1 (Google OAuth).
                </p>
            </div>
        </div>
    );
}