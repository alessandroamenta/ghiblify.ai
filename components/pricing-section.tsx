"use client";

import { Button } from "@/components/ui/button";
import { CheckoutDialog } from "./checkout-dialog";

const packages = [
  {
    id: 1,
    name: "Single Image",
    images: 1,
    price: 4.99,
    pricePerImage: 4.99,
    description: "Transform one photo into Ghibli style art",
  },
  {
    id: 3,
    name: "Most Popular(3 images)",
    images: 3,
    price: 11.99,
    pricePerImage: 4.0,
    description: "Perfect for a small collection",
    popular: true,
  },
  {
    id: 5,
    name: "Best Value(5 images)",
    images: 5,
    price: 14.99,
    pricePerImage: 3.0,
    description: "Ideal for multiple photos",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-nunito">
            Our Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col p-6 bg-card rounded-lg shadow-sm border-2 ${
                pkg.popular ? "border-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold">${pkg.price}</span>
                  <span className="text-muted-foreground">
                    (${pkg.pricePerImage.toFixed(2)} per image)
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-4 mt-6 mb-6">
                <li className="flex items-center">
                  <span className="text-sm">
                    ✨ Transform {pkg.images} photo{pkg.images > 1 ? "s" : ""}{" "}
                    into Ghibli style
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-sm">🎨 High-quality artwork</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sm">⚡ Fast processing</span>
                </li>
              </ul>
              <div className="mt-auto">
                <CheckoutDialog
                  imageCount={pkg.images}
                  price={pkg.price}
                  pricePerImage={pkg.pricePerImage}
                  trigger={
                    <Button
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {pkg.popular ? "Get Pack" : "Get Pack"}
                    </Button>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
