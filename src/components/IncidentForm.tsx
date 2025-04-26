import React, { useState } from 'react';
import { NewIncidentFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

interface IncidentFormProps {
  onSubmit: (formData: NewIncidentFormData) => void;
  onCancel: () => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit, onCancel }) => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState<NewIncidentFormData>({
    title: '',
    description: '',
    severity: 'Medium',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof NewIncidentFormData, string>>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof NewIncidentFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof NewIncidentFormData, string>> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-neutral-900'} mb-4`}>Report New Incident</h3>
      
      <div>
        <label htmlFor="title" className={`label ${isDarkMode ? 'text-neutral-300' : ''}`}>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`input ${isDarkMode ? 'bg-neutral-700 border-neutral-600 text-white' : ''} ${errors.title ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Brief incident title"
        />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
      </div>
      
      <div>
        <label htmlFor="description" className={`label ${isDarkMode ? 'text-neutral-300' : ''}`}>Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`input ${isDarkMode ? 'bg-neutral-700 border-neutral-600 text-white' : ''} ${errors.description ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Detailed description of the incident"
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>
      
      <div>
        <label htmlFor="severity" className={`label ${isDarkMode ? 'text-neutral-300' : ''}`}>Severity</label>
        <select
          id="severity"
          name="severity"
          value={formData.severity}
          onChange={handleChange}
          className={`input ${isDarkMode ? 'bg-neutral-700 border-neutral-600 text-white' : ''}`}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      
      <div className="flex justify-end space-x-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className={`btn ${isDarkMode ? 'btn-dark' : 'btn-secondary'}`}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit Incident
        </button>
      </div>
    </form>
  );
};

export default IncidentForm;