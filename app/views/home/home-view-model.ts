import { Observable } from '@nativescript/core';
import { AuthService } from '../../shared/services/auth.service';
import { DonationService } from '../../shared/services/donation.service';
import { NotificationService } from '../../shared/services/notification.service';

export class HomeViewModel extends Observable {
    private authService: AuthService;
    private donationService: DonationService;
    private notificationService: NotificationService;
    
    private _treesPlanted = '10,000+';
    private _co2Reduced = '500t';
    private _donationAmount = '';
    private _updates = [
        { title: 'New Milestone!', description: 'We\'ve planted our 10,000th tree!' },
        { title: 'Community Event', description: 'Join us this weekend for a tree planting event.' }
    ];
    private _projects = [
        {
            name: 'Amazon Restoration',
            description: 'Restoring degraded areas in the Amazon rainforest.',
            image: '~/images/amazon.jpg',
            progress: 75
        },
        {
            name: 'Urban Forests',
            description: 'Creating green spaces in urban areas.',
            image: '~/images/urban.jpg',
            progress: 45
        }
    ];

    constructor() {
        super();
        this.authService = AuthService.getInstance();
        this.donationService = DonationService.getInstance();
        this.notificationService = NotificationService.getInstance();
        this.setupNotifications();
    }

    private async setupNotifications() {
        await this.notificationService.requestPermissions();
    }

    get treesPlanted(): string { return this._treesPlanted; }
    get co2Reduced(): string { return this._co2Reduced; }
    get updates(): any[] { return this._updates; }
    get projects(): any[] { return this._projects; }
    get donationAmount(): string { return this._donationAmount; }
    set donationAmount(value: string) {
        if (this._donationAmount !== value) {
            this._donationAmount = value;
            this.notifyPropertyChange('donationAmount', value);
        }
    }

    async onPayPalDonate() {
        const amount = parseFloat(this._donationAmount);
        if (isNaN(amount)) {
            // TODO: Show error
            return;
        }
        
        try {
            await this.donationService.processDonation(amount, 'paypal');
            this.notificationService.sendNotification(
                'Thank You!',
                `Your donation of $${amount} has been processed.`
            );
        } catch (error) {
            console.error('Donation error:', error);
        }
    }

    async onCryptoDonate() {
        const amount = parseFloat(this._donationAmount);
        if (isNaN(amount)) {
            // TODO: Show error
            return;
        }
        
        try {
            await this.donationService.processDonation(amount, 'crypto');
            this.notificationService.sendNotification(
                'Thank You!',
                `Your crypto donation of $${amount} has been processed.`
            );
        } catch (error) {
            console.error('Donation error:', error);
        }
    }

    onLogout() {
        this.authService.logout();
        // TODO: Navigate to login page
    }

    onViewProjects() {
        // TODO: Navigate to projects tab
    }
}