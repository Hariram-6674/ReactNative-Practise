import {ID,Account,Client} from 'appwrite';
import Snackbar from 'react-native-snackbar';
import Config from 'react-native-config';

const APPWRITE_ENDPOINT:string = Config.APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID:string = Config.APPWRITE_PROJECT_ID;

const appwriteClient = new Client();

type CreateUserAcc = {
    email:String;
    password:String;
    name:String;
}

type LoginUserAcc = {
    email:String;
    password:String;
}

class AppwriteService{
    account;
    constructor(){
        appwriteClient.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);
        this.account = new Account(appwriteClient);
    }
    async CreateAccount({email,password,name}:CreateUserAcc){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount){
                //TODO: create login feature
                return this.login({
                    email,password,
                });
            }
            else{
                return userAccount;
            }
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG,
            });
            console.log('Appwrite' + error);
        }
    }

    async login({email,password}:LoginUserAcc){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG,
            });
            console.log('Appwrite login' + error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log(error);
        }
    }
}

export default AppwriteService;
