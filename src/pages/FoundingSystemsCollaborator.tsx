import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ENGAGEMENT_TRACKS = [
  "Founding Systems Engineer — 40 hrs/week",
  "Systems Engineer (Part-Time) — 20 hrs/week",
  "Systems Contributor — 10 hrs/week",
];

const FoundingSystemsCollaborator = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValid = name.trim() !== "" && email.trim() !== "";

  const buildMailtoLink = () => {
    const subject = `27 Circle — Founding Systems Engineer — ${name.trim()}`;
    const body = `Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim() || "(No message provided)"}`;

    return `mailto:join@27circle.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="bg-card">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-20">
            <p className="section-label mb-4">Role</p>
            <h1 className="mb-2 text-foreground">Founding Systems Engineer</h1>
            <p className="font-mono text-xs text-muted-foreground tracking-wide mb-12">
              Palo Alto · Onsite or Remote (Pacific Time)
            </p>

            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className="mb-4">Company</h2>
                <p className="text-muted-foreground">
                  27 Circle builds systems that eliminate ambiguity in critical decisions.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Why We Exist</h2>
                <p className="text-muted-foreground">
                  Organizations fail under pressure when decisions are unclear.
                  <br />
                  We build systems that replace ambiguity with clarity and calm.
                </p>
              </section>

              <section>
                <h2 className="mb-4">What We're Working On</h2>
                <p className="text-muted-foreground">
                  We're building a Decision Closure System (DCS).
                  <br />
                  Every external question must resolve to one of four states:
                  <br />
                  <span className="text-foreground font-medium">SAFE</span>, <span className="text-foreground font-medium">FORBIDDEN</span>, <span className="text-foreground font-medium">ESCALATE</span>, or <span className="text-foreground font-medium">NO DECISION</span>.
                  <br />
                  No guessing. No "probably." Sometimes, silence is the correct output.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Team & Stage</h2>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Intentionally small company (will stay under ~10 people)</li>
                  <li>• Currently solo founder</li>
                  <li>• Early, high-ownership role (employee #2 track)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">The Role</h2>
                <p className="text-muted-foreground">
                  You'll help design, pressure-test, and implement systems.
                  <br />
                  Some work is technical, some operational, and some is first-principles thinking.
                  <br />
                  If you enjoy turning unclear problems into clear systems, this will feel natural.
                </p>
              </section>

              <section>
                <h2 className="mb-4">Engagement Tracks</h2>
                <p className="text-muted-foreground mb-6">
                  Commitment can increase over time if it's mutually right.
                </p>
                
                <div className="space-y-3">
                  {ENGAGEMENT_TRACKS.map((track) => (
                    <div key={track} className="border border-border rounded-sm px-5 py-4">
                      <p className="text-sm text-foreground font-medium">{track}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="pt-4">
                <h2 className="mb-4">Reach Out</h2>
                <p className="text-muted-foreground mb-6">
                  If this sounds like something you'd want to be part of, reach out. No cover letter needed—just a short message is fine.
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
                    <label htmlFor="message" className="block font-mono text-xs text-muted-foreground tracking-wide mb-2">
                      Short message <span className="text-muted-foreground/50">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full border border-border rounded-sm bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-none"
                      placeholder="Anything you'd like to share..."
                    />
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
