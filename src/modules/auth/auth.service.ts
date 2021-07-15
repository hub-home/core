import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signup-auth.dto';
import { PrismaService } from '@/modules/prisma/prisma.service';
import argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(body: SignUpDto) {
    const { username, password } = body;

    const member = await this.prisma.member.findUnique({
      where: {
        username,
      },
    });

    if (!member) {
      throw new HttpException("member doesn't exists", HttpStatus.NOT_FOUND);
    }

    if (await argon2.verify(member.password, password)) {
      return {
        token: this.jwtService.sign({
          sub: member.id,
        }),
      };
    }

    throw new HttpException("password doesn't match", HttpStatus.FORBIDDEN);
  }
}
