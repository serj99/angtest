import { Injectable } from '@angular/core';

/*
@Injectable({
  providedIn: 'root'
})
*/

@Injectable()
export class UserpreferencesService {
  color: string = 'yellow';

  constructor() {
    console.log("UserpreferencesService instance created");
 }
}
