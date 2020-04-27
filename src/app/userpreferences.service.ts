import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserpreferencesService {
  color: string = 'yellow';

  constructor() {
    console.log("UserpreferencesService instance created");
 }
}
