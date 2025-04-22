import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="min-w-screen p-4 sticky top-0 z-50 border-b border-neutral-700">
            <div className="flex items-center justify-between container mx-auto">
                <div className="flex gap-1 items-center text-gray-50">
                    <div>Logo</div>
                    <p className="text-lg">MeetYouThere</p>
                </div>
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