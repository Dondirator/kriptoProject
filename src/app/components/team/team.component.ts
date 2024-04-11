import { Component, OnInit } from '@angular/core';
import { TeamMember } from './team-member.model';
import { TeamMemberService } from './team-member.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  providers: [TeamMemberService],
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [];
  constructor(private teamMemberService: TeamMemberService) {}
  ngOnInit() {
    this.teamMembers = this.teamMemberService.getMembers();
  }
}
