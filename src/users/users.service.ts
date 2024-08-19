import { Injectable } from '@nestjs/common';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll() {
    return this.users;
  }
}
