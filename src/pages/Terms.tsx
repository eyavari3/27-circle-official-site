import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-6 py-12 md:py-16">
          <h1 className="mb-8 text-3xl font-medium text-foreground">
            Terms of Service
          </h1>
          
          <div className="prose prose-slate max-w-2xl space-y-8 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Description of Services
              </h2>
              <p>
                27 Circle provides tools and services designed to help people coordinate conversations and manage small communities. Our services facilitate communication through channels chosen by users.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                User Responsibilities
              </h2>
              <p>
                By using our services, you agree to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide accurate information when communicating with us.</li>
                <li>Use our services in compliance with all applicable laws and regulations.</li>
                <li>Respect the privacy and rights of others.</li>
                <li>Not interfere with the proper functioning of our services.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Prohibited Conduct
              </h2>
              <p>
                The following activities are prohibited when using our services:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Sending unsolicited bulk messages or spam.</li>
                <li>Harassing, threatening, or abusing others.</li>
                <li>Transmitting harmful, illegal, or offensive content.</li>
                <li>Attempting to gain unauthorized access to our systems.</li>
                <li>Using our services for any unlawful purpose.</li>
                <li>Impersonating any person or entity.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Limitation of Liability
              </h2>
              <p>
                27 Circle provides its services on an "as is" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Service Suspension
              </h2>
              <p>
                We reserve the right to suspend or terminate access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service, is harmful to other users, or is otherwise inappropriate.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Changes to Terms
              </h2>
              <p>
                We may update these Terms of Service from time to time. Continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Contact Us
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us at{" "}
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

export default Terms;
