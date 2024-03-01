import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post('http://localhost:8000/api/users/', userData);
  }

  getUsers() {
    return this.http.get('http://localhost:8000/api/users/');
  }

  getUsersbyId(id:any) {
    return this.http.get(`http://localhost:8000/api/users/${id}`);
  }

}
