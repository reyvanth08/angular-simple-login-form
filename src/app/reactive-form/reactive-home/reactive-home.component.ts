import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactive-home',
  templateUrl: './reactive-home.component.html',
  styleUrls: ['./reactive-home.component.css']
})
export class ReactiveHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/reactive-login'])
  }

}
