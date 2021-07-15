import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async createMember(body: CreateMemberDto) {
    const { name, username, password, admin } = body;

    await this.prisma.member.create({
      data: {
        name,
        username,
        password,
        admin,
      },
    });

    return;
  }
}
