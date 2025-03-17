interface Resource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

interface Support {
  url: string;
  text: string;
}

interface ResourceListResponseDTO {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Resource[];
  support: Support;
}

export default ResourceListResponseDTO;
