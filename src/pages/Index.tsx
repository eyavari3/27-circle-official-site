import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-20 md:px-8 md:py-28">
            <h1 className="mb-6 max-w-2xl text-foreground">
              27 Circle
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              27 Circle builds simple tools that help people coordinate conversations and small communities more intentionally.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* How We Communicate Section */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-20">
            <h2 className="mb-5 text-foreground">
              How We Communicate
            </h2>
            <p className="max-w-xl text-muted-foreground">
              27 Circle communicates with people through channels they choose, including email and messaging platforms, only when they initiate contact.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Contact Section */}
        <section className="bg-card">
          <div className="container mx-auto px-6 py-16 md:px-8 md:py-20">
            <h2 className="mb-5 text-foreground">
              Contact
            </h2>
            <p className="text-muted-foreground">
              Email:{" "}
              <a 
                href="mailto:info@27circle.org" 
                className="font-medium text-foreground underline underline-offset-4"
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
