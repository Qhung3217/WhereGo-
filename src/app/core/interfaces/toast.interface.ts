export interface Toast {
  header: string;
  body: string;
  delay?: number;
  type?: 'success' | 'error' | 'warning' | 'infor';
}
