import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserserviceService) { }

  ngOnInit(): void {
  }


  Login(value:any){
    console.log("value",value)
    this.router.navigate([`/home/${value.username}`])
    this.userService.usernamebh.next(value.username)
  }
}
