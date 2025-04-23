import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Testimonials() {
  const arr = [0, 1, 2, 3, 4];
  return (
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
                  {`"Planning our family reunion in Italy was so easy with
                  TripTogether. The expense splitting feature saved us from
                  awkward money conversations!"`}
                </p>
                <div className="flex text-teal-500">
                  {arr.map((_, i) => (
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
                  {` "We use TripTogether for our annual college reunion trips. The
                  date coordination tool is a lifesaver when dealing with 8 busy
                  schedules!"`}
                </p>
                <div className="flex text-teal-500">
                  {arr.map((_, i) => (
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
                  {arr.map((_, i) => (
                    <CheckCircle key={i} className="h-4 w-4" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
