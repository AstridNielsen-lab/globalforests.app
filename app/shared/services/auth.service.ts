import { Observable } from '@nativescript/core';

export class AuthService extends Observable {
    private static instance: AuthService;
    private _isLoggedIn = false;
    private _currentUser: any = null;

    static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    async login(email: string, password: string): Promise<boolean> {
        try {
            // TODO: Implement actual login logic
            this._isLoggedIn = true;
            this._currentUser = { email };
            this.notifyPropertyChange('isLoggedIn', this._isLoggedIn);
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }

    async loginWithSocial(provider: string): Promise<boolean> {
        try {
            // TODO: Implement social login
            console.log(`Social login with ${provider}`);
            return true;
        } catch (error) {
            console.error(`${provider} login error:`, error);
            return false;
        }
    }

    logout(): void {
        this._isLoggedIn = false;
        this._currentUser = null;
        this.notifyPropertyChange('isLoggedIn', this._isLoggedIn);
    }

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    get currentUser(): any {
        return this._currentUser;
    }
}