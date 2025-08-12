import { useState, useEffect } from 'react';

const DebugComponent = () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date().toISOString());

  useEffect(() => {
    console.log('[DEBUG] DebugComponent mounted/updated at:', new Date().toISOString());
    setLastUpdate(new Date().toISOString());
  }, []);

  const handleTestUpdate = () => {
    const newCount = updateCount + 1;
    setUpdateCount(newCount);
    setLastUpdate(new Date().toISOString());
    console.log('[DEBUG] Manual update triggered:', newCount, 'at', new Date().toISOString());
  };

  // This text should change when you modify it to test HMR
  const testMessage = "🔄 HMR Test Component - Change this text to test live updates!";

  return (
    <div className="fixed bottom-4 right-4 bg-accent p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h3 className="font-bold text-accent-foreground mb-2">Debug Panel</h3>
      <p className="text-sm text-accent-foreground mb-2">{testMessage}</p>
      <p className="text-xs text-accent-foreground mb-2">Updates: {updateCount}</p>
      <p className="text-xs text-accent-foreground mb-2">Last: {lastUpdate}</p>
      <button 
        onClick={handleTestUpdate}
        className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90 transition-colors"
      >
        Test Update
      </button>
    </div>
  );
};

export default DebugComponent;