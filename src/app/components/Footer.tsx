"use client";

import SocialNavigation from "@/app/components/SocialNavigation";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Bridger Labs. All rights reserved.</p>
        <SocialNavigation />
        <nav className="mt-2">
          <a href="/legal/terms" className="text-sm hover:underline">Terms of Service</a> | 
          <a href="/legal/privacy" className="text-sm hover:underline"> Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}