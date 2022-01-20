import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './../../services/auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser=faUser;
  isLoggedIn:boolean;
  username:string;
  constructor(private authService: AuthService,private router: Router) {

   }
  ngOnInit(): void {
    console.log("refreshToken "+ this.authService.getRefreshToken() );
    console.log("dd",this.authService.loggedIn);
       this.authService.loggedIn.subscribe((data: boolean)=>this.isLoggedIn=data)
       this.authService.username.subscribe((data:string)=>this.username=data)
    // this.isLoggedIn=this.authService.isLoggedIn();
    this.isLoggedIn=this.authService.isLoggedIn();
    this.username=this.authService.getUserName();
    console.log(" Is the user logged in  true or false ->"+this.isLoggedIn);
    console.log(" username "+this.username);

  }
  goToUserProfile(){
    this.router.navigateByUrl('/user-profile/'+this.username)
  }
  logout(){
    this.authService.logout()
    this.isLoggedIn=false
    this.router.navigateByUrl('')

  }

}