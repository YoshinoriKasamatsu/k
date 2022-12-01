import { Component, ViewRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent  {

  selectedTab: "list" | "grid" = "list";

  onValueChange(viewType: string) {
    this.selectedTab = viewType === "list" ? "list" : "grid";
  }

}
