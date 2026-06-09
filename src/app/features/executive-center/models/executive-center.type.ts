export interface ExecutiveCard {
  title: string;
  value: string | number;
  description: string;
  color: string;
}

export interface LeadDiscussion {
  customerRequirement?: string;
  panelType?: string;
  quantity?: number;
  amount?: number;
  remarks?: string;
}

export interface ExecutiveLead {
  id: number;
  organization: string;
  source: string;
  contactPerson: string;
  phone: string;
  email: string;
  attempts: string;
  status: 'ASSIGNED' | 'IN_PROGRESS' | 'CONVERTED';
  discussionData?: any;
}