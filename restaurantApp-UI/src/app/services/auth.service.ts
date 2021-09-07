import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN';
  private readonly id = "USER_ID";
  constructor(private http: HttpClient) { }
  login(user: any):Observable<boolean>{
    return this.http.post<any>(`${environment.apiUrl}/user/login`, user)
      .pipe(
        tap(token => this.storeJwtToken(token.accessToken)),
        mapTo(true),
        catchError(error => { return of(false) })
      );
  }

  storeJwtToken(accessToken: string) {
    localStorage.setItem(this.ACCESS_TOKEN, accessToken)
  }

  storeUserId(userId:string){
    localStorage.setItem(this.id, userId)
  }

  getJwtToken() {
     return localStorage.getItem(this.ACCESS_TOKEN)
  }

  getUserid() {
     return localStorage.getItem(this.id)
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }
  
  logout() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.id);
  }
}
