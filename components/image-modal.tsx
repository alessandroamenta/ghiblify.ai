import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export function ImageModal({ isOpen, onClose, imageSrc }: ImageModalProps) {
  if (!imageSrc) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent">
        <DialogTitle className="sr-only">Image Preview</DialogTitle>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        <img
          src={imageSrc}
          alt="Enlarged view"
          className="w-full h-full object-contain rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
