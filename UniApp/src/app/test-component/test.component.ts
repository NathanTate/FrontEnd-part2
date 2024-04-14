import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { QuestionsService } from "../questions-component/questions.service";
import { Question } from "../models/question.model";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: "app-test",
    templateUrl: "./test.component.html",
    styleUrl: "./test.component.css"
})
export class TestComponent implements OnInit{
    questions: Question[];
    questionId: number = 0;
    currentQuestion: Question;
    isLastQuestion: boolean = false;
    buttonText: string = 'Next question';
    score: number = 0;
    scoreCost: number = 0;
    userAnswer = "";
    answerStatistics: {correct: number, wrong: number} = {
        correct: 0,
        wrong: 0
    }

    constructor(private questionService: QuestionsService, 
        private route: ActivatedRoute, private router: Router) {
        this.questions = questionService.selectedQuestions.questions;
        this.scoreCost = +(100 / this.questions.length).toFixed(2);
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.questionId = +params['id'];
                if(this.questionId > this.questions.length-1) {
                    this.isLastQuestion = true;
                    return;
                }
                this.userAnswer = '';
                this.currentQuestion = this.questions[this.questionId];
            }
        );
    }

    onRadioChange(value: string) {
        this.userAnswer = value;
    }

    check(input: HTMLInputElement) {
        if(this.questionId >= this.questions.length - 2) {
            this.buttonText = "Finish"
        }

        if(this.userAnswer === 'true') {
            this.score += this.scoreCost;
            this.answerStatistics.correct += 1;
        } else
        {
            this.answerStatistics.wrong += 1;
        }
    }

    restart() {
        this.userAnswer = "";
        this.isLastQuestion = false;
        this.score = 0;
        this.questionId = 0;
        this.router.navigate(["/0"]);
        this.answerStatistics.correct = 0;
        this.answerStatistics.wrong = 0;
    }

}