import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { login } from '../../shared/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private apiRrl = "";

  
  register(login : login): Observable<any> {
    return this.http.post(`${this.apiRrl}/register`, login);
  }
  
  private tokenSubject = new BehaviorSubject<string | null>(
    localStorage.getItem('TOKEN')
  );

  token$ = this.tokenSubject.asObservable();

  login(login : login): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiRrl}/login`, login).pipe(tap((data) => {
      localStorage.setItem('TOKEN', data.token);      
      this.tokenSubject.next(data.token);
    }));
  }

  logout() {
    localStorage.removeItem('TOKEN');
    this.tokenSubject.next(null);
  }

  getToken() {
    return this.tokenSubject.value;
  }


  
}
