import { Component } from '@angular/core';
import { Auth } from '../../../shared/models/auth';
import { NgxsModule, Store } from '@ngxs/store';
import { inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthState } from '../../../shared/states/auth-state';
import { AuthConnection } from '../../../shared/actions/auth-action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    NgxsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
})

export class LoginComponent {
  private store = inject(Store);

  connection: Signal<Boolean> = toSignal(
    this.store.select(AuthState.isConnected),
    {
      initialValue: false,
    }
  );

  login() {
    const auth: Auth = { connection: true };
    this.store.dispatch(new AuthConnection(auth));
  }
}
