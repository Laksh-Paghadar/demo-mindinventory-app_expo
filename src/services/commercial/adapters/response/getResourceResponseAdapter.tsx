import { ResourcesList } from '@src/services/models/resourcesList';
import ResourceListResponseDTO from '../../dtos/ResourceListResponseDTO';

export class getResourceResponseAdapter {
  constructor() {}

  services(params: ResourceListResponseDTO): ResourcesList {
    return {
      page: params.page,
      per_page: params.per_page,
      total: params.total,
      total_pages: params.total_pages,
      data: params.data.map(resource => ({
        id: resource.id,
        name: resource.name,
        year: resource.year,
        color: resource.color,
        pantone_value: resource.pantone_value,
      })),
      support: {
        url: params.support.url,
        text: params.support.text,
      },
    };
  }
}
