import { Injectable, NotFoundException, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserDocument } from '../users/schema/user.schema';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);  // Logger for this service

  constructor(@InjectModel(UserDocument.name) private userModel: Model<UserDocument>) {}

  async register(registerDto: RegisterDto) {
    const { email, password, firstName, lastName, role } = registerDto;

    this.logger.log(`Attempting to register user with email: ${email}`);

    const userExists = await this.userModel.findOne({ email });
    if (userExists) {
      this.logger.warn(`User with email ${email} already exists`);
      throw new NotFoundException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    this.logger.log(`User with email ${email} registered successfully`);

    return { message: 'User registered successfully' };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    this.logger.log(`Attempting to login user with email: ${email}`);
    
    const user = await this.userModel.findOne({ email });
    if (!user) {
      this.logger.warn(`Login attempt failed: User with email ${email} not found`);
      throw new UnauthorizedException('Invalid email or password');
    }
  
    const isMatch = await bcrypt.compare(password, user.password); 
    if (!isMatch) {
      this.logger.warn(`Login attempt failed: Incorrect password for user with email ${email}`);
      throw new UnauthorizedException('Invalid email or password');
    }
  
    // Create JWT payload
    const payload = { userId: user._id, email: user.email, role: user.role };

    // Generate access and refresh tokens
    const accessToken = this.generateAccessToken(payload);
    const refreshToken = this.generateRefreshToken(payload);

    this.logger.log(`User with email ${email} logged in successfully`);

    return { accessToken, refreshToken };
  }

  async refresh(refreshDto: RefreshDto) {
    const { refreshToken } = refreshDto;

    this.logger.log(`Attempting to refresh token`);

    try {
      // Verify and decode the refresh token
      const payload = this.verifyRefreshToken(refreshToken);
      // Generate a new access token
      const newAccessToken = this.generateAccessToken(payload);

      this.logger.log(`Successfully refreshed access token`);

      return { accessToken: newAccessToken };
    } catch (error) {
      this.logger.warn(`Refresh token failed: ${error.message}`);
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  private generateAccessToken(payload: any): string {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '1h' });
  }

  private generateRefreshToken(payload: any): string {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
  }

  private verifyRefreshToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }
}
