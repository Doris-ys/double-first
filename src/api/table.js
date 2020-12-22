import request from '@/utils/request'

const tableApi = {
  TableUniversity: '/table/university'
}

export function getUniversityTable () {
  return request({
    url: tableApi.TableUniversity,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
