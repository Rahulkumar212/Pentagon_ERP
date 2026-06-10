export interface ExecutiveCard {
  title: string;
  value: string | number;
  description: string;
  color: string;
}

export interface LeadDiscussion {
  customerRequirement?: string;
  duration: number;
  callOutcome: string;
  panelType?: string;
  quantity?: number;
  amount?: number;
  remarks?: string;
}

export interface ExecutiveLead {
  id: number;
  organization: string;
  industryName?: string;
  source: string;
  contactPerson: string;
  phone: string;
  email: string;
  attempts: number;
  status: 'ASSIGNED' | 'IN_PROGRESS' | 'CONVERTED';
  discussionData?: LeadDiscussion;
}