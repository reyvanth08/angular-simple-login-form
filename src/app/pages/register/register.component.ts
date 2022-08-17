import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	registerForm: any = FormGroup;
	registerSuccess: boolean = false;
	formFailure: boolean = false;
	emailError: boolean = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
	}

	onSubmit() {
		if(this.registerForm.invalid) {
			console.log(this.registerForm.controls.email)
			if(this.registerForm.controls.email.invalid) {
				this.emailError = true;
			}
			this.registerSuccess = false;
			this.formFailure = true;
			return;
		} else {
			localStorage.setItem("firstName", this.registerForm.controls.firstName.value)
			localStorage.setItem("lastName", this.registerForm.controls.lastName.value)
			localStorage.setItem("email", this.registerForm.controls.email.value)
			localStorage.setItem("password", this.registerForm.controls.password.value)
			this.formFailure = false;
			this.emailError = false;
			this.registerSuccess = true;
			this.registerForm = this.formBuilder.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				email: ['', Validators.required],
				password: ['', Validators.required],
			});
		}
	}
}
