"use client";

import type React from "react";

import { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Step = "email" | "payment" | "upload";

export function UploadSection() {
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [step, setStep] = useState<Step>("email");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep("payment");
    }
  };

  const handlePaymentSubmit = () => {
    setStep("upload");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="upload"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-bold font-sans">
            Get Your Ghibli Magic
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl font-bold font-serif">
            We'll deliver your transformed images to your email within 30
            minutes
          </p>
        </div>

        <div className="mx-auto max-w-md mt-8">
          <Card className="border-2 shadow-sm">
            <CardContent>
              <Tabs value={step} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="email" disabled={step !== "email"}>
                    Email
                  </TabsTrigger>
                  <TabsTrigger value="payment" disabled={step !== "payment"}>
                    Payment
                  </TabsTrigger>
                  <TabsTrigger value="upload" disabled={step !== "upload"}>
                    Upload
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="mt-6 space-y-4">
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-bold">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-2 shadow-sm"
                      />
                    </div>
                    <Button type="submit" className="w-full font-bold">
                      Continue to Payment{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="payment" className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card" className="font-bold">
                      Card Information
                    </Label>
                    <Input
                      id="card"
                      placeholder="Card number"
                      className="border-2 shadow-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="font-bold">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="border-2 shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc" className="font-bold">
                        CVC
                      </Label>
                      <Input
                        id="cvc"
                        placeholder="CVC"
                        className="border-2 shadow-sm"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handlePaymentSubmit}
                    className="w-full font-bold"
                  >
                    Pay & Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>
                <TabsContent value="upload" className="mt-6 space-y-4">
                  <div
                    className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center space-y-2 cursor-pointer hover:bg-muted/50 transition-colors"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                  >
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground text-center font-bold font-serif">
                      Drag & drop your images here, or click to select files
                    </p>
                    <p className="text-xs text-muted-foreground font-bold font-serif">
                      Supports PNG, JPG, WEBP (max 10MB)
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                  {files.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-bold">Selected Files:</p>
                      <ul className="space-y-1">
                        {files.map((file, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground font-bold font-serif"
                          >
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Button className="w-full font-bold">
                    Submit Images <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
