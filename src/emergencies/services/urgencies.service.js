import http from "../../core/services/http-common";

export class UrgenciesService {
  getAll() {
    return http.get("/urgencies");
  }

  getByGuardianId(id) {
    return http.get(`/guardians/${id}/urgencies`);
  }

  getById(id) {
    return http.get(`/urgencies/${id}`);
  }

  create(data) {
    return http.post("/urgencies", data);
  }

  update(id, data) {
    return http.put(`/urgencies/${id}`, data);
  }

  delete(id) {
    return http.delete(`/urgencies/${id}`);
  }
}
