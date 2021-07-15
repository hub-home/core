import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'config';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { MemberModule } from '@/modules/member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    PrismaModule,
    MemberModule,
  ],
})
export class AppModule {}
