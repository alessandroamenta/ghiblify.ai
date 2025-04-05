import { Sparkles, ArrowRight } from "lucide-react";
import { UploadBox } from "./upload-box";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center px-4">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-lg bg-secondary px-3 py-1 text-sm font-bold border shadow-sm">
            <Sparkles className="mr-1 h-4 w-4" />
            <span className="font-bold">
              Transform your photos into Studio Ghibli masterpieces
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-sans">
            Turn Ordinary Photos Into
            <br />
            <span className="text-primary font-bold">Ghibli Magic</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl font-bold font-serif">
            Experience the enchanting world of Studio Ghibli through your own
            photos. Our AI transforms your images into beautiful Ghibli-inspired
            artwork.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl">
          {/* Left side: Image comparison */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="overflow-hidden rounded-lg border-2 bg-card p-2 shadow-sm">
                  <img
                    alt="Original photo"
                    className="w-[280px] h-[280px] object-cover rounded-md"
                    src="/original.jpeg"
                  />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Original Photo
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground mx-2 animate-bounce-x" />
              <div className="flex flex-col items-center space-y-2">
                <div className="overflow-hidden rounded-lg border-2 bg-card p-2 shadow-sm">
                  <img
                    alt="Ghiblified photo"
                    className="w-[280px] h-[280px] object-cover rounded-md"
                    src="/ghibli.jpeg"
                  />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Ghiblified Magic
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Upload Box */}
          <div className="flex items-center justify-center">
            <UploadBox />
          </div>
        </div>
      </div>
    </section>
  );
}
