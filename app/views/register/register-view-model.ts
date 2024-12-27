import { Observable } from '@nativescript/core';
import { AuthService } from '../../shared/services/auth.service';

export class RegisterViewModel extends Observable {
    private _fullName = '';
    private _email = '';
    private _password = '';
    private _isLoading = false;
    private authService: AuthService;

    constructor() {
        super();
        this.authService = AuthService.getInstance();
    }

    get fullName(): string { return this._fullName; }
    set fullName(value: string) {
        if (this._fullName !== value) {
            this._fullName = value;
            this.notifyPropertyChange('fullName', value);
        }
    }

    get email(): string { return this._email; }
    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string { return this._password; }
    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    get isLoading(): boolean { return this._isLoading; }
    set isLoading(value: boolean) {
        if (this._isLoading !== value) {
            this._isLoading = value;
            this.notifyPropertyChange('isLoading', value);
        }
    }

    async onRegister() {
        if (!this._fullName || !this._email || !this._password) {
            // TODO: Show validation error
            return;
        }

        this.isLoading = true;
        try {
            // TODO: Implement actual registration
            console.log('Registration successful');
        } finally {
            this.isLoading = false;
        }
    }
}