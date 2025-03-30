
import React, { useEffect, useState } from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: number;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url, height = 700 }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly script only if it hasn't been loaded yet
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // Cleanup function
    return () => {
      // We don't remove the script on unmount as it might be needed elsewhere
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full h-full" 
      data-url={url}
      style={{ 
        minWidth: '320px',
        height: `${height}px`,
        minHeight: '100%',
        border: 'none',
        overflow: 'hidden'
      }}
    />
  );
};

export default CalendlyWidget;
