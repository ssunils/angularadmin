import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-elements',
  templateUrl: './ui-elements.component.html',
  styleUrls: ['./ui-elements.component.scss']
})
export class UiElementsComponent implements OnInit {
  public totalItems = 64;
  public currentPage = 4;
  public smallnumPages = 0;
  public alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
