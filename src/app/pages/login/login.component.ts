import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm: any = FormGroup;
	formFailure: boolean = false;
	submitted: boolean = false;
	emailError: boolean = false;

	constructor(private formBuilder: FormBuilder, private router: Router) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
		console.log(JSON.stringify(localStorage.getItem("email")))
		console.log(JSON.stringify(localStorage.getItem("password")))
	}

	onSubmit() {
		let data = this.loginForm.controls; 

		if(this.loginForm.invalid) {
			this.formFailure = true;
			if(data.email.invalid) {
				this.emailError = true;
			}
			console.log("login form is invalid")
			return;
		} else if(data.email.value == localStorage.getItem("email") && data.password.value == localStorage.getItem("password")){
			this.router.navigate(["/home"])
		} else {
			this.formFailure = true;
			console.log("login form is invalid")
		}
	}
}
