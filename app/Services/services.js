/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { get, post, put } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserId: async params => get('api/users/v1', params),
  UpdateUser: async (params, id) => put(`api/users/v1/user/${id}`, params),
  login: async params => post('api/users/v1/login/user', params),
  resetPassword: async params => post('api/users/v1/resetPassword', params),
  getData: async page => get(`api/materi`, params)
};

// // end point
// export const endpoint = {
//   login: async params => post('api/users/v1/login/user', params)
// };

export default { endpoint };
