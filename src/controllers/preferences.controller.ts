import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserPreferenceService } from './user-preference.service';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';  // Import DTO

@Controller('api/preferences')
export class PreferencesController {
  constructor(private readonly userPreferenceService: UserPreferenceService) {}

  // POST /api/preferences
  @Post()
  async createPreference(@Body() createUserPreferenceDto: CreateUserPreferenceDto) {
    return this.userPreferenceService.create(createUserPreferenceDto);
  }

  // GET /api/preferences/:userId
  @Get(':userId')
  async getUserPreference(@Param('userId') userId: string) {
    return this.userPreferenceService.findOne(userId);
  }

  // PATCH /api/preferences/:userId
  @Patch(':userId')
  async updateUserPreference(@Param('userId') userId: string, @Body() updateUserPreferenceDto: CreateUserPreferenceDto) {
    return this.userPreferenceService.update(userId, updateUserPreferenceDto);
  }

  // DELETE /api/preferences/:userId
  @Delete(':userId')
  async deleteUserPreference(@Param('userId') userId: string) {
    return this.userPreferenceService.remove(userId);
  }
}
