import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FoundingSystemsCollaborator = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="bg-card">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-20">
            <Link 
              to="/careers" 
              className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide mb-8"
            >
              ← Back to Careers
            </Link>
            
            <p className="section-label mb-4">Role</p>
            <h1 className="mb-2 text-foreground">Founding Systems Collaborator</h1>
            <p className="font-mono text-xs text-muted-foreground tracking-wide mb-12">
              Palo Alto · Onsite or remote (Pacific Time)
            </p>

            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className="mb-4">Company</h2>
                <p className="text-muted-foreground">
                  27 Circle builds deterministic decision systems for high-stakes operations.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Why We Exist</h2>
                <p className="text-muted-foreground">
                  In real organizations, ambiguity leads to bad promises, endless meetings, and unnecessary pressure. We're interested in building systems that replace that ambiguity with clarity and calm.
                </p>
              </section>

              <section>
                <h2 className="mb-4">What We're Working On</h2>
                <p className="text-muted-foreground">
                  Our current focus is a concept called a Decision Closure System (DCS). The idea is simple: when an external question is asked, it should resolve clearly. Either it's SAFE, FORBIDDEN, needs ESCALATION, or there is NO DECISION yet. No guessing. No "probably." And sometimes, the correct response is silence.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Team Size & Stage</h2>
                <p className="text-muted-foreground">
                  This is a very small company. Long-term, it will stay under 10 people. Right now, it's just me. You would be employee #2.
                </p>
              </section>

              <section>
                <h2 className="mb-4">The Role</h2>
                <p className="text-muted-foreground">
                  This is not a narrowly defined role. I'm looking for a strong generalist—someone thoughtful, reliable, and capable—who wants to help shape what this becomes. You'll act as a sounding board for ideas, help turn unclear thoughts into concrete actions, and execute alongside me. Some days that may be technical, some operational, and some purely about thinking clearly together.
                </p>
              </section>

              <section>
                <h2 className="mb-4">What I Care About</h2>
                <p className="text-muted-foreground">
                  I care more about who you are and how you think than what tools you already know. If you're a good person with good judgment, I'm comfortable teaching, learning together, and figuring things out as we go.
                </p>
              </section>

              <section>
                <h2 className="mb-4">How We Work</h2>
                <p className="text-muted-foreground">
                  We work directly and simply. There are very few meetings. We value honesty, calm communication, and being able to say "I don't know yet" without pressure. The goal is to reduce unnecessary work, not create more of it.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Compensation</h2>
                <p className="text-muted-foreground">
                  There is no salary or equity at the start. Compensation is structured as profit-sharing based on the revenue we generate together. This role only makes sense if you're comfortable with uncertainty and motivated by building something real rather than optimizing for short-term guarantees.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Founder Background</h2>
                <p className="text-muted-foreground">
                  Operations and systems work across Apple, Google, and Tesla. Yale MBA. Georgia Tech engineering.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Ways to Get Involved</h2>
                <p className="text-muted-foreground mb-6">
                  We start small. Commitment can increase over time if it's mutually beneficial.
                </p>
                
                <div className="space-y-6">
                  <div className="border border-border rounded-sm p-5">
                    <h3 className="text-base font-medium text-foreground mb-2">Core (Full-time)</h3>
                    <p className="text-sm text-muted-foreground">
                      30–40 hrs/week, profit-share, high ownership, employee #2 track
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-sm p-5">
                    <h3 className="text-base font-medium text-foreground mb-2">Part-time (Contributor)</h3>
                    <p className="text-sm text-muted-foreground">
                      10–25 hrs/week, profit-share or project-based, defined scope
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-sm p-5">
                    <h3 className="text-base font-medium text-foreground mb-2">Intern / Apprentice</h3>
                    <p className="text-sm text-muted-foreground">
                      Learning-first, time-boxed, clear mentorship + expectations
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-sm p-5">
                    <h3 className="text-base font-medium text-foreground mb-2">Volunteer / Research Contributor</h3>
                    <p className="text-sm text-muted-foreground">
                      Lightweight, exploratory, no obligation, clear boundaries
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-4">
                <h2 className="mb-4">Reach Out</h2>
                <p className="text-muted-foreground mb-4">
                  If this sounds like something you'd want to be part of, send a short note introducing yourself. Share who you are and which mode fits you right now.
                </p>
                <a 
                  href="mailto:info@27circle.org" 
                  className="font-mono text-sm text-foreground hover:text-muted-foreground transition-colors"
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

export default FoundingSystemsCollaborator;
