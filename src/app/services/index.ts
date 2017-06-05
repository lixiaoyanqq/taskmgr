import {NgModule} from '@angular/core';
import {AuthService} from './auth.service';
import {ProjectService} from './project.service';
import {QuoteService} from './quote.service';
import {TaskListService} from './task-list.service';
import {TaskService} from './task.service';
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './user.service';
import {MyCalService} from './my-cal.service';
import {DragDropService} from './drag-drop.service';

export {
  AuthGuardService,
  AuthService,
  ProjectService,
  QuoteService,
  TaskListService,
  TaskService,
  UserService,
  MyCalService,
  DragDropService,
}

@NgModule({})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthGuardService,
        AuthService,
        ProjectService,
        QuoteService,
        TaskListService,
        TaskService,
        UserService,
        MyCalService,
        DragDropService,
      ]
    };
  }
}
