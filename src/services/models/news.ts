export interface Source {
  id?: null | string | number;
  name: string;
}

export interface UserListResult {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }>;
  support: {
    url: string;
    text: string;
  };
}
