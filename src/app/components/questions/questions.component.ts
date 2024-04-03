import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  isActive = false;
  onQuestionClick() {
    this.isActive = !this.isActive;
  }
}
