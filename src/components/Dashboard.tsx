import React, { useState } from 'react';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import { Incident, SeverityFilter, DateSort, NewIncidentFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

interface DashboardProps {
  incidents: Incident[];
  addIncident: (incident: Omit<Incident, 'id' | 'reported_at'>) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ incidents, addIncident }) => {
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [dateSort, setDateSort] = useState<DateSort>('newest');
  const [showForm, setShowForm] = useState(false);
  const { isDarkMode } = useTheme();
  
  const filteredIncidents = incidents.filter(incident => 
    severityFilter === 'All' || incident.severity === severityFilter
  );
  
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return dateSort === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const handleAddIncident = (formData: NewIncidentFormData) => {
    addIncident(formData);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>Incident Reports</h2>
          <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>{filteredIncidents.length} incidents found</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary flex items-center"
        >
          {showForm ? 'Cancel' : 'Report New Incident'}
        </button>
      </div>

      {showForm && (
        <div className={`${isDarkMode ? 'bg-neutral-800' : 'bg-white'} rounded-lg shadow-md p-6 animate-fade-in`}>
          <IncidentForm onSubmit={handleAddIncident} onCancel={() => setShowForm(false)} />
        </div>
      )}
      
      <div className={`${isDarkMode ? 'bg-neutral-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
        <div className={`p-4 border-b ${isDarkMode ? 'bg-neutral-700 border-neutral-600' : 'bg-neutral-50 border-neutral-200'}`}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>Filter by severity:</span>
              <div className="flex space-x-1">
                {(['All', 'Low', 'Medium', 'High'] as const).map((severity) => (
                  <button
                    key={severity}
                    onClick={() => setSeverityFilter(severity)}
                    className={`btn px-3 py-1 text-sm ${
                      severityFilter === severity 
                        ? severity === 'All' 
                          ? 'btn-primary' 
                          : `btn-${severity.toLowerCase()}`
                        : isDarkMode ? 'btn-dark' : 'btn-secondary'
                    }`}
                  >
                    {severity}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 ml-auto">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>Sort by date:</span>
              <div className="flex space-x-1">
                <button
                  onClick={() => setDateSort('newest')}
                  className={`btn px-3 py-1 text-sm ${dateSort === 'newest' ? 'btn-primary' : isDarkMode ? 'btn-dark' : 'btn-secondary'}`}
                >
                  Newest
                </button>
                <button
                  onClick={() => setDateSort('oldest')}
                  className={`btn px-3 py-1 text-sm ${dateSort === 'oldest' ? 'btn-primary' : isDarkMode ? 'btn-dark' : 'btn-secondary'}`}
                >
                  Oldest
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <IncidentList incidents={sortedIncidents} />
      </div>
    </div>
  );
};

export default Dashboard;