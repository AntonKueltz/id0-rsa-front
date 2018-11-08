import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Problem } from './problem';

const httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class ProblemsService {
    private problemsUrl = 'http://localhost:8000/problems/'

    constructor(private http: HttpClient) { }

    getProblem(id: number): Observable<Problem> {
        return this.http.get<Problem>(`${this.problemsUrl}${id}/`).pipe(
            catchError(this.handleError<Problem>(`getProblem id=${id}`))
        )
    }

    getProblems(): Observable<Problem[]> {
        return this.http.get<Problem[]>(this.problemsUrl).pipe(
            catchError(this.handleError('getProblems', []))
        );
    }

    checkAnswer(id: number, answer: string): Observable<boolean> {
        return this.http.get<boolean>(
            `${this.problemsUrl}${id}/check`,
            {params: {answer: answer}}
        ).pipe(catchError(this.handleError('checkAnswer', false)));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console
            return of(result as T);
        };
    }
}
