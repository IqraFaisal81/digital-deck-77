
import React from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: number;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url, height = 700 }) => {
  return (
    <div className="calendly-inline-widget w-full" 
      data-url={url} 
      style={{ 
        minWidth: '320px',
        height: `${height}px`
      }}
    />
  );
};

export default CalendlyWidget;
