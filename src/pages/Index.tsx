import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logicSchematic from "@/assets/logic-schematic.png";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card relative overflow-hidden">
          {/* Background schematic with gradient fade */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: `url(${logicSchematic})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '35% center',
                backgroundSize: 'auto 100%',
              }}
            />
            {/* Gradient overlay for smooth fade into content */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, hsl(var(--card)) 0%, hsl(var(--card)) 15%, transparent 45%)',
              }}
            />
          </div>
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-16 lg:py-20 relative z-10">
            <p className="section-label mb-4">
              27 Circle
            </p>
            <h1 className="mb-5 max-w-xl text-foreground">
              Deterministic decision systems for high-stakes operations.
            </h1>
            <p className="max-w-lg text-muted-foreground">
              DCS removes human interpretation under pressure. Pre-approved responses enforce truth during crisis—no deliberation, no deviation.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* What We Build Section */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-14">
            <h2 className="section-label mb-4">
              What We Build
            </h2>
            <p className="max-w-lg text-foreground text-base md:text-lg font-medium mb-3">
              Decision Closure Systems (DCS)
            </p>
            <p className="max-w-lg text-muted-foreground">
              Owner-driven engines that control what organizations are permitted to say under pressure. Every external question resolves to approval, rejection, escalation, or silence.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* How We Communicate Section */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-14">
            <h2 className="section-label mb-4">
              Communication Protocol
            </h2>
            <p className="max-w-lg text-muted-foreground">
              All external communication flows through owner-defined channels. We respond only to initiated contact, through the medium specified by the initiator.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Filtering Statement */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-14">
            <h2 className="section-label mb-4">
              Scope
            </h2>
            <p className="max-w-lg text-muted-foreground">
              Built for organizations operating under external pressure—regulatory, legal, reputational. Not designed for consensus-driven teams or exploratory environments.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Initialize Protocol Section */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-14">
            <h2 className="section-label mb-4">
              Access
            </h2>
            <p className="text-muted-foreground mb-4">
              Entry by request only.
            </p>
            <a 
              href="mailto:info@27circle.org?subject=Access%20Request" 
              className="inline-block font-mono text-sm text-foreground border border-border px-5 py-2.5 hover:bg-secondary transition-colors"
            >
              Initialize Protocol →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
