import { LeadPriority } from './sales-visit.type';


// ================= TELECALLING PAYLOAD =================

export interface TelecallingPayload {

  executive_name: string;

  visit_date: string;

  customer_name: string;

  contact_person: string;

  contact_number: string;

  customer_email: string;

  city: string;

  lead_priority: LeadPriority;


  remarks: string;
}


// ================= TELECALLING =================

export interface Telecalling extends TelecallingPayload {

  id: number;

  status?: string;

  createdAt?: string;

  updatedAt?: string;
}


// ================= RESPONSE =================

export interface TelecallingResponse {

  success: boolean;

  message: string;

  data: Telecalling[];
}