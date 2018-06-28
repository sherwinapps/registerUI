import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UserRegister } from './user';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerURL ='http://localhost:3003/api/register/adduser';

    constructor(
     
    private http: HttpClient,
    private messageService: MessageService) { 

      console.log('Register Service started ...'); 
    }

  /** GET Users from the server */
//  getUsers (): Observable<User[]> {
//    return this.http.get<User[]>(this.registerURL)
//      .pipe(
//        tap(register => this.log(`fetched users`)),
//        catchError(this.handleError('getUsers', []))
//      );
//  }

  /** POST: add a new user to the server */
  
  addUser (user: UserRegister): Observable<UserRegister> {
    return this.http.post<UserRegister>(this.registerURL, user, httpOptions)
//    .pipe(
//      tap((user: UserRegister) => this.log(`added username =${user.username}`)),
//      catchError(this.handleError<UserRegister>('addUser'))
//    );
  }


/*
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
*/
  /** Log a HeroService message with the MessageService */
/*
  private log(message: string) {
    this.messageService.add('RegisterService: ' + message);
  }
*/
}

