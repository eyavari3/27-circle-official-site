import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-24">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              27 Circle
            </p>
            <h1 className="mb-6 max-w-2xl text-foreground">
              Deterministic decision systems for high-stakes operations.
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              We build decision closure systems that eliminate ambiguity by forcing every external question into an explicit state of approval, rejection, escalation, or silence.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* What We Build Section */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-14 md:px-8 md:py-18">
            <h2 className="mb-4 text-foreground">
              What We Build
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Decision Closure Systems (DCS): owner-driven engines that control what organizations are allowed to say under pressure.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* How We Communicate Section */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-14 md:px-8 md:py-18">
            <h2 className="mb-4 text-foreground">
              How We Communicate
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              All external communication flows through owner-defined channels. We respond only to initiated contact, through the medium specified by the initiator.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Contact Section */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-14 md:px-8 md:py-18">
            <h2 className="mb-4 text-foreground">
              Contact
            </h2>
            <p className="text-muted-foreground">
              <a 
                href="mailto:info@27circle.org" 
                className="text-foreground underline underline-offset-4 hover:no-underline"
              >
                info@27circle.org
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
