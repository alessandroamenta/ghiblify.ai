import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ghiblify.ai",
  description: "Privacy policy and data handling practices for Ghiblify.ai",
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 mx-auto">
      <h1 className="mb-8 text-4xl font-bold tracking-tight font-nunito">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-muted-foreground">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p className="mb-3">
            When you use Ghiblify.ai, we collect and process the following
            information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Images you upload for processing</li>
            <li>Technical information about your device and browser</li>
            <li>Usage data to improve our service</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <p className="mb-3">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To process your image transformations</li>
            <li>To detect and prevent abuse of our service</li>
            <li>To improve and optimize our service</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            3. Data Storage
          </h2>
          <p>
            Uploaded images are temporarily stored for processing and are
            automatically deleted after processing is complete. We do not
            permanently store your uploaded images unless explicitly stated
            otherwise.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            4. Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            5. Third-Party Services
          </h2>
          <p>
            We may use third-party services to help us operate our service.
            These services may have access to your information solely to perform
            tasks on our behalf and are obligated not to disclose or use it for
            any other purpose.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            6. Changes to Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
