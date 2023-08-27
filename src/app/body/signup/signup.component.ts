import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  
  checkBox:string[]=[]

  ngOnInit(): void {
  }

  signup(value:any){
    value.stack=this.checkBox
    console.log("value",value)
  }

  addCheckBox(event:any){
    if(event.checked==true){
      this.checkBox.push(event.value)
    }
    else{
      this.checkBox.filter((value,index)=>{
        if(value==event.value){
          this.checkBox.splice(index,1)
        }
      })
    }
  }

}
