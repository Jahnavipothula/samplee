import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './models/user-preference.model';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';

@Injectable()
export class UserPreferenceService {
  constructor(@InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreference>) {}

  // Create a new user preference
  async create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    const createdPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return createdPreference.save();
  }

  // Find one user preference by userId
  async findOne(userId: string): Promise<UserPreference> {
    return this.userPreferenceModel.findOne({ userId });
  }

  // Update a user preference by userId
  async update(userId: string, updateUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, updateUserPreferenceDto, { new: true });
  }

  // Delete a user preference by userId
  async remove(userId: string): Promise<void> {
    await this.userPreferenceModel.deleteOne({ userId });
  }
}
