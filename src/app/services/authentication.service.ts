import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  private storeId: any = 'przly-user-grant-access';
  constructor() { }
  hasAccess (): boolean {
    localStorage.getItem(this.storeId);
    const access: boolean = typeof localStorage.getItem(this.storeId) === 'string' &&
      localStorage.getItem(this.storeId) === 'YES';
    return access;
  }
  grantAccess(): void {
    localStorage.setItem(this.storeId, 'YES');
  }
}
