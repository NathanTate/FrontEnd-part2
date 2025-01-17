interface Answer {
    answer: string;
    isCorrect: boolean;
}

export interface Question {
    question: string;
    answers: Answer[];
}

export interface Test {
    testName?: string;
    questions: Question[];
}