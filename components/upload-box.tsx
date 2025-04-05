"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { TipsDialog } from "./tips-dialog";
import { CheckoutDialog } from "./checkout-dialog";
import { useState, useEffect } from "react";

export function UploadBox() {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // Load email from localStorage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem("userEmail", newEmail);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
    }
  };

  return (
    <Card className="max-w-md p-5">
      <div className="space-y-4">
        <div
          className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            type="file"
            id="file-input"
            className="hidden"
            accept="image/*"
            onChange={handleFileInput}
          />
          <Upload className="h-5 w-5 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm mb-1">
            {file ? file.name : "Drop your image here or click to upload"}
          </p>
          <p className="text-xs text-muted-foreground">
            Supported formats: PNG, JPG, JPEG
          </p>
        </div>

        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <CheckoutDialog
            defaultEmail={email}
            imageCount={1}
            price={4.99}
            pricePerImage={4.99}
            trigger={
              <Button className="w-full" size="lg" disabled={!file || !email}>
                Get Ghiblified
              </Button>
            }
          />
        </div>

        <div className="text-center">
          <TipsDialog />
        </div>
      </div>
    </Card>
  );
}
