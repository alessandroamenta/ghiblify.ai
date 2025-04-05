"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function IosWaitlist() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: supabaseError } = await supabase
        .from("waitlist")
        .insert([{ email, first_name: firstName }]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setEmail("");
      setFirstName("");
    } catch (err: any) {
      setError(
        err.message === "duplicate key value violates unique constraint"
          ? "This email is already on the waitlist!"
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-8 left-8 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary/90 to-primary font-semibold"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Join Waitlist for iOS App
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join the iOS Waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when our iOS app launches!
            </DialogDescription>
          </DialogHeader>
          {success ? (
            <div className="py-6 text-center space-y-4">
              <Sparkles className="h-12 w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-lg">You're on the list!</h3>
              <p className="text-muted-foreground">
                We'll notify you as soon as the iOS app is ready.
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  setIsOpen(false);
                  // Reset after dialog closes
                  setTimeout(() => setSuccess(false), 300);
                }}
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing up..." : "Join Waitlist"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
