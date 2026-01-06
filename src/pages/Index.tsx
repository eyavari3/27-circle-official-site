import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logicSchematic from "@/assets/logic-schematic.png";
const DCS_STATES = ["SAFE", "FORBIDDEN", "ESCALATE", "NO DECISION"] as const;
const Index = () => {
  return <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-10 md:px-8 md:py-12 lg:py-14">
            <p className="section-label mb-4">
              27 Circle
            </p>
            <h1 className="mb-5 max-w-xl text-foreground">Eliminating ambiguity in critical decisions</h1>
            <p className="max-w-lg text-muted-foreground mb-6 md:mb-8">Designed by former Google, Apple, and Tesla Global Supply Manager</p>
            
            <img src={logicSchematic} alt="Logic schematic diagram showing deterministic decision flow" className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto opacity-80" />
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Problem Statement */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-14">
            <p className="max-w-lg text-muted-foreground">Organizations struggle under pressure when decisions are unclear.
Decision Closure System (DCS) forces closure.
          </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* DCS Four-State Model */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
              {DCS_STATES.map(state => <div key={state} className="border border-border bg-background px-4 py-5 text-center font-mono text-xs md:text-sm tracking-wider text-foreground uppercase">
                  {state}
                </div>)}
            </div>
            <p className="max-w-lg text-muted-foreground">Every external question resolves to one of four states or is routed to a single accountable owner.</p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Communication Protocol */}
        <section className="bg-background">
          
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Scope */}
        <section className="bg-card">
          
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* CTA Section */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-12 md:px-8 md:py-14">
            
            <Link to="/join-us" className="inline-block font-mono text-sm text-foreground border border-border px-5 py-2.5 hover:bg-secondary transition-colors">
              Join the Founding Team →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;