import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { User } from '../components/team/team-member/team-member.component';

@Pipe({ name: 'Desc' })
export class DescPipe implements PipeTransform {
  constructor(private _translocoService: TranslocoService) {}
  transform(user: User, trigger: number) {
    if (user.localDesc.length > 0) {
      let currentLanguage = this._translocoService.getActiveLang();
      console.log('cityNameByPropertyPipe trigger');
      return user.localDesc.find((element) => element.lang == currentLanguage)
        ?.value;
    }
    return '';
  }
}
