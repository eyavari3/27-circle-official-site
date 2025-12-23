import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="text-lg font-medium text-foreground">
          27 Circle
        </Link>
      </div>
    </header>
  );
};

export default Header;
