import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AccountOperationBusiness } from './account-operation.business';
import { AccountOperationDisplay } from './account-operation.model';

@Component({
  selector: 'app-account-operation',
  templateUrl: './account-operation.component.html',
  styleUrls: ['./account-operation.component.less'],
  providers: [AccountOperationBusiness],
})
export class AccountOperationComponent implements OnInit, OnDestroy {
  @Input() heart: boolean = false;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private business: AccountOperationBusiness
  ) {}
  userName?: string;
  display = new AccountOperationDisplay();
  key = 'app-account-operation';

  ngOnInit(): void {
    if (this.heart) {
      this.business.heart();
    }
    this.userName = this.business.load().LastName;
  }

  ngOnDestroy(): void {}
  onlogout() {
    this.business.clear();
    this.cookie.deleteAll('/');
    this.router.navigateByUrl('/login');
  }
  onhelp() {
    window.open(`/help/help.html`);
  }
}
