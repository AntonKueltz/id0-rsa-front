import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Problem } from '../problem';
import { ProblemsService } from '../problems.service';

@Component({
    selector: 'app-problem-detail',
    templateUrl: './problem-detail.component.html',
    styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
    problem: Problem;

    constructor(
        private route: ActivatedRoute,
        private problemsService: ProblemsService
    ) { }

    ngOnInit() {
        this.getProblem();
    }

    getProblem(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.problemsService.getProblem(id).subscribe(
            problem => this.problem = problem);
    }

    checkAnswer(answer: string): void {
        this.problemsService.checkAnswer(this.problem.id, answer).subscribe(
            response => this.updateSolvedStatus(response['correct']));
    }

    updateSolvedStatus(correct: boolean) {
        this.problem.solved = correct;
        if(!correct) {
            alert('That answer was incorrect')
        }
    }
}
