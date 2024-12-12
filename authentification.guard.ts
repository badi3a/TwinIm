import { CanActivateFn } from '@angular/router';

export const authentificationGuard: CanActivateFn = (route, state) => {
  return true;
};
