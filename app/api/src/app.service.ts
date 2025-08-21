import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {heading:"hello world",message:"hello world from nestjs app"};
  }
}
