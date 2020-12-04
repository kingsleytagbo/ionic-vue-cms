export default class Authentication{
    public user_nicename:string;
    public loggedin:boolean;

    constructor(username: string, authentication:boolean){
        this.user_nicename = username;
        this.loggedin = authentication;
    }
}

