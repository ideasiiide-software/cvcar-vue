import axios from 'axios'

const apiURL = 'https://cvcar.com.co/api/v1/'
//const apiURL = 'http://localhost:3000/api/v1/'

const client = axios.create({
  baseURL: apiURL,
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    let accessToken = localStorage.getItem("userToken")
    const req = await client({
      method: method,
      url: resource,
      data: data,
      headers: {
        App: 'vue-cvcar',
        Authorization: `Bearer ${accessToken}`
      }
    })
    return req.data
  },
  //cities
  getCities () {
    return this.execute('get', '/cities')
  },
  //totals
  getTotals() {
    return this.execute('get', '/totals')
  },
  //admins
  getAdmins () {
    return this.execute('get', '/admins')
  },
  getAdmin (id) {
    return this.execute('get', `/admins/${id}`)
  },
  registerAdmin (data) {
    return this.execute('post', '/admins', data)
  },
  deleteAdmin (id) {
    return this.execute('delete', `/admins/${id}`)
  },
  //partners
  getPartners () {
    return this.execute('get', '/partners')
  },
  getPartner (id) {
    return this.execute('get', `/partners/${id}`)
  },
  getPartnerTypes () {
    return this.execute('get', '/types/partner')
  },
  registerPartner (data) {
    return this.execute('post', '/partners', data)
  },
  editPartner (id, data) {
    return this.execute('put', `/partners/${id}`, data)
  },
  deletePartner (id) {
    return this.execute('delete', `/partners/${id}`)
  },
  //users
  getUsers () {
    return this.execute('get', '/users')
  },
  getUser (id) {
    return this.execute('get', `/users/${id}`)
  },
  registerUser (data) {
    return this.execute('post', '/users', data)
  },
  deleteUser (id) {
    return this.execute('delete', `/users/${id}`)
  },
  //vehicles
  getVehicles () {
    return this.execute('get', '/vehicles')
  },
  getVehicle (id) {
    return this.execute('get', `/vehicles/${id}`)
  },
  getVehicleTypes () {
    return this.execute('get', '/types/vehicle')
  },
  registerVehicle (data) {
    return this.execute('post', '/vehicles', data)
  },
  deleteVehicle (id) {
    return this.execute('delete', `/vehicles/${id}`)
  },
  editImagePartner (id, formData) {
    return axios.patch(apiURL + `/partners/${id}`, formData, 
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("userToken")}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  },
}