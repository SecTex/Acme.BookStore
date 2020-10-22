import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ApplicationConfiguration, ConfigState, AuthService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @Select(ConfigState.getOne('currentUser'))
  currentUser$: Observable<ApplicationConfiguration.CurrentUser>;

  constructor(private async: AsyncPipe) {}

  ngOnInit(): void {
    const user = this.async.transform(this.currentUser$);
    window.console.log(user);
  }
}
