import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
});

const apis = {
    getAllMahasiswa: ()  => api.get('/mahasiswa', { withCredentials: true }),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`, { withCredentials: true }),
    createMahasiswa: (data) => api.post('/mahasiswa', data, { withCredentials: true }),
    UpdateMahasiswa: (nim, data) => api.put (`/mahasiswa/${nim}`, data, { withCredentials: true }),
    DeleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`, { withCredentials: true })
};
 
export default apis;