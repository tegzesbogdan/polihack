import {Component, OnInit} from '@angular/core';
import {ITEMS} from "../shared/global-variables";
import {DialogExampleComponent} from "../components/dialog-example/dialog-example.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  searchText;
  items = ITEMS;
  matSliderValue = 2000;

  constructor(public dialog: MatDialog, public dialogExampleComponent: DialogExampleComponent) {
  }

  ngOnInit(): void {
  }

  sliderValue(event: any) {
    console.log(event.value);
  }

  onItemClick(name: String): void {
    console.log(name)
  }

  openDialog() {
    this.dialogExampleComponent.openDialog()
  }
}
