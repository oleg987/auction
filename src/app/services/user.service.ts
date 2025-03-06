import {computed, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';

export interface SignInModel{
  email: string;
  password: string;
}

export interface SignUpModel{
  email: string;
  name: string;
  password: string;
}

export interface UserModel{
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userSource = signal<UserModel | null>(null);

  user = this.userSource.asReadonly();

  constructor(private http: HttpClient) { }

  signIn(request: SignInModel){
    return this.http.post<UserModel>('https://localhost:7042/api/v1/user/sign-in', request).pipe(
      tap(user => {
        console.log(user);
        this.userSource.set(user);
      })
    );
  }

  signUp(request: SignUpModel){
    return this.http.post('https://localhost:7042/api/v1/user/sign-in', request);
  }

  logout(){
    this.userSource.set(null);
  }

  isAuthenticated(){
    return computed<boolean>(() => this.user() !== null);
  }
}
