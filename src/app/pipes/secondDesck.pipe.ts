import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { User } from '../components/team/team-member/team-member.component';

@Pipe({ name: 'SecondDesc' })
export class SecondDescPipe implements PipeTransform {
  constructor(private _translocoService: TranslocoService) {}
  transform(user: User, trigger: number) {
    if (user.localDesc.length > 0) {
      let currentLanguage = this._translocoService.getActiveLang();
      return user.localSecondDesc.find(
        (element) => element.lang == currentLanguage
      )?.value;
    }
    return '';
  }
}
