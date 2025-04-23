import { Bell, Calendar, CreditCard, Map, MessageSquare, RefreshCcw, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function KeyFeatures() {

    const features = [
        {
            name: "Group Creation",
            icon: User,
            text: "Create groups, invite friends, and manage who's joining your adventure.",
        },
        {
            name: "Itinerary Planning",
            icon: Map,
            text: "Collaboratively build and edit your perfect trip itinerary in real-time.",
        },
        {
            name: "Expense Splitting",
            icon: CreditCard,
            text: "Track expenses and split costs fairly amoung all participants with ease.",
        },
        {
            name: "Date Coordination",
            icon: Calendar,
            text: "Find the perfect dates that work for everyone in your group.",
        },
        {
            name: "Group Chat",
            icon: MessageSquare,
            text: "Communicate with your travel companions in dedicated trip chat rooms.",
        },
        {
            name: "Live Updates",
            icon: Bell,
            text: "Get live updates instantly when there are changes.",
        },
    ]
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">Everything you need for group travel</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Our platform simplifies every aspect of planning trips with friends, family, or colleagues.</p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    {
                        features.map(details => {
                            const Icon = details.icon
                            return (
                                <Card key={details.name} className="border-2 border-teal-100 bg-gradient-to-br from-neutral-800 to-neutral-700 text-gray-50 h-64">
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center space-y-2 text-center">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                                                <Icon className="h-6 w-6 text-teal-700" />
                                            </div>
                                            <h3 className="text-xl font-bold">{details.name}</h3>
                                            <p className="text-muted-foreground">{details.text}</p>
                                        </div>
                                    </CardContent>
                                </Card>

                            )
                        })

                    }
                </div>
            </div>
        </section>

    )
}
