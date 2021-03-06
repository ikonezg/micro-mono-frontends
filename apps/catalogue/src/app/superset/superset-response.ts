// Generated by https://quicktype.io

export interface SupersetResponse {
  count: number;
  description_columns: unknown;
  ids: number[];
  label_columns: { [key: string]: string };
  list_columns: string[];
  list_title: string;
  order_columns: string[];
  result: Result[];
}

export interface Result {
  cache_timeout: null;
  changed_by: string;
  changed_by_name: string;
  changed_by_url: string;
  changed_on_delta_humanized: string;
  changed_on_utc: string;
  created_by: CreatedBy;
  datasource_id: number;
  datasource_name_text: string;
  datasource_type: string;
  datasource_url: string;
  description: null;
  description_markeddown: string;
  edit_url: string;
  id: number;
  owners: CreatedBy[];
  params: string;
  slice_name: string;
  table: Table;
  thumbnail_url: string;
  url: string;
  viz_type: string;
}

export interface CreatedBy {
  first_name: string;
  id: number;
  last_name: string;
  username?: string;
}

export interface Table {
  default_endpoint: null;
  table_name: string;
}
