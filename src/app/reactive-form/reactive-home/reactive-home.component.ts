import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
	selector: 'app-reactive-home',
	templateUrl: './reactive-home.component.html',
	styleUrls: ['./reactive-home.component.css'],
})
export class ReactiveHomeComponent implements OnInit {
	constructor(private router: Router, public authService: AuthService) {}

	emailId: any = "";
	ngOnInit(): void {
		this.emailId = localStorage.getItem("token")
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['/reactive-login']);
	}
}
