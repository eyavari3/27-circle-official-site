import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center gap-3 px-6 py-5 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="27 Circle" className="h-8 w-auto" />
          <span className="text-lg font-semibold text-foreground">27 Circle</span>
        </Link>
        <nav className="ml-auto">
          <Link 
            to="/careers" 
            className="font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide transition-colors"
          >
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
