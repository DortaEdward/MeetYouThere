import { Globe } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-1 text-gray-50">
      <Globe className="text-teal-500" />
      <span className="text-lg">MeetYouThere</span>
    </Link>
  );
}
