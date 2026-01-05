import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FoundingSystemsEngineer = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="bg-card">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-20">
            <Link 
              to="/careers" 
              className="inline-block font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide mb-8"
            >
              ← Careers
            </Link>
            
            <p className="section-label mb-4">Open Role</p>
            <h1 className="mb-6 max-w-xl text-foreground">Founding Systems Engineer</h1>
            <p className="font-mono text-xs text-muted-foreground tracking-wide mb-12">
              Full-time · Remote
            </p>

            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">Company</h2>
                <p className="text-muted-foreground">
                  27 Circle builds deterministic decision systems for high-stakes operations.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">Why We Exist</h2>
                <p className="text-muted-foreground">
                  In real organizations, ambiguity leads to bad promises, endless meetings, and unnecessary pressure. We're interested in building systems that replace that ambiguity with clarity and calm.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">What We're Working On</h2>
                <p className="text-muted-foreground">
                  Our current focus is a concept called a Decision Closure System (DCS). The idea is simple: when an external question is asked, it should resolve clearly. Either it's SAFE, FORBIDDEN, needs ESCALATION, or there is NO DECISION yet. No guessing. No "probably." And sometimes, the correct response is silence.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">Team Size & Stage</h2>
                <p className="text-muted-foreground">
                  This is a very small company. Long-term, it will stay under 10 people. Right now, it's just me. You would be employee #2.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">The Role</h2>
                <p className="text-muted-foreground">
                  This is not a narrowly defined role. I'm looking for a strong generalist—someone thoughtful, reliable, and capable—who wants to help shape what this becomes. You'll act as a sounding board for ideas, help turn unclear thoughts into concrete actions, and execute alongside me. Some days that may be technical, some operational, and some purely about thinking clearly together.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">What I Care About</h2>
                <p className="text-muted-foreground">
                  I care more about who you are and how you think than what tools you already know. If you're a good person with good judgment, I'm comfortable teaching, learning together, and figuring things out as we go.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">How We Work</h2>
                <p className="text-muted-foreground">
                  We work directly and simply. There are very few meetings. We value honesty, calm communication, and being able to say "I don't know yet" without pressure. The goal is to reduce unnecessary work, not create more of it.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">Commitment</h2>
                <p className="text-muted-foreground">
                  This is a full-time role (40 hours per week).
                </p>
                <p className="text-muted-foreground mt-2">
                  While the role is designed as full-time, we're open to a reduced schedule (20–30 hours/week) for the right person if there's strong alignment.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">Compensation</h2>
                <p className="text-muted-foreground">
                  There is no salary or equity at the start. Compensation is structured as profit-sharing based on the revenue we generate together. This role only makes sense if you're comfortable with uncertainty and motivated by building something real rather than optimizing for short-term guarantees.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-medium text-foreground mb-3">Founder Background</h2>
                <p className="text-muted-foreground">
                  Operations and systems work across Apple, Google, and Tesla. Yale MBA. Georgia Tech engineering.
                </p>
              </section>

              <section className="pt-6 border-t border-border">
                <h2 className="text-sm font-medium text-foreground mb-3">Reach Out</h2>
                <p className="text-muted-foreground mb-4">
                  If this sounds like something you'd want to be part of, send a short note introducing yourself.
                </p>
                <a 
                  href="mailto:info@27circle.org"
                  className="font-mono text-xs text-foreground hover:text-muted-foreground tracking-wide transition-colors"
                >
                  info@27circle.org
                </a>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FoundingSystemsEngineer;
