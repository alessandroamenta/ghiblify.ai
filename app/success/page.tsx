import { Suspense } from "react";
import SuccessContent from "./success-content";

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="container max-w-4xl px-4 py-12">
          <div className="p-8 rounded-lg border-2">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
