import { Auth } from '../models/auth';

export class AuthConnection {
    static readonly type = '[Auth] Connection';

    constructor(public payload: Auth) { }
}

export class AuthDeconnection {
    static readonly type = '[Auth] Deconnection';

    constructor() { }
}
