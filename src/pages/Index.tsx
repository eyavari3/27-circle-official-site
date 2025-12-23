import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <h1 className="mb-6 text-3xl font-medium text-foreground md:text-4xl">
            27 Circle
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            27 Circle builds simple tools that help people coordinate conversations and small communities more intentionally.
          </p>
        </section>

        {/* How We Communicate Section */}
        <section className="border-t border-border bg-secondary/30">
          <div className="container mx-auto px-6 py-12">
            <h2 className="mb-4 text-xl font-medium text-foreground">
              How We Communicate
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              27 Circle communicates with people through channels they choose, including email and messaging platforms, only when they initiate contact.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="mb-4 text-xl font-medium text-foreground">
            Contact
          </h2>
          <p className="text-muted-foreground">
            Email:{" "}
            <a 
              href="mailto:info@27circle.org" 
              className="text-foreground underline underline-offset-2"
            >
              info@27circle.org
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
