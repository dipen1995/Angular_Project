import { Component, OnInit } from '@angular/core';
import { FakeService1 } from '../fake.service1';
import {Fake, FakeService2 } from '../fake.Service2';

@Component({
  selector: 'app-fake-api',
  templateUrl: './fake-api.component.html',
  styleUrls: ['./fake-api.component.css']
})
export class FakeApiComponent implements OnInit {

  msg1:string;
  msg2: String;

  fakeObject:Fake[]; //created array object to load the data
  //it pull object or DI
  constructor(private fakeSer2: FakeService2) { }

  ngOnInit(): void {
    this.fakeSer2.loadData().subscribe(data=>this.fakeObject=data); //Data store in fakeObject
  }
  
  fun1() :void{
    let ff1 = new FakeService1();
    this.msg1 = ff1.sayHello();
  }

  fun2(): void{
    this.msg2=this.fakeSer2.sayHello();
  }

}
