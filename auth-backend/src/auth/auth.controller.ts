import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    try {
      return await this.authService.register(
        body.name,
        body.email,
        body.password,
      );
    } catch (e: any) {
      return { message: e.message };
    }
  }

  @Post('login')
  async login(@Body() body: any) {
    try {
      return await this.authService.login(body.email, body.password);
    } catch (e: any) {
      return { message: e.message };
    }
  }
}
