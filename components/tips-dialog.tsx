"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

export function TipsDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-primary hover:underline text-xs inline-flex items-center gap-1">
        💡 Tips for better results
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Tips for Better Photos
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-4">
            Follow these quick tips to get the best results!
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Small groups (Best 1-4 people)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">High resolution photos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Good lighting</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Natural expressions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Simple background</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
