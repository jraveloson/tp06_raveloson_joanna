import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthStateModel } from './auth-state-model';
import { AuthConnection, AuthDeconnection } from '../actions/auth-action';

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        auth: undefined,
    },
})
@Injectable()
export class AuthState {

    @Selector()
    static isConnected(state: AuthStateModel) {
        return state.auth !== null && state.auth !== undefined;
    }

    @Selector()
    static getConnectedUser(state: AuthStateModel) {
        return state.auth;
    }

    @Action(AuthConnection)
    connect(
        { getState, patchState }: StateContext<AuthStateModel>,
        { payload }: AuthConnection
    ) {
        patchState({
            auth: payload
        });
    }

    @Action(AuthDeconnection)
    deconnect(
        { getState, patchState }: StateContext<AuthStateModel>,
        { }: AuthDeconnection
    ) {
        patchState({
            auth: undefined
        });
    }
}