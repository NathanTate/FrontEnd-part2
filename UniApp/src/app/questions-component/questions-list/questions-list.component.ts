import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";
import { Question, Test } from "../../models/question.model";
import { faPenToSquare,  faCircleXmark, faCirclePlus} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-questions-list',
    templateUrl: './questions-list.component.html',
    styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent implements OnInit{
    availableQuestions: Test;
    selectedQuestions: Test;
    editIcon = faPenToSquare;
    removeIcon = faCircleXmark;
    addIcon = faCirclePlus;

    constructor(private questionsService: QuestionsService) {
    
    }

    ngOnInit(): void {
        this.availableQuestions = this.questionsService.availableQuestions;
        this.selectedQuestions = this.questionsService.selectedQuestions;
    }

    addQuestion(question: Question) {
        this.questionsService.addQuestionToTest(question);
    }

    removeQuestion(question: Question) {
        this.questionsService.removeQuestionFromTest(question);
    }

    canStart(): boolean {
        return this.questionsService.selectedQuestions.questions.length <= 0;
    }
}