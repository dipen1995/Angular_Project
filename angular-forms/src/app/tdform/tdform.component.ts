import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {
  msg:string;
  constructor() { }

  ngOnInit(): void {
  }
  checkLogin(userobj): void{
    console.log(userobj);
    if(userobj.uname=="Dipen" && userobj.pname=="patel"){
      this.msg ="SuccessFully Login";
    }else{
      this.msg="Failed"
    }
  }

}
