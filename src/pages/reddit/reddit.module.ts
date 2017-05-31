import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reddit } from './reddit';

@NgModule({
  declarations: [
    Reddit,
  ],
  imports: [
    IonicPageModule.forChild(Reddit),
  ],
  exports: [
    Reddit
  ]
})
export class RedditModule {}
