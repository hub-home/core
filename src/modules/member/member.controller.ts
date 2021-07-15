import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getMember(@Param('id') id) {
    return this.memberService.getMember(id);
  }
}
