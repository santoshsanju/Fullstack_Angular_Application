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
  status:any
  ngOnInit(): void {
    this.userService.usernamebh.subscribe(value=>{
      this.username=value
    })
    this.userService.statusbh.subscribe(value=>{
      this.status=value
    })
  }
  
  logout(){
    this.userService.statusbh.next(false)
    this.userService.usernamebh.next('')
  }

}
