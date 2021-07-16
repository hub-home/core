import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createMember(@Body() body: CreateMemberDto) {
    return this.memberService.createMember(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getMembers() {
    return this.memberService.getMembers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getMember(@Param('id') id) {
    return this.memberService.getMember(id);
  }

  // TODO: add authentication guard for admin
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteMember(@Param('id') id) {
    return this.memberService.deleteMember(id);
  }
}
