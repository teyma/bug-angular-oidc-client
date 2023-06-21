
export interface Authentication {
  login(): void;

  checkAuthAndLogin(): Promise<boolean>;

  logout(): Promise<unknown>;

  authenticated(): Promise<boolean>;
}
