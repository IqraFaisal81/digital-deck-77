
import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: number;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url, height = 700 }) => {
  useEffect(() => {
    // Load Calendly script only if it hasn't been loaded yet
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget rounded-lg overflow-hidden shadow-xl" 
      data-url={url}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  );
};

export default CalendlyWidget;
