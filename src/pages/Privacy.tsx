import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-6 py-12 md:py-16">
          <h1 className="mb-8 text-3xl font-medium text-foreground">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-2xl space-y-8 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Information We Collect
              </h2>
              <p>
                27 Circle collects basic contact information and message content when you communicate with us. This includes your name, email address, phone number (if provided), and the content of messages you send to us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                When We Communicate
              </h2>
              <p>
                We only communicate with you after you initiate contact with us. Communication may occur via email or messaging platforms such as WhatsApp, depending on the channel you use to reach us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                How We Use Your Information
              </h2>
              <p>
                Your information is used solely to respond to your inquiries and provide our services. We do not use your data for marketing purposes unless you explicitly request information about our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Data Sharing
              </h2>
              <p>
                We do not sell, rent, or resell your personal data to third parties. Your information is shared only when necessary to provide our services or when required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Data Retention
              </h2>
              <p>
                We retain your information only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal data at any time. To make such a request, please contact us at info@27circle.org.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a 
                  href="mailto:info@27circle.org" 
                  className="text-foreground underline underline-offset-2"
                >
                  info@27circle.org
                </a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
