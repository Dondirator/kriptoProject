import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  mySwiper: Swiper;

  slides = [
    {
      img: '../../../assets/images/30.png',
      title: 'MAX UNGER',
      subtitle: 'Head of community Aptos Labs',
      content:
        'CРаботы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемыontent of Slide 1',
    },
    {
      img: '../../../assets/images/35.png',
      title: 'Slide 2',
      subtitle: 'Slide 1',
      content:
        'Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы',
    },
    {
      img: '../../../assets/images/35.png',
      title: 'Slide 3',
      subtitle: 'Slide 1',
      content:
        'CРаботы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемыontent of Slide 1',
    },
    {
      img: '../../../assets/images/30.png',
      title: 'Slide 4',
      subtitle: 'Slide 1',
      content:
        'Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы',
    },
    {
      img: '../../../assets/images/35.png',
      title: 'Slide 5',
      subtitle: 'Slide 1',
      content:
        'CРаботы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемыontent of Slide 1',
    },
  ];

  constructor() {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000, // время задержки между слайдами в миллисекундах
        disableOnInteraction: false, // автопрокрутка не останавливается при взаимодействии пользователя с слайдером
      },

      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        986: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
}
