import { Incident } from '../types';

export const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in content recommendations, creating an echo chamber effect that limited exposure to diverse perspectives. The issue was traced to training data imbalances and has been addressed with data augmentation techniques.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information when queried about emergency protocols, potentially putting users at risk. The model confidently stated dangerous misinformation as fact. Immediate guardrails have been implemented while retraining is in progress.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in its responses to certain queries. The exposed data included generic usage patterns but no personally identifiable information. The vulnerability has been patched in the latest update.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Unexpected System Shutdown",
    description: "AI-powered critical systems monitoring tool crashed unexpectedly during peak usage hours, causing a 15-minute monitoring gap. No adverse effects were reported, but the potential for undetected issues exists. Root cause was identified as a memory leak in the anomaly detection module.",
    severity: "Medium",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "Facial Recognition False Positive",
    description: "Security system incorrectly identified an authorized employee as an unauthorized individual, triggering unnecessary security protocols. Investigation revealed the system struggles with certain lighting conditions and facial coverings. Algorithm is being retrained with more diverse examples.",
    severity: "Low",
    reported_at: "2025-03-18T11:20:00Z"
  },
  {
    id: 6,
    title: "Automated Decision System Discrimination",
    description: "Loan approval AI system showed statistically significant bias against applicants from certain geographic areas, despite not having direct access to protected demographic information. The proxy discrimination effect has prompted a full audit and temporary return to human-in-the-loop approval.",
    severity: "High",
    reported_at: "2025-03-28T13:10:00Z"
  }
];