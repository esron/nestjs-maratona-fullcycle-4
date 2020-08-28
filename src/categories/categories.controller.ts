import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService){}

  @Get()
  index(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post()
  async create(@Body() category: any): Promise<any> {
    return await this.categoriesService.create(category);
  }
}
