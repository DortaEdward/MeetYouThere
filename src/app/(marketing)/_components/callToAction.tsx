import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="w-full bg-teal-900 py-12 text-white md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to plan your next adventure?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
              Join thousands of happy travelers who have simplified their group
              trip planning.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-teal-50"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-teal-100">
            No credit card required. Free for groups up to 5 people.
          </p>
        </div>
      </div>
    </section>
  );
}