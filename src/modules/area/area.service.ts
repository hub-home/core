import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

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

  async getAreas() {
    const areas = await this.prisma.area.findMany();

    return areas;
  }

  async getArea(id: string) {
    const area = await this.prisma.area.findUnique({
      where: {
        id,
      },
    });

    return area;
  }

  // TODO: check if area doesn't exists
  async deleteArea(id: string) {
    await this.prisma.area.delete({
      where: {
        id,
      },
    });

    return;
  }

  async updateArea(id: string, body: UpdateAreaDto) {
    const { name } = body;

    await this.prisma.area.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return;
  }
}
