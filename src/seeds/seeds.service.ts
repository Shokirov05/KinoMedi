import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../modules/users/schema/user.schema'; 
import { UserRole } from '../modules/users/enum/user-role.enum'; 
import { UsersService } from '../modules/users/users.service'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserSeedService implements OnModuleInit {
  constructor(
    @InjectModel(UserDocument.name) private readonly userModel: Model<UserDocument>, 
    private readonly usersService: UsersService,  
  ) {}

  async onModuleInit() {
    const defaultEmail = 'muhammaddiyorshokirov92@gmail.com';

    const defaultUser = await this.userModel.findOne({ email: defaultEmail }).exec();
    
    if (!defaultUser) {
      await this.createDefaultUser();
    } else {
      console.log('Foydalanuvchi allaqachon mavjud!');
    }
  }

  private async createDefaultUser() {
    const defaultUser = {
      firstName: 'Muhammaddiyor',
      lastName: 'Shokirov',
      email: 'muhammaddiyorshokirov92@gmail.com',
      order: '1',  
      role: UserRole.SUPERADMIN,  
      password: 'shokirov2005', 
    };


    try {
      const hashedPassword = await bcrypt.hash(defaultUser.password, 10);

      const userWithHashedPassword = { ...defaultUser, password: hashedPassword };

      await this.usersService.create(userWithHashedPassword);

      console.log('Foydalanuvchi muvaffaqiyatli yaratildi!');
    } catch (error) {
      console.error('Foydalanuvchini yaratishda xatolik yuz berdi:', error);
    }
  }
}
