import { Injectable } from '@nestjs/common';
import { CreateQestionInput } from './dto/create-qestion.input';
import { UpdateQestionInput } from './dto/update-qestion.input';

@Injectable()
export class QestionService {
  create(createQestionInput: CreateQestionInput) {
    return 'This action adds a new qestion';
  }

  findAll() {
    return `This action returns all qestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qestion`;
  }

  update(id: number, updateQestionInput: UpdateQestionInput) {
    return `This action updates a #${id} qestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} qestion`;
  }
}
