"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Clock, CreditCard } from "lucide-react";
import { STRIPE_PACKAGES } from "@/lib/stripe";

interface CheckoutDialogProps {
  trigger?: React.ReactNode;
  defaultEmail?: string;
  imageCount: number;
  price: number;
  pricePerImage: number;
}

export function CheckoutDialog({
  trigger,
  defaultEmail = "",
  imageCount,
  price,
  pricePerImage,
}: CheckoutDialogProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update email state when defaultEmail prop changes
  useEffect(() => {
    setEmail(defaultEmail);
  }, [defaultEmail]);

  // Update email when dialog opens
  useEffect(() => {
    if (open) {
      const savedEmail = localStorage.getItem("userEmail");
      if (savedEmail) {
        setEmail(savedEmail);
      }
    }
  }, [open]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem("userEmail", newEmail);
  };

  const getPriceId = (imageCount: number) => {
    switch (imageCount) {
      case 1:
        return STRIPE_PACKAGES.SINGLE.priceId;
      case 3:
        return STRIPE_PACKAGES.TRIPLE.priceId;
      case 5:
        return STRIPE_PACKAGES.BUNDLE.priceId;
      default:
        return STRIPE_PACKAGES.SINGLE.priceId;
    }
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const priceId = getPriceId(imageCount);

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          email,
          imageCount,
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        console.error("Error:", error);
        return;
      }

      // Store email in localStorage for the success page
      localStorage.setItem("userEmail", email);

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="w-full" size="lg">
            Get Ghiblified
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            Get Ghiblified!
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground mt-2">
              You'll be redirected to checkout, and then you'll be able to
              upload your {imageCount > 1 ? "images" : "image"}.
            </p>
            <p className="text-sm text-primary mt-2 font-medium">
              We're experiencing high volume right now!
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm">
                Price: <span className="font-medium">${price.toFixed(2)}</span>{" "}
                {imageCount > 1 && `(${pricePerImage.toFixed(2)} per image)`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm">Estimated time: 10-15 minutes</p>
            </div>
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1"
              onClick={handleCheckout}
              disabled={!email || loading}
            >
              {loading ? "Processing..." : "Get Ghiblified"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
