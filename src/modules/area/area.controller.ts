import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AreaService } from './area.service';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller('areas')
export class AreaController {
  constructor(private areaService: AreaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createArea(@Body() body: CreateAreaDto) {
    return this.areaService.createArea(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAreas() {
    return this.areaService.getAreas();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getArea(@Param('id') id) {
    return this.areaService.getArea(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteArea(@Param('id') id) {
    return this.areaService.deleteArea(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  updateArea(@Param('id') id, @Body() body: UpdateAreaDto) {
    return this.areaService.updateArea(id, body);
  }
}
