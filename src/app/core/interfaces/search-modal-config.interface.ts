export interface SearchModalConfig {
  show: boolean;
  type: SearchType;
  placeholder?: string;
}
export type SearchType =
  | 'article'
  | 'hotel'
  | 'restaurant'
  | 'destination'
  | 'all';
