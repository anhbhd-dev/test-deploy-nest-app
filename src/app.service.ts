import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [
      { id: 1, name: 'Nguyen Van A', email: 'nguyenvana@example.com' },
      { id: 2, name: 'Tran Thi B', email: 'tranthib@example.com' },
      { id: 3, name: 'Le Van C', email: 'levanc@example.com' },
    ];
  }
}
