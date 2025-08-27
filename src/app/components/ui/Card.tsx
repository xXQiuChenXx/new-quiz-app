// Card component
'use client';

import React, { useState } from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  className?: string;
}

/**
 * Card component with optional collapsible functionality
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  collapsible = false,
  defaultCollapsed = false,
  className = '',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const toggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
      <div 
        className={`px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center ${collapsible ? 'cursor-pointer' : ''}`}
        onClick={toggleCollapse}
      >
        <h3 className="font-medium text-gray-800">{title}</h3>
        {collapsible && (
          <button 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={isCollapsed ? 'Buka' : 'Tutup'}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform ${isCollapsed ? '' : 'transform rotate-180'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      <div className={`${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};