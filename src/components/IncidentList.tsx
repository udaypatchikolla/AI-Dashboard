import React from 'react';
import IncidentItem from './IncidentItem';
import { Incident } from '../types';

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  if (incidents.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-neutral-500">No incidents found matching your criteria.</p>
      </div>
    );
  }
  
  return (
    <div className="divide-y divide-neutral-200">
      {incidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;