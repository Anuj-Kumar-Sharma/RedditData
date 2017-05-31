import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service'
import { Reddit } from '../reddit/reddit'
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, public redditService: RedditService, private statusBar: StatusBar) {
    this.showDefaults();
  }

  ngOnInit() {
    this.loadData(this.category, this.limit);
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#f53d3d');
  }

  showDefaults() {
    this.category = "funny";
    this.limit = 10;
  }

  loadData(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    })
  }

  showItemData(item) {
    this.navCtrl.push(Reddit, {
      item: item
    })
  }

  changeCategory() {
    this.loadData(this.category, this.limit);
  }

}

