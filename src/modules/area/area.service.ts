import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';

@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async createArea(body: CreateAreaDto) {
    const { name } = body;

    await this.prisma.area.create({
      data: {
        name,
      },
    });

    return;
  }
}
