import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Incident } from './types';
import { initialIncidents } from './data/mockData';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);

  const addIncident = (incident: Omit<Incident, 'id' | 'reported_at'>) => {
    const newIncident: Incident = {
      ...incident,
      id: Math.max(0, ...incidents.map(inc => inc.id)) + 1,
      reported_at: new Date().toISOString(),
    };
    
    setIncidents(prev => [newIncident, ...prev]);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Dashboard incidents={incidents} addIncident={addIncident} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;