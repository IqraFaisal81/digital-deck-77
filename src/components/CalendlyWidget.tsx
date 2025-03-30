
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
      className="calendly-inline-widget w-full" 
      data-url={url}
      style={{ 
        minWidth: '100%', 
        height: `${height}px`,
        overflow: 'hidden' 
      }}
    />
  );
};

export default CalendlyWidget;
