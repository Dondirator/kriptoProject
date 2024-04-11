import { Component, Input } from '@angular/core';
import { TeamMember } from '../team-member.model';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss',
})
export class TeamMemberComponent {
  @Input() teamMember: TeamMember;
  @Input() id: number;
}
