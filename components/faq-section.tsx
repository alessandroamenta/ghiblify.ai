"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Ghiblify.ai?",
    answer:
      "Ghiblify.ai is an AI-powered image transformation tool that turns your ordinary photos into beautiful Studio Ghibli-style artwork. It captures the magical essence and unique artistic style that makes Studio Ghibli films so special.",
  },
  {
    question: "How does Ghiblify.ai work?",
    answer:
      "Simply upload your photo, select your package, and let our AI work its magic!",
  },
  {
    question: "Is Ghiblify.ai free to use?",
    answer:
      "We offer different packages to suit your needs. While the service isn't free, we keep our pricing affordable to make the magic of Ghibli-style transformations accessible to everyone. Check out our pricing section for more details.",
  },
  {
    question: "What kind of photos work best with Ghiblify.ai?",
    answer:
      "Most photos work well with our AI, but we recommend using clear, well-lit images. Landscapes, portraits, and nature shots tend to produce particularly stunning results. The AI works best with photos that have good contrast and aren't too busy with details.",
  },
  {
    question: "Are my photos stored on Ghiblify.ai servers?",
    answer:
      "We only temporarily store your photos during the transformation process. Once we've processed your images and delivered them to you, we immediately delete the originals from our servers. Your privacy and data security are our top priority.",
  },
  {
    question: "Can I use the generated images commercially?",
    answer:
      "Yes, you have the rights to use your edited images as you see fit. However, you are solely responsible for any legal or copyright issues that may arise from the use of generated content.",
  },
  {
    question: "How do I report a bug or give feedback?",
    answer:
      "We value your feedback! If you encounter any issues or have suggestions, please reach out to us through our support email at alessandroamenta1@gmail.com. We're constantly working to improve your experience.",
  },
  {
    question: "Are there any copyright issues with using artistic styles?",
    answer:
      "Ghiblify.ai creates unique, original interpretations inspired by fantasy aesthetics. All outputs are generated through our custom-trained AI models, ensuring they are original and free of copyright concerns.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-nunito">
            FAQ
          </h2>
        </div>
        <div className="mx-auto max-w-xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-xl bg-secondary/10 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
