import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'config';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { MemberModule } from '@/modules/member/member.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { AreaModule } from '@/modules/area/area.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    PrismaModule,
    AuthModule,
    MemberModule,
    AreaModule,
  ],
})
export class AppModule {}
