import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  updateUser(userId: number, userData: any) {
    return this.http.put(`http://localhost:8000/api/users/${userId}/`, userData);
  }

  deleteUser(userId: number) {
    return this.http.delete(`http://localhost:8000/api/users/${userId}/`);
  }
}
