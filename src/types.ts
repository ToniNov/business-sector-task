export interface IPost {
  id: number;
  title: string;
  body: string;
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
