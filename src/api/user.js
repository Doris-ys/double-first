import request from '@/utils/request'

const userApi = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  // get my info
  UserInfo: '/user/info',
  UserEdit: '/user/edit'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: ''
 * }
 * @param parameter
 * @returns {}
 */
export function login (parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}

/**
 * logout func
 * parameter: {}
 * @param parameter
 * @returns {*}
 */
export function logout (parameter) {
  return request({
    url: userApi.Logout,
    method: 'post'
  })
}

/**
 * UserInfo func
 * parameter: {}
 * @param parameter
 * @returns {
 * 		result: {
 *			userName: '',
 *      name: '',
 *      department: '',
 *      officePhone: '',
 *      email: '',
 *      schoolPhone: ''
 *		},
 *		success: false,
 *		message: '异常状态提示信息'
 * }
 */
export function UserInfo (parameter) {
  return request({
    url: userApi.UserInfo,
    method: 'post'
  })
}

/**
 * logout func
 * parameter: {
 *		userName: '',
 *    name: '',
 *    oldPassword: '',
 *    repeatOldPassword: '',
 *    department: '',
 *    officePhone: '',
 *    email: '',
 *    schoolPhone: ''
 * }
 * @param parameter
 * @returns {*}
 */
export function UserEdit (parameter) {
  return request({
    url: userApi.UserEdit,
    method: 'post',
    data: parameter
  })
}