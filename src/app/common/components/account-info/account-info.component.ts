import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.less'],
})
export class AccountInfoComponent implements OnInit {
  @Input() desc: string = '管理系统';
  @Input() title: string = '智能展示屏';

  constructor() {}

  ngOnInit(): void {}
}
