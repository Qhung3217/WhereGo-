export interface SearchModalConfig {
  show: boolean;
  type: SearchType;
}
export type SearchType =
  | 'article'
  | 'hotel'
  | 'restaurant'
  | 'destination'
  | 'all';
