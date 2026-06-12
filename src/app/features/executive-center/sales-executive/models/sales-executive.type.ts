export interface ExecutiveCard {
  title: string;
  value: string | number;
  description: string;
  color: string;
}

export interface LeadDiscussion {
  customerRequirement?: string;
  durationSec: number;
  outcome: string;
  panelType?: string;
  quantity?: number;
  amount?: number;
  remarks?: string;
}

export interface ExecutiveLead {
  id: number;
  organization: string;
  industry_sector?: string;
  source: string;
  contactPerson: string;
  phone: string;
  email: string;
  attempts: number;
  status:
  | 'RAW'
  | 'ASSIGNED'
  | 'INTERESTED'
  | 'IN_PROGRESS'
  | 'CONVERTED';
  discussionData?: LeadDiscussion;
}