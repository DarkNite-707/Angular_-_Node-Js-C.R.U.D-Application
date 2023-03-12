import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FruitServiceService} from '../fruit-service.service';

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

@Component({
  selector: 'app-fruit-display',
  templateUrl: './fruit-display.component.html',
  styleUrls: ['./fruit-display.component.css']
})
export class FruitDisplayComponent implements OnInit {

  fruits:{_id:string, id:string, name:string, __v:string}[] = [];

  constructor(public fruitservice: FruitServiceService) { }

  private fruitsubscription!: Subscription;

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

  ngOnInit() {
    this.fruitservice.getfruit_service();
    this.fruitsubscription = this.fruitservice.getUpdateListener()
    .subscribe((fruits:{_id:string, id:string, name:string, __v:string}[])=> {
      this.fruits = fruits;
    })

  }

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
  ngOnDestroy()
  {
    this.fruitsubscription.unsubscribe()
  }

  ondelete(fruitid: string){
    this.fruitservice.deletefruit_service(fruitid)
  }

}
