import { Component } from '@angular/core';
import { TeamMember } from '../team-member.model';
import { TranslocoService, getLangFromScope } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

export interface LocalCoco {
  lang: string;
  value: string;
}
export interface SecondLocalCoco {
  lang: string;
  value: string;
}

export interface User {
  id: number;
  name: string;

  localDesc: Array<LocalCoco>;
  localSecondDesc: Array<SecondLocalCoco>;

  imgPath: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss',
})
export class TeamMemberComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Berimir',

      imgPath: '../../../assets/images/team-icons/Berimir.jpg',
      localDesc: [
        { lang: 'ru', value: 'крипто-аналитик' },
        { lang: 'en', value: 'crypto-analyst' },
        { lang: 'cn', value: '我们的团队' },
      ],
      localSecondDesc: [
        {
          lang: 'ru',
          value:
            'программист, оператор нод и основатель команды "CGS", крипто-аналитик и инвестор.',
        },
        {
          lang: 'en',
          value:
            'Programmer, node operator, and founder of the "CGS" team, crypto-analyst, and investor',
        },
        {
          lang: 'cn',
          value: '程序员、节点操作员和"CGS"团队创始人，加密分析师和投资者。',
        },
      ],
      isOpen: false,
    },
    {
      id: 2,
      name: 'Porhol',

      imgPath: '../../../assets/images/team-icons/Porhol.jpg',
      localDesc: [
        { lang: 'ru', value: 'PR-менеджер' },
        { lang: 'en', value: 'PR manager' },
        { lang: 'cn', value: '公关经理' },
      ],
      localSecondDesc: [
        {
          lang: 'ru',
          value: 'со-основатель команды "CGS", PR-менеджер.',
        },
        {
          lang: 'en',
          value: 'Co-founder of the "CGS" team, PR manager.',
        },
        {
          lang: 'cn',
          value: '"CGS"团队的联合创始人，公关经理。',
        },
      ],
      isOpen: false,
    },
    {
      id: 3,
      name: 'Splow',

      imgPath: '../../../assets/images/team-icons/Splow.jpg',
      localDesc: [
        { lang: 'ru', value: 'Backend разработчик' },
        { lang: 'en', value: 'Backend developer' },
        { lang: 'cn', value: '后端开发人员。' },
      ],
      localSecondDesc: [
        { lang: 'ru', value: '123' },
        { lang: 'en', value: '456' },
        { lang: 'cn', value: '890' },
      ],
      isOpen: false,
    },
    {
      id: 4,
      name: 'Shakal',

      imgPath: '../../../assets/images/team-icons/Shakal.jpg',
      localDesc: [
        { lang: 'ru', value: 'веб-дизайнер' },
        { lang: 'en', value: 'Web designer' },
        { lang: 'cn', value: '网站设计师' },
      ],
      localSecondDesc: [
        { lang: 'ru', value: '123' },
        { lang: 'en', value: '456' },
        { lang: 'cn', value: '890' },
      ],
      isOpen: false,
    },
    {
      id: 5,
      name: 'Nick',

      imgPath: '../../../assets/images/team-icons/Nik.jpg',
      localDesc: [
        { lang: 'ru', value: 'копирайтер' },
        { lang: 'en', value: 'Copywriter' },
        { lang: 'cn', value: '文案撰稿人。' },
      ],
      localSecondDesc: [
        { lang: 'ru', value: '123' },
        { lang: 'en', value: '456' },
        { lang: 'cn', value: '890' },
      ],
      isOpen: false,
    },
    {
      id: 6,
      name: 'Dondi',

      imgPath: '../../../assets/images/team-icons/Dondi.jpg',
      localDesc: [
        { lang: 'ru', value: 'Frontend разработчик' },
        { lang: 'en', value: 'Frontend developer' },
        { lang: 'cn', value: '前端开发人员' },
      ],
      localSecondDesc: [
        {
          lang: 'ru',
          value:
            'Backend разработчик, Frontend разработчик, Веб-разработчик, Веб-дизайнер.',
        },
        {
          lang: 'en',
          value:
            'Backend developer, Frontend developer, Web developer, Web designer.',
        },
        {
          lang: 'cn',
          value: '后端开发人员，前端开发人员，网页开发人员，网页设计师。',
        },
      ],
      isOpen: false,
    },
    {
      id: 7,
      name: 'Hleb',

      imgPath: '../../../assets/images/team-icons/Dondi.jpg',
      localDesc: [
        { lang: 'ru', value: 'крипто-аналитик' },
        { lang: 'en', value: 'Crypto-analyst' },
        { lang: 'cn', value: '密码分析师' },
      ],
      localSecondDesc: [
        { lang: 'ru', value: '123' },
        { lang: 'en', value: '456' },
        { lang: 'cn', value: '890' },
      ],
      isOpen: false,
    },
  ];

  constructor(private translocoService: TranslocoService) {
    this.languageChangeSubscription = translocoService.langChanges$.subscribe(
      (lang) => {
        this.trigger = this.trigger + 1;
      }
    );
  }

  languageChangeSubscription!: Subscription;
  trigger = 0;
  ngOnDestroy() {
    this.languageChangeSubscription.unsubscribe();
  }

  toggleDropdown(user: User) {
    user.isOpen = !user.isOpen;
  }
}
