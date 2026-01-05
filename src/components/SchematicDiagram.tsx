const SchematicDiagram = () => {
  return (
    <svg
      viewBox="0 0 400 120"
      className="w-full max-w-md opacity-40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Input node */}
      <circle cx="40" cy="60" r="8" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <text x="40" y="85" textAnchor="middle" className="text-foreground fill-current text-[8px] font-mono">IN</text>
      
      {/* Line to decision diamond */}
      <line x1="48" y1="60" x2="90" y2="60" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      
      {/* Decision diamond */}
      <polygon 
        points="120,35 150,60 120,85 90,60" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        className="text-foreground"
      />
      <text x="120" y="63" textAnchor="middle" className="text-foreground fill-current text-[7px] font-mono">DCS</text>
      
      {/* Lines to outputs */}
      <line x1="150" y1="60" x2="180" y2="60" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <line x1="180" y1="60" x2="180" y2="20" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <line x1="180" y1="60" x2="180" y2="100" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      
      {/* Top branch - APPROVED */}
      <line x1="180" y1="20" x2="220" y2="20" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <rect x="220" y="12" width="60" height="16" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" />
      <text x="250" y="23" textAnchor="middle" className="text-foreground fill-current text-[7px] font-mono">APPROVED</text>
      
      {/* Middle top - REJECTED */}
      <line x1="180" y1="45" x2="220" y2="45" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <rect x="220" y="37" width="60" height="16" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" />
      <text x="250" y="48" textAnchor="middle" className="text-foreground fill-current text-[7px] font-mono">REJECTED</text>
      <circle cx="180" cy="45" r="2" fill="currentColor" className="text-foreground" />
      
      {/* Middle - straight through */}
      <line x1="180" y1="60" x2="220" y2="60" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <rect x="220" y="52" width="60" height="16" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" />
      <text x="250" y="63" textAnchor="middle" className="text-foreground fill-current text-[7px] font-mono">ESCALATE</text>
      
      {/* Middle bottom - SILENCE */}
      <line x1="180" y1="75" x2="220" y2="75" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <rect x="220" y="67" width="60" height="16" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" />
      <text x="250" y="78" textAnchor="middle" className="text-foreground fill-current text-[7px] font-mono">SILENCE</text>
      <circle cx="180" cy="75" r="2" fill="currentColor" className="text-foreground" />
      
      {/* Bottom branch - terminal */}
      <line x1="180" y1="100" x2="220" y2="100" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <circle cx="235" cy="100" r="8" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <circle cx="235" cy="100" r="4" fill="currentColor" className="text-foreground" />
      <text x="235" y="118" textAnchor="middle" className="text-foreground fill-current text-[7px] font-mono">END</text>
      
      {/* Output arrows */}
      <line x1="280" y1="20" x2="300" y2="20" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <line x1="280" y1="45" x2="300" y2="45" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <line x1="280" y1="60" x2="300" y2="60" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      <line x1="280" y1="75" x2="300" y2="75" stroke="currentColor" strokeWidth="1" className="text-foreground" />
      
      {/* Arrow heads */}
      <polygon points="300,17 300,23 308,20" fill="currentColor" className="text-foreground" />
      <polygon points="300,42 300,48 308,45" fill="currentColor" className="text-foreground" />
      <polygon points="300,57 300,63 308,60" fill="currentColor" className="text-foreground" />
      <polygon points="300,72 300,78 308,75" fill="currentColor" className="text-foreground" />
    </svg>
  );
};

export default SchematicDiagram;
