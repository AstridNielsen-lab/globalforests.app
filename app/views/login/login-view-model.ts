import { Observable } from '@nativescript/core';
import { AuthService } from '../../shared/services/auth.service';

export class LoginViewModel extends Observable {
    private _email: string = '';
    private _password: string = '';
    private _isLoading: boolean = false;
    private authService: AuthService;

    constructor() {
        super();
        this.authService = AuthService.getInstance();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    set isLoading(value: boolean) {
        if (this._isLoading !== value) {
            this._isLoading = value;
            this.notifyPropertyChange('isLoading', value);
        }
    }

    async onLogin() {
        if (!this._email || !this._password) {
            // TODO: Show validation error
            return;
        }

        this.isLoading = true;
        try {
            const success = await this.authService.login(this._email, this._password);
            if (success) {
                // TODO: Navigate to home page
                console.log('Login successful');
            } else {
                // TODO: Show error message
                console.log('Login failed');
            }
        } finally {
            this.isLoading = false;
        }
    }

    onRegister() {
        // TODO: Navigate to registration page
        console.log('Navigate to registration');
    }

    async onGoogleLogin() {
        await this.authService.loginWithSocial('google');
    }

    async onFacebookLogin() {
        await this.authService.loginWithSocial('facebook');
    }

    async onTwitterLogin() {
        await this.authService.loginWithSocial('twitter');
    }
}