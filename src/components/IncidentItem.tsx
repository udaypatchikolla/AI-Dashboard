import React, { useState } from 'react';
import { format } from 'date-fns';
import { Incident } from '../types';
import { useTheme } from '../context/ThemeContext';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode } = useTheme();
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const formattedDate = format(new Date(incident.reported_at), 'MMM d, yyyy h:mm a');
  
  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'Low':
        return 'badge-low';
      case 'Medium':
        return 'badge-medium';
      case 'High':
        return 'badge-high';
      default:
        return 'badge-low';
    }
  };
  
  return (
    <div className={`p-4 ${isDarkMode ? 'hover:bg-neutral-700' : 'hover:bg-neutral-50'} transition-colors duration-150 ${expanded ? isDarkMode ? 'bg-neutral-700' : 'bg-neutral-50' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="grow">
          <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{incident.title}</h3>
          
          <div className="flex items-center mt-2 gap-3">
            <span className={`badge ${getSeverityClass(incident.severity)}`}>
              {incident.severity}
            </span>
            <span className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {formattedDate}
            </span>
          </div>
        </div>
        
        <button 
          onClick={toggleExpanded}
          className={`mt-3 sm:mt-0 btn ${isDarkMode ? 'btn-dark' : 'btn-secondary'} text-sm`}
        >
          {expanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      
      {expanded && (
        <div className={`mt-4 pt-4 ${isDarkMode ? 'border-neutral-600' : 'border-neutral-200'} border-t animate-slide-down`}>
          <p className={`${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} whitespace-pre-line`}>{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;