import { Component, OnInit } from '@angular/core';

import { Problem } from '../problem';
import { ProblemsService } from '../problems.service';

@Component({
    selector: 'app-problems',
    templateUrl: './problems.component.html',
    styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
    problems: Problem[];

    constructor(private problemsService: ProblemsService) { }

    ngOnInit() {
        this.getProblems();
    }

    getProblems(): void {
        this.problemsService.getProblems().subscribe(
            problems => this.problems = problems);
    }
}
