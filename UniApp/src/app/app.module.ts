import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions-component/questions.component';
import { QuestionsListComponent } from './questions-component/questions-list/questions-list.component';
import { QuestionsEditComponent } from './questions-component/questions-edit/questions-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestComponent } from './test-component/test.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionsListComponent,
    QuestionsEditComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
