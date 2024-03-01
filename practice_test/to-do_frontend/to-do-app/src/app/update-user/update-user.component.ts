import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userData: any = {};
  userId :any;

  constructor(private userService: UserService, private route: ActivatedRoute,private registrationService : RegistrationService) {}
  ngOnInit(){

    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', this.userId);

    this.registrationService.getUsersbyId(this.userId).subscribe(data =>{
      console.log(data)
      this.userData = data;
      
    })
  }
  onSubmit() {
    this.userService.updateUser(this.userId, this.userData)
      .subscribe(
        response => console.log('User updated successfully!', response),
        error => console.error('Error occurred while updating user!', error)
      );
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId)
      .subscribe(
        response => console.log('User deleted successfully!', response),
        error => console.error('Error occurred while deleting user!', error)
      );
  }
}
