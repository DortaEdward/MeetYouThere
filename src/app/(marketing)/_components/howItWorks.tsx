export default function HowItWorks() {
  const steps = [
    {
      title: "Create a Group",
      description:
        " Planning a group trip has never been easier. Follow these simple steps to get started.",
    },
    {
      title: "Choose Destinations",
      description:
        "Collaboratively decide on destinations and vote on preferences.",
    },
    {
      title: "Plan Itinerary",
      description:
        "Build your day-by-day itinerary with activities and accommodations.",
    },
    {
      title: "Track Expenses",
      description:
        "Add expenses as you go and let the app handle fair splitting.",
    },
    {
      title: "Travel Together",
      description: "Enjoy your trip with real-time updates and communication.",
    },
    {
      title: "Share Memories",
      description:
        "Create shared photo albums and trip highlights after your adventure.",
    },
  ];
  return (
    <section className="flex w-full flex-col items-center justify-center bg-neutral-800 px-6 py-6 md:py-18 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-5xl">
              How MeetYouThere Works
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed">
              Planning a group trip has never been easier. Follow these simple
              steps to get started.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, idx) => {
          return (
            <div
              key={idx + 1}
              className="flex flex-col items-center space-y-2 text-center text-gray-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
                <p>{idx + 1}</p>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
