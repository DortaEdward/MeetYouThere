import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-teal-50 py-12 md:py-24 lg:py-32">
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
  );
}