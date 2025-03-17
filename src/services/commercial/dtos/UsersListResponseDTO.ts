export interface UsersListResponseDTO {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UsersListItemResponse[];
  support: {
    url: string;
    text: string;
  };
}

export interface UsersListItemResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
