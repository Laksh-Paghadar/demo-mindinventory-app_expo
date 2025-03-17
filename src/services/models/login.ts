export interface LoginResult {
  userToken: string;
}

// export interface LoginResult {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: Array<{
//     id: number;
//     name: string;
//     year: number;
//     color: string;
//     pantone_value: string;
//   }>;
//   support: {
//     url: string;
//     text: string;
//   };
// }

export interface LoginParams {
  email: string;
  password: string;
}
