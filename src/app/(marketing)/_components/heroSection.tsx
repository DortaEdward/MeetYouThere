import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center gap-6 py-12 md:py-24 lg:py-32 xl:py-40 justify-center">
            <div className="container flex items-center justify-center px-6">
                <div className="grid gap-6 lg:grid-col[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
                    <div className="flex flex-col justify-center items-center xl:items-start xl:text-start text-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tigher sm:text-4xl xl:text-5xl/none text-gray-50">Plan trips with your favorite people without the groups chat chaos.</h1>
                            <p className="max-w-[600px] text-neutral-400 md:text-xl">From picking dates to booking spots, MeetYouThere keeps your crew organized and excited</p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size={"lg"} className="bg-teal-500 hover:bg-red-600">Get Started</Button>
                            <Button size={"lg"} variant={"outline"}>See How it works</Button>
                        </div>
                        <p className="text-xs text-muted-foreground">No credit card required to start. Free for groups up to 5 people.</p>
                    </div>
                    <div className="hidden justify-center xl:flex">
                        <div className="rounded-lg shadow-xl h-[500px] w-[500px] bg-gradient-to-t from-neutral-800 to-neutral-700"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}