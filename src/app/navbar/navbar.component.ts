import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
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
  @Input() getMessage:string=''

  sendMessage:string='done'
  @Output() myEvent=new EventEmitter()
  send(){
    this.myEvent.emit(this.sendMessage)
  }
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
