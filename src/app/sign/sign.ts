import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign',
  imports: [MatTabsModule, RouterLink],
  templateUrl: './sign.html',
  styleUrl: './sign.css',
})
export class Sign {
tabIndex = 0;

selectTab(index: number) {
  this.tabIndex = index;
}

}
