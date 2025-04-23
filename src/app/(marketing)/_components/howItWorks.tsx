export default function HowItWorks() {
  return (
    <section className="w-full bg-teal-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How TripTogether Works
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed">
              Planning a group trip has never been easier. Follow these simple
              steps to get started.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
            1
          </div>
          <h3 className="text-xl font-bold">Create a Group</h3>
          <p className="text-muted-foreground">
            Start by creating a new trip group and inviting your travel
            companions.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
            2
          </div>
          <h3 className="text-xl font-bold">Choose Destinations</h3>
          <p className="text-muted-foreground">
            Collaboratively decide on destinations and vote on preferences.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
            3
          </div>
          <h3 className="text-xl font-bold">Plan Itinerary</h3>
          <p className="text-muted-foreground">
            Build your day-by-day itinerary with activities and accommodations.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
            4
          </div>
          <h3 className="text-xl font-bold">Track Expenses</h3>
          <p className="text-muted-foreground">
            Add expenses as you go and let the app handle fair splitting.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
            5
          </div>
          <h3 className="text-xl font-bold">Travel Together</h3>
          <p className="text-muted-foreground">
            Enjoy your trip with real-time updates and communication.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
            6
          </div>
          <h3 className="text-xl font-bold">Share Memories</h3>
          <p className="text-muted-foreground">
            Create shared photo albums and trip highlights after your adventure.
          </p>
        </div>
      </div>
    </section>
  );
}
