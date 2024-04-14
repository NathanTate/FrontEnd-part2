import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrl: './questions.component.css'
})
export class QuestionsComponent{
    constructor(private router: Router) {
    }

    showLink(): boolean {
       return !this.router.url.includes('/questions');
    }
}