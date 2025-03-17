export interface LoginResponseDTO {
  token: string;
}

export interface LoginResult {
  userToken: string;
}

export function service(dto: LoginResponseDTO): LoginResult {
  return {
    userToken: dto.token,
  };
}
