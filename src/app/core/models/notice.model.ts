export interface Notice {
  id: number;
  title: string;
  text: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeResponse {
  success: boolean;
  message: string;
  data: Notice[];
}

export interface CreateNoticeRequest {
  title: string;
  text: string;
  type: string;
}


export interface CorporateFeed {
  category: string;
  title: string;
  text: string;
  author: string;
  date: string;
}