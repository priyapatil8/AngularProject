import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private registerUrl="http://localhost:8082/api/v1/register";
  constructor(private http: HttpClient) { }

  registerUser(user){
   return this.http.post<any>(this.registerUrl,user)
  }
}
