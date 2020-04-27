import { Component, OnInit } from '@angular/core';
import { UserpreferencesService } from '../userpreferences.service';
@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.css']
})
export class ComponeComponent implements OnInit {
  constructor(private UserPreferences: UserpreferencesService) {
    console.log(this.UserPreferences.color);
    this.UserPreferences.color = 'green';
    console.log(this.UserPreferences.color);
  }
  ngOnInit() {
  }
}
