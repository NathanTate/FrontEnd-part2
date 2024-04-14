import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions-component/questions.component';
import { QuestionsEditComponent } from './questions-component/questions-edit/questions-edit.component';
import { QuestionsListComponent } from './questions-component/questions-list/questions-list.component';
import { TestComponent } from './test-component/test.component';

const routes: Routes = [
  {path: '', component: QuestionsComponent, children: [
    {path: 'questions-edit', component: QuestionsEditComponent},
    {path: "questions-list", component: QuestionsListComponent}
  ]},
  {path: ':id', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
