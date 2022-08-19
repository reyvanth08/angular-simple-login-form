import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/login';
import { AuthService } from 'src/app/auth.service';
@Component({
	selector: 'app-reactive-login',
	templateUrl: './reactive-login.component.html',
	styleUrls: ['./reactive-login.component.css'],
})
export class ReactiveLoginComponent implements OnInit {
	loginForm: any = FormGroup;
	message: string = '';
	model: LoginModel = {
		email: 'admin@gmail.com',
		password: 'admin@123',
	};

	url: string = "";

	constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
		this.url = "/reactive-home";
		this.authService.logout();
	}

	onSubmit() {
		console.log(this.loginForm);
		let data = this.loginForm.controls;
		if (this.loginForm.invalid) {
			this.message = 'Please fill the form properly';
			return;
		} else {
			if (data.email.value == this.model.email && data.password.value == this.model.password) {
				this.message = "";
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('token', data.email.value);
				this.router.navigate([this.url])
			} else {
				this.message = 'Please check your email and password';
			}
		}
	}
}
