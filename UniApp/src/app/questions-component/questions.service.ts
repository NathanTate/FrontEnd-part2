import { Injectable } from "@angular/core";

import * as testData from "../../assets/test.json"
import { Question, Test } from "../models/question.model";

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {
    availableQuestions: Test;
    selectedQuestions: Test = {questions: []};

    constructor() {
        this.availableQuestions = testData;
    }

    addQuestionToTest(question: Question) {
        this.selectedQuestions.questions.push(question);
        const index = this.availableQuestions.questions.indexOf(question);
        this.availableQuestions.questions.splice(index, 1);
    }

    removeQuestionFromTest(question: Question) {
        this.availableQuestions.questions.push(question);
        const index = this.selectedQuestions.questions.indexOf(question);
        this.selectedQuestions.questions.splice(index, 1);
    }
}
