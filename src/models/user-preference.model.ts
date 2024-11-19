import { Schema, Document } from 'mongoose';

export interface UserPreference extends Document {
  userId: string;
  email: string;
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };
  timezone: string;
  createdAt: Date;
  lastUpdated: Date;
}

export const UserPreferenceSchema = new Schema<UserPreference>({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  preferences: {
    marketing: { type: Boolean, default: false },
    newsletter: { type: Boolean, default: false },
    updates: { type: Boolean, default: false },
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly', 'never'], default: 'weekly' },
    channels: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      push: { type: Boolean, default: true }
    }
  },
  timezone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now }
});
