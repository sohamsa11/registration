import { Component, NgModule, OnInit, ViewChild} from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formData: any = {};
  allUsers:any ;
  constructor(private registrationService: RegistrationService, private router: Router) {}
  @ViewChild('registrationForm') registrationForm!: NgForm;


  onSubmit() {
    if (!this.registrationForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please complete the form!'
      });
    } else {
      this.registrationService.registerUser(this.formData)
      .subscribe(response => console.log('Registration successful!', response),
        error => console.error('Error occurred during registration!', error)
      );
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Form submitted successfully!'
      });
    }
  
  }

  ngOnInit(): void {
    this.registrationService.getUsers().subscribe(data =>{
      console.log(data)
      this.allUsers = data;

    })
  }

  // navigateToUserComponent(userID): void {
  //   this.router.navigate(['/app-update-user', id]); // Navigate to the new component
  // }


}
