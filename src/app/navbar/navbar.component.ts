import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserserviceService) { }
  username:string=''
  ngOnInit(): void {
    this.userService.usernamebh.subscribe(value=>{
      this.username=value
    })
  }

}
