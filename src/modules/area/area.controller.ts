import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AreaService } from './area.service';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';

@Controller('areas')
export class AreaController {
  constructor(private areaService: AreaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createArea(@Body() body) {
    return this.areaService.createArea(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAreas() {
    return this.areaService.getAreas();
  }
}
