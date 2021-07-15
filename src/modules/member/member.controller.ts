import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Post()
  createMember(@Body() body) {
    return this.memberService.createMember(body);
  }

  @Get()
  getMembers() {
    return this.memberService.getMembers();
  }
}
