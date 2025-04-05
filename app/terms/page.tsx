import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Ghiblify.ai",
  description: "Terms and conditions for using Ghiblify.ai",
};

export default function TermsPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 mx-auto">
      <h1 className="mb-8 text-4xl font-bold tracking-tight font-nunito">
        Terms and Conditions
      </h1>

      <div className="space-y-8 text-muted-foreground">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using Ghiblify.ai, you agree to be bound by these
            Terms and Conditions. If you do not agree with any part of these
            terms, you must not use our service.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            2. Usage Guidelines
          </h2>
          <p className="mb-3">
            When using Ghiblify.ai, you agree to follow these guidelines:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No inappropriate, explicit, or NSFW content may be uploaded</li>
            <li>No hate speech, offensive, or discriminatory content</li>
            <li>No copyrighted material without proper rights</li>
            <li>No content that promotes violence or illegal activities</li>
            <li>No spam or automated uploads</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            3. Content Restrictions
          </h2>
          <p>
            We reserve the right to remove any content that violates these terms
            without prior notice. Repeated violations may result in account
            termination or service access restrictions.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            4. Service Modifications
          </h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            our service at any time without prior notice. We shall not be liable
            to you or any third party for any modification, suspension, or
            discontinuation of the service.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            5. Limitation of Liability
          </h2>
          <p>
            Ghiblify.ai is provided "as is" without any warranties. We shall not
            be liable for any damages arising from the use or inability to use
            our service.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these terms at any time. Continued
            use of the service after any modifications indicates your acceptance
            of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            7. Contact
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:alessandroamenta1@gmail.com"
              className="text-primary hover:underline"
            >
              alessandroamenta1@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
