import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { Menu } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 min-w-screen border-b border-neutral-700 bg-neutral-800/90 p-4 backdrop:blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden gap-3 text-gray-50 md:flex">
          <p>Features</p>
          <p>How It Works</p>
          <p>Testimonials</p>
          <p>Pricing</p>
        </div>
        <div className="hidden gap-4 text-gray-50 md:flex">
          <SignedOut>
            <SignInButton>
              <Button size={"sm"} className="rounded px-3 py-1 shadow-lg">
                Log In
              </Button>
            </SignInButton>
            <SignInButton>
              <Button
                size={"sm"}
                className="rounded bg-teal-500 px-3 py-1 text-white shadow-lg"
              >
                Sign Up
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-3">
              <p>Dashboard</p>
              <UserButton />
            </div>
          </SignedIn>
        </div>
        {/* Make This a client component */}
        <div className="md:hidden">
          <Menu className="text-gray-50" />
        </div>
      </div>
    </header>
  );
}
