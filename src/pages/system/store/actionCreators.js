import * as types from './actionTypes'
import moment from 'moment'

const selectDetail = (data) => {
  const registrationAddress = JSON.parse(data.registrationAddress)
  const lastLoginAddress = JSON.parse(data.lastLoginAddress)
  const userInfo = {
    username: data.username,
    gender: data.gender,
    rIp: lastLoginAddress.ip,
    rTime: data.registrationTime && moment(data.registrationTime).format('YYYY-MM-DD HH:mm:ss'),
    rNation: registrationAddress.ad_info.nation,
    rProvince: registrationAddress.ad_info.province,
    rCity: `${registrationAddress.ad_info.city}（${registrationAddress.ad_info.district}）`,
    lastLoginAddress: lastLoginAddress.ip && `${lastLoginAddress.ip}（${lastLoginAddress.ad_info.city}）`,
    lastLoginTime: data.lastLoginTime && moment(data.lastLoginTime).format('YYYY-MM-DD HH:mm:ss')
  }
  return {
    userInfo: userInfo,
    status: true
  }
}

export const setSystemDetailStatus = (status) => {
  return {
    type: types.SYSTEM_DETAIL_STATUS,
    status
  }
}

export const setSystemUserAdd = (status) => {
  return {
    type: types.SYSTEM_ADD_USER,
    status
  }
}

export const setHandleDetail = (value) => {
  const data = selectDetail(value)
  return {
    type: types.HANDLE_DETAIL,
    data
  }
}

export const setChangePagination = (data) => {
  return {
    type: types.HANDLE_CHANGE_PAGINATION,
    data
  }
}
