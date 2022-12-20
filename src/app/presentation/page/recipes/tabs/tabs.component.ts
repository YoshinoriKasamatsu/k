import { Component, ViewRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent  {

  selectedTab: "list" | "grid" | "svg" = "list";

  onValueChange(viewType: string) {
    if(viewType === "list"){
      this.selectedTab = "list"
      return;
    }
    if(viewType === "grid"){
      this.selectedTab = "grid"
      return;
    }
    this.selectedTab = "svg"
  }
}
