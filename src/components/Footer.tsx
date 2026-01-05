import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-8 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 font-mono">
            <p className="text-xs text-muted-foreground tracking-wide">
              © 2025 27 Circle
            </p>
            <p className="text-xs text-muted-foreground tracking-wide">
              United States
            </p>
          </div>
          <nav className="flex gap-8 font-mono">
            <Link 
              to="/careers/founding-systems-collaborator" 
              className="text-xs text-muted-foreground hover:text-foreground tracking-wide"
            >
              Careers
            </Link>
            <Link 
              to="/privacy" 
              className="text-xs text-muted-foreground hover:text-foreground tracking-wide"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-xs text-muted-foreground hover:text-foreground tracking-wide"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
