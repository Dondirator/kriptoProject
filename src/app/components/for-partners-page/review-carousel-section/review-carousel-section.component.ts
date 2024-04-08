import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-review-carousel-section',
  templateUrl: './review-carousel-section.component.html',
  styleUrl: './review-carousel-section.component.scss',
})
export class ReviewCarouselSectionComponent implements AfterViewInit {
  mySwiper: Swiper;

  slides = [
    {
      img: '../../../../assets/images/18.png',
      title: 'MAX UNGER',
      subtitle: 'Head of community Aptos Labs',
      content:
        'CРаботы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемыontent of Slide 1',
    },
    {
      img: '../../../../assets/images/18.png',
      title: 'Slide 2',
      subtitle: 'Slide 1',
      content:
        'Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы',
    },
    {
      img: '../../../../assets/images/18.png',
      title: 'Slide 3',
      subtitle: 'Slide 1',
      content:
        'CРаботы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемыontent of Slide 1',
    },
    {
      img: '../../../../assets/images/18.png',
      title: 'Slide 4',
      subtitle: 'Slide 1',
      content:
        'Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы',
    },
    {
      img: '../../../../assets/images/18.png',
      title: 'Slide 5',
      subtitle: 'Slide 1',
      content:
        'CРаботы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемы. Работы членов команды CGS хороши, и я думаю что то, что вы делаете, достаточно важно для экосистемыontent of Slide 1',
    },
  ];

  constructor() {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1.5,
      spaceBetween: 30,
      slidesOffsetBefore: 20,
      loop: true,

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }
}
