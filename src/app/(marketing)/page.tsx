import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex-1">
      <section className="flex flex-col items-center gap-6 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-col[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tigher sm:text-4xl xl:text-5xl/none text-neutral-300">Plan trips with your favorite people without the groups chat chaos.</h1>
                <p className="max-w-[600px] text-neutral-400 md:text-xl">From picking dates to booking spots, MeetYouThere keeps your crew organized and excited</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size={"lg"} className="bg-red-500 hover:bg-red-600">Get Started</Button>
                <Button size={"lg"} variant={"outline"}>See How it works</Button>
              </div>
              <p className="text-xs text-muted-foreground">No credit card required to start. Free for groups up to 5 people.</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg shadow-xl h-96 w-96 bg-gradient-to-t from-neutral-800 to-neutral-700"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
