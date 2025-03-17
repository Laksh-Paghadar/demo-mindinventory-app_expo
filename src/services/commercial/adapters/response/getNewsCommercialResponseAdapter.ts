import { UserListResult } from '../../../models/news';
import { UsersListResponseDTO } from '../../dtos/UsersListResponseDTO';

export class getUsersListCommercialResponseAdapter {
  constructor() {}

  service(dto: UsersListResponseDTO): UserListResult {
    return {
      page: dto.page,
      per_page: dto.per_page,
      total: dto.total,
      total_pages: dto.total_pages,
      data: dto.data.map(item => ({
        id: item.id,
        email: item.email,
        first_name: item.first_name,
        last_name: item.last_name,
        avatar: item.avatar,
      })),
      support: {
        url: dto.support.url,
        text: dto.support.text,
      },
    };
  }
}
