import React from 'react';

interface LeetCodeIconProps {
  className?: string;
}

const LeetCodeIcon: React.FC<LeetCodeIconProps> = ({ className = "w-9 h-9" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
    >
      {/* Top Orange Curve */}
      <path 
        d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V10C20 11.1046 19.1046 12 18 12H6C4.89543 12 4 11.1046 4 10V8Z" 
        fill="#FF8C00"
      />
      {/* Bottom Orange Curve */}
      <path 
        d="M4 14C4 12.8954 4.89543 12 6 12H18C19.1046 12 20 12.8954 20 14V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V14Z" 
        fill="#FF8C00"
      />
      {/* Central Gray Bar */}
      <rect 
        x="8" 
        y="10" 
        width="8" 
        height="4" 
        rx="2" 
        fill="#808080"
      />
    </svg>
  );
};

export default LeetCodeIcon; 