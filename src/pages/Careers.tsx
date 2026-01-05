import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="bg-card">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-20">
            <p className="section-label mb-4">Careers</p>
            <h1 className="mb-6 max-w-xl text-foreground">Work with us</h1>
            
            <p className="max-w-lg text-muted-foreground mb-12">
              27 Circle hires rarely and intentionally. We're not building a large team—we're looking for one person who values clarity, ownership, and low-noise work.
            </p>

            <section>
              <p className="section-label mb-6">Open Roles</p>
              
              <Link 
                to="/careers/founding-systems-engineer"
                className="group block border border-border rounded-sm p-6 hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-1">
                      Founding Systems Engineer
                    </h2>
                    <p className="font-mono text-xs text-muted-foreground tracking-wide">
                      Full-time · Remote
                    </p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    →
                  </span>
                </div>
              </Link>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
