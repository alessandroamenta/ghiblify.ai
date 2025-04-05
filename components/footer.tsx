import { Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Ghiblify.ai</h3>
            <p className="text-sm text-muted-foreground">
              Transform your photos into beautiful Studio Ghibli inspired
              artwork.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Button
                variant="link"
                className="h-auto w-fit p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="mailto:alessandroamenta1@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button
                variant="link"
                className="h-auto w-fit p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href="https://x.com/ale_amenta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-4 w-4" />X
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
