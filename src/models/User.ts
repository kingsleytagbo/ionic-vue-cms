class User{
    public id :number;
    public user_login : string;
    public user_email:string;
    public display_name:string;
    public user_status :number;
    public user_registered : string;
    public user_url : string;
    public user_activation_key : string;
    public spam : number;
    public deleted : number;
    public site_id : number;
    public user_nicename:string;
    public  user_pass:string;

    constructor(username: string, password:string){
        this.user_nicename = username;
        this.user_pass = password;
    }
}

export default User;