import { Body, Controller, Post } from '@nestjs/common';
import { AreaService } from './area.service';

@Controller('areas')
export class AreaController {
  constructor(private areaService: AreaService) {}

  @Post()
  createArea(@Body() body) {
    return this.areaService.createArea(body);
  }
}
