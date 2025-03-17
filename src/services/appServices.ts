import { API_METHODS } from './appServices.type';
import { ServicesEndPoints } from './appServicesEndPoints';
import { getUsersListCommercialResponseAdapter } from './commercial/adapters/response/getNewsCommercialResponseAdapter';
import { PostLoginCommercialResponseAdapter } from './commercial/adapters/response/postLoginCommercialResponseAdapter';
import { UsersListResponseDTO } from './commercial/dtos/UsersListResponseDTO';
import { UserListResult } from './models';
import { LoginParams, LoginResult } from './models/login';
import serviceAdapter from './serviceAdapter';
import { LoginResponseDTO } from './commercial/dtos/LoginResponseDTO';
import { logger } from '@src/utils';

export class AppServices {
  constructor() {}

  loginUser = async (loginParams: LoginParams): Promise<LoginResult> => {
    const endPoint = ServicesEndPoints.LOGIN;

    return new Promise((resolve, reject) => {
      serviceAdapter<LoginResponseDTO, LoginParams>(
        API_METHODS.POST,
        endPoint,
        loginParams
      )
        .then(res => {
          resolve(new PostLoginCommercialResponseAdapter().service(res));
        })
        .catch(error => {
          logger('Laksh >> AppService >> Error:', error);
          reject(error);
        });
    });
  };

  // listUsers = async (listUserReq: ListUserReq): Promise<UserResult[]> => {
  //   const endPoint = `${ServicesEndPoints.USERS}?page=${listUserReq.page}&per_page=${listUserReq.per_page}`;
  //   console.log(
  //     'Laksh >> AppService >> API Call URL:',
  //     AppConfig.API_URL + endPoint
  //   );
  //   console.log('Laksh >> AppService >> Request Parameters:', listUserReq);

  //   return new Promise((resolve, reject) => {
  //     serviceAdapter<UserResponseDTO, ListUserReq>(API_METHODS.GET, endPoint)
  //       .then(res => {
  //         console.log('Laksh >> AppService >> Response:', res);
  //         resolve(new GetUserCommercialResponseAdapter().service(res));
  //       })
  //       .catch(error => {
  //         console.error('Laksh >> AppService >> Error:', error);
  //         reject(error);
  //       });
  //   });
  // };

  getUsers = async (page: number): Promise<UserListResult> => {
    const endPoint = `${ServicesEndPoints.NEWS}?page=${page}`;

    return new Promise((resolve, reject) => {
      serviceAdapter<UsersListResponseDTO, number>(API_METHODS.GET, endPoint)
        .then(res => {
          resolve(new getUsersListCommercialResponseAdapter().service(res));
        })
        .catch(error => {
          logger('Laksh >> AppService >> Error:', error);
          reject(error);
        });
    });
  };
}

export const appServices = new AppServices();
