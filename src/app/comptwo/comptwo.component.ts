import { Component, OnInit } from '@angular/core';
import { UserpreferencesService } from '../userpreferences.service';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent implements OnInit {

  constructor(private UserPreferences: UserpreferencesService) {

    //if first I go to Compone component and afterwards I move to this component
    //color should be green
    console.log(this.UserPreferences.color);
 }

  ngOnInit() {
  }


}
