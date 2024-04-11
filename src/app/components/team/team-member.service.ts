import { EventEmitter } from '@angular/core';
import { TeamMember } from './team-member.model';

export class TeamMemberService {
  teamMemberSelected = new EventEmitter<TeamMember>();

  private members: TeamMember[] = [
    new TeamMember(
      1,
      '../../../../assets/images/team-icons/Berimir.jpg',
      'Berimir',
      'programmist'
    ),
    new TeamMember(
      2,
      '../../../../assets/images/team-icons/Porhol.jpg',
      'Porhol',
      'programmist'
    ),
    new TeamMember(
      3,
      '../../../../assets/images/team-icons/Shakal.jpg',
      'Shakal',
      'programmist'
    ),
    new TeamMember(
      4,
      '../../../../assets/images/team-icons/Splow.jpg',
      'Splow',
      'programmist'
    ),
    new TeamMember(
      5,
      '../../../../assets/images/team-icons/Nik.jpg',
      'Nik',
      'programmist'
    ),
    new TeamMember(
      6,
      '../../../../assets/images/team-icons/Dondi.jpg',
      'Dondi',
      'programmist'
    ),
  ];

  getMembers() {
    return this.members.slice();
  }
}
