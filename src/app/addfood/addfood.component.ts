import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTable} from "@angular/material/table";
import {ITEMS} from "../shared/global-variables";

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.sass']
})
export class AddfoodComponent implements OnInit {
  items = ITEMS;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(data) {
    this.items.push({
      food: data.name,
      restaurant: data.restaurant,
      quantity: data.quantity,
      distance: data.distance,
      category: data.category,
      hour: data.hour,
      price: data.price,
      foodUrl: data.foodUrl,
      logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'
    })
  }


  updateRowData(data) {
    this.items = this.items.filter((item) => {
      if (item.food == data.name) {
        item.food = data.name;
      }
      return true;
    });
  }

  deleteRowData(data) {
    this.items = this.items.filter((item) => {
      return item.food != data.name;
    });
  }

}
