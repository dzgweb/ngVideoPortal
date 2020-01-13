import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { of, Observable } from 'rxjs';
import { switchMap, mergeMap, map, catchError, tap } from 'rxjs/operators';

import { AuthService } from '../../services';
import { LoginResponse } from '../../models/loginResponse';
import * as UsersAction from './users.actions';
import { User } from '../../../users';

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
        catchError(error => of(UsersAction.loginUserFail()))
        // TODO: try to receive an error message from backend of(UsersAction.loginUserFail({ error }))
      ))
    )
  );

  loginUserSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(UsersAction.loginUserSuccess),
    tap(action => this.authService.storeAuthToken(action.token)),
    map(() => UsersAction.getUser()),
    tap(() => this.router.navigate(['courses'])),
  ));

  getUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(UsersAction.getUser),
    mergeMap(() => this.authService.getUser()
      .pipe(
        map((user: User) => UsersAction.setUser({ user })),
        catchError(error => of(UsersAction.setUserError({ error })))
      ))
    )
 );

  logout$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(UsersAction.logout),
    tap(() => this.authService.logout()),
    map(() => UsersAction.logoutSuccess()),
    tap(() => this.router.navigate(['login'])),
  ));
}
