import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { ThreadsComponent } from './threads/threads.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ProblemsComponent } from './problems/problems.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemDetailComponent,
    ThreadsComponent,
    PostDetailComponent,
    ProblemsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
