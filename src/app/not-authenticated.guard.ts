import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from './services/user.service';

export const notAuthenticatedGuard: CanActivateFn = (route, state) => {
  return !inject(UserService).isAuthenticated()();
};
