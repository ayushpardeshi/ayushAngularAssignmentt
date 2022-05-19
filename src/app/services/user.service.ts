import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http : HttpClient) { };
  user(){
    return this.http.get(this.url);
   }
 
  users() :Observable<IUser[]>{
     return this.http.get<IUser[]>("/assets/user.json");
   }
  // saveEmployee(data : any){
  // //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}) };
  // //   data=  JSON.stringify(data)
  //   return this.http.post("http://localhost:9090/addEmployee", data);
  // }
  //  employees1() :Observable<IEmployee1[]>{
  //    return this.http.get<IEmployee1[]>("http://localhost:9090/getAllEmployee");
  //  }
}