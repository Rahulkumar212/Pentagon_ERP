export type PipelinePriority = 'HOT' | 'WARM' | 'COLD';

export interface PipelineLead {
  id: number;
  customerName: string;
  contactPerson: string;
  value: number;
  priority: PipelinePriority;
  owner: string;
  lastActivity: string;
}

export interface PipelineStage {
  key: string;
  title: string;
  color: string;
  leads: PipelineLead[];
}

export const PIPELINE_COLUMN_COLORS: Record<string, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  yellow: 'bg-yellow-500',
  pink: 'bg-pink-500',
  green: 'bg-emerald-500'
};


export const PIPELINE_PRIORITY_CLASSES: Record<string, string> = {
  HOT: 'border-red-200 bg-red-50 text-red-700',
  WARM: 'border-amber-200 bg-amber-50 text-amber-700',
  COLD: 'border-emerald-200 bg-emerald-50 text-emerald-700'
};


export const DEFAULT_PIPELINE_COLUMN_COLOR =
  'bg-slate-500';


export const DEFAULT_PIPELINE_PRIORITY_CLASS =
  'border-slate-200 bg-slate-50 text-slate-600';