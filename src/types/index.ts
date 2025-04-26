export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: string;
}

export type SeverityFilter = 'All' | 'Low' | 'Medium' | 'High';

export type DateSort = 'newest' | 'oldest';

export interface NewIncidentFormData {
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
}