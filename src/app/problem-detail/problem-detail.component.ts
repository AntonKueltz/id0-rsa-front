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
        // TODO const id = +this.route.snapshot.paramMap.get('id');
        this.problemsService.getProblem(1).subscribe(
            problem => this.problem = problem);
    }
}
