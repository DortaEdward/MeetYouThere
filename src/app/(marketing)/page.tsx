import HeroSection from "./_components/heroSection";
import KeyFeatures from "./_components/keyFeatures";
import Footer from "./_components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default async function Home() {
  return (
    <main className="flex-1 items-center">
      <HeroSection />
      <KeyFeatures />
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
              Build your day-by-day itinerary with activities and
              accommodations.
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
              Create shared photo albums and trip highlights after your
              adventure.
            </p>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="w-full bg-white py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Users Say
              </h2>
              <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed">
                Thousands of groups have planned successful trips with
                TripTogether.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-muted-foreground text-xs">
                        Family Trip to Italy
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Planning our family reunion in Italy was so easy with
                    TripTogether. The expense splitting feature saved us from
                    awkward money conversations!"
                  </p>
                  <div className="flex text-teal-500">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Michael Chen</p>
                      <p className="text-muted-foreground text-xs">
                        College Friends Reunion
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "We use TripTogether for our annual college reunion trips.
                    The date coordination tool is a lifesaver when dealing with
                    8 busy schedules!"
                  </p>
                  <div className="flex text-teal-500">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full"></div>

                    <div>
                      <p className="text-sm font-medium">Jessica Rodriguez</p>
                      <p className="text-muted-foreground text-xs">
                        Bachelorette Weekend
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {`
                    "Planned the perfect bachelorette weekend without any drama
                    thanks to TripTogether. Everyone could see the costs upfront
                    and contribute equally."`}
                  </p>
                  <div className="flex text-teal-500">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="w-full bg-teal-50 py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed">
                Choose the plan that works best for your group size and travel
                needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <h3 className="text-xl font-bold">Free</h3>
                  <div className="text-4xl font-bold">$0</div>
                  <p className="text-muted-foreground">
                    Perfect for small groups and occasional travelers
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Up to 5 people per group</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Basic itinerary planning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Simple expense splitting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Group chat</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-teal-500 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold">Premium</h3>
                  <div className="text-4xl font-bold">$9.99</div>
                  <p className="text-muted-foreground">
                    Per month, billed annually
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Up to 15 people per group</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Advanced itinerary planning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Detailed expense tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Polls and voting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Travel recommendations</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600">
                    Start Free Trial
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <h3 className="text-xl font-bold">Business</h3>
                  <div className="text-4xl font-bold">$24.99</div>
                  <p className="text-muted-foreground">
                    Per month, billed annually
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Unlimited group size</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Corporate travel management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Expense reporting & export</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                      <span>Custom branding</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600">
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-teal-600 py-12 text-white md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to plan your next adventure?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Join thousands of happy travelers who have simplified their
                group trip planning.
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
                className="border-white text-white hover:bg-teal-700"
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
      <Footer />
    </main>
  );
}
