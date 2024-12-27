import { APP_CONFIG } from '../config';

export const processDonation = async (amount: number, method: 'paypal' | 'crypto'): Promise<boolean> => {
  if (amount < APP_CONFIG.DONATION_MIN_AMOUNT) {
    throw new Error(`Minimum donation amount is ${APP_CONFIG.DONATION_MIN_AMOUNT}`);
  }

  // TODO: Implement actual payment processing
  console.log(`Processing ${amount} via ${method}`);
  return true;
};