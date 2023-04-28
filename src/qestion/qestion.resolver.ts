import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QestionService } from './qestion.service';
import { Qestion } from './entities/qestion.entity';
import { CreateQestionInput } from './dto/create-qestion.input';
import { UpdateQestionInput } from './dto/update-qestion.input';

@Resolver(() => Qestion)
export class QestionResolver {
  constructor(private readonly qestionService: QestionService) {}

  @Mutation(() => Qestion)
  createQestion(@Args('createQestionInput') createQestionInput: CreateQestionInput) {
    return this.qestionService.create(createQestionInput);
  }

  @Query(() => [Qestion], { name: 'qestion' })
  findAll() {
    return this.qestionService.findAll();
  }

  @Query(() => Qestion, { name: 'qestion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.qestionService.findOne(id);
  }

  @Mutation(() => Qestion)
  updateQestion(@Args('updateQestionInput') updateQestionInput: UpdateQestionInput) {
    return this.qestionService.update(updateQestionInput.id, updateQestionInput);
  }

  @Mutation(() => Qestion)
  removeQestion(@Args('id', { type: () => Int }) id: number) {
    return this.qestionService.remove(id);
  }
}
