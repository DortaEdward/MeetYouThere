import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="min-w-screen p-4 sticky top-0 z-50 border-b border-neutral-700 backdrop:blur-lg bg-neutral-800/90">
            <div className="flex items-center justify-between container mx-auto">
                <Link href={"/"} className="flex gap-1 items-center text-gray-50"><Globe className="text-red-500" /><span className="text-lg">MeetYouThere</span></Link>
                <div className="flex gap-3 text-gray-50">
                    <p>Features</p>
                    <p>How It Works</p>
                    <p>Testimonials</p>
                    <p>Pricing</p>
                </div>
                <div className="flex gap-4 text-gray-50">
                    <Button size={"sm"} className="rounded px-3 py-1 shadow-lg">Log In</Button>
                    <Button size={"sm"} className="bg-red-500 text-white rounded px-3 py-1 shadow-lg">Sign Up</Button>
                </div>
            </div>
        </header>
    )
}