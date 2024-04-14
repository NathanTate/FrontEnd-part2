import { Component } from '@angular/core';
import { QuestionsService } from './questions-component/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UniApp';

  constructor(public QuestionsService: QuestionsService) {}
}
