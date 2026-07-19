import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main id="main-content" className="data-grid grid min-h-screen place-items-center px-4 py-20">
            <div className="paper-card-strong max-w-xl p-8 text-center sm:p-12">
                <p className="font-code text-xs font-bold uppercase tracking-[0.18em] text-primary">Error / 404</p>
                <h1 className="mt-5 text-5xl font-bold leading-none tracking-[-0.06em]">Evidence not found.</h1>
                <p className="mt-5 text-sm leading-relaxed text-foreground/62">The requested page does not belong to the current case-study set.</p>
                <Link href="/" className="button-secondary mt-8"><ArrowLeft className="h-4 w-4" /> Return home</Link>
            </div>
        </main>
    );
}
