import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { of, Observable } from 'rxjs';
import { concatMap, switchMap, mergeMap, map, catchError, pluck, tap} from 'rxjs/operators';

import { AuthService } from '../../services';
import { LoginResponse } from '../../models/loginResponse';
import * as UsersAction from './users.actions';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }

  login$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(UsersAction.loginUser),
    mergeMap(action => this.authService.login(action.login, action.password)
      .pipe(
        tap(response => console.log(response)),
        map((response: LoginResponse) => UsersAction.loginUserSuccess(response)),
        catchError(error => of(UsersAction.loginUserFail())) // of(UsersAction.loginUserFail({ error }))
      ))
    )
  );

  loginUserSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(UsersAction.loginUserSuccess),
    tap(action => localStorage.setItem('authToken', action.token)),
    tap(() => this.router.navigate(['courses'])))
  );

  logout$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(UsersAction.logout),
    tap(() => this.authService.logout()),
    tap(() => this.router.navigate(['login']))
   )
  );
}
