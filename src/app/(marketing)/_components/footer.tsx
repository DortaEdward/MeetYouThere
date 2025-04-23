import Link from "next/link";
import Logo from "@/app/_components/logo";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12">
      <div className="container mx-auto flex flex-wrap items-start justify-between gap-6">
        <div className="flex flex-col gap-4 text-gray-50">
          <Logo />
          <p className="max-w-64 md:max-w-64">
            Making group travel planning simple and enjoyable since 2025
          </p>
          <div className="flex gap-4">
            <Twitter />
            <Instagram />
            <Facebook />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-gray-50">Product</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li className="">
              <Link href="">Features</Link>
            </li>
            <li>
              <Link href="">Pricing</Link>
            </li>
            <li>
              <Link href="">Testimonials</Link>
            </li>
            <li>
              <Link href="">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-gray-50">Company</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Career</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">Press</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-50">Legal</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link href="">Terms of Service</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
            <li>
              <Link href="">Cookie Policy</Link>
            </li>
            <li>
              <Link href="">Data Processing</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
