import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MODES = [
  "Part-time (Contributor)",
  "Core (Full-time)",
  "Intern / Apprentice",
  "Volunteer / Research Contributor",
] as const;

const FoundingSystemsCollaborator = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("");
  const [message, setMessage] = useState("");

  const isValid = name.trim() !== "" && email.trim() !== "" && mode !== "";

  const buildMailtoLink = () => {
    const subject = `27 Circle — Founding Systems Collaborator — ${mode} — ${name.trim()}`;
    const body = `Name: ${name.trim()}
Email: ${email.trim()}
Mode: ${mode}

Message:
${message.trim()}`;

    return `mailto:info@27circle.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="bg-card">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-20">
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
                <h2 className="mb-4">How We Operate</h2>
                <p className="text-muted-foreground mb-4">
                  All external communication flows through owner-defined channels. We respond only to initiated contact, through the medium specified by the initiator.
                </p>
                <p className="text-muted-foreground">
                  We work with organizations operating under external pressure—regulatory, legal, reputational. Not designed for consensus-driven teams or exploratory environments.
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
                  Our current focus is a concept called a Decision Closure System (DCS). The idea is simple: when an external question is asked, it should resolve clearly. Either it's SAFE, FORBIDDEN, needs ESCALATION, or there is NO DECISION. No guessing. No "probably." And sometimes, the correct response is silence.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Team Size & Stage</h2>
                <p className="text-muted-foreground">
                  This is a very small company. Long-term, it will stay under 10 people. Right now, it's just me. You would be employee #2.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Founder Background</h2>
                <p className="text-muted-foreground">
                  Operations and systems work across Apple, Google, and Tesla. Yale MBA. Georgia Tech engineering.
                </p>
              </section>

              <section>
                <h2 className="mb-4">The Role</h2>
                <p className="text-muted-foreground">
                  This is not a narrowly defined role. I'm looking for a strong generalist—someone thoughtful, reliable, and capable—who wants to help shape what this becomes. You'll act as a sounding board for ideas, help turn unclear thoughts into concrete actions, and execute alongside me. Some days that may be technical, some operational, and some purely about thinking clearly together. If you're comfortable with ambiguity and like shaping things from the inside, this role will probably feel natural.
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
                <h2 className="mb-4">Ways to Get Involved</h2>
                <p className="text-muted-foreground mb-6">
                  We start small. Commitment can increase over time if it's mutually beneficial.
                </p>
                
                <div className="space-y-6">
                  <div className="border border-border rounded-sm p-5">
                    <h3 className="text-base font-medium text-foreground mb-2">Part-time (Contributor)</h3>
                    <p className="text-sm text-muted-foreground">
                      10–25 hrs/week, profit-share or project-based, defined scope
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-sm p-5">
                    <h3 className="text-base font-medium text-foreground mb-2">Core (Full-time)</h3>
                    <p className="text-sm text-muted-foreground">
                      30–40 hrs/week, profit-share, high ownership, employee #2 track
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
                <p className="text-muted-foreground mb-6">
                  If this sounds like something you'd want to be part of, fill in a few details below.
                </p>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-muted-foreground tracking-wide mb-2">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-border rounded-sm bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-muted-foreground tracking-wide mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-border rounded-sm bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mode" className="block font-mono text-xs text-muted-foreground tracking-wide mb-2">
                      Mode of involvement <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="mode"
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="w-full border border-border rounded-sm bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a mode</option>
                      {MODES.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-muted-foreground tracking-wide mb-2">
                      Short message <span className="text-muted-foreground/50">(optional, 600 chars max)</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value.slice(0, 600))}
                      rows={4}
                      className="w-full border border-border rounded-sm bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-none"
                      placeholder="A few words about yourself or what draws you here..."
                    />
                    <p className="mt-1 font-mono text-xs text-muted-foreground/50 text-right">
                      {message.length}/600
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    {!isValid && (
                      <p className="font-mono text-xs text-muted-foreground mb-3">
                        Please fill in the required fields above.
                      </p>
                    )}
                    <a
                      href={isValid ? buildMailtoLink() : undefined}
                      onClick={(e) => !isValid && e.preventDefault()}
                      className={`inline-block border rounded-sm px-6 py-2.5 font-mono text-sm tracking-wide transition-colors ${
                        isValid
                          ? "border-foreground text-foreground hover:bg-foreground hover:text-background cursor-pointer"
                          : "border-border text-muted-foreground/50 cursor-not-allowed"
                      }`}
                    >
                      Open email draft →
                    </a>
                    <p className="mt-3 font-mono text-xs text-muted-foreground/60">
                      This opens your email client. Nothing is uploaded or stored.
                    </p>
                  </div>
                </div>
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
