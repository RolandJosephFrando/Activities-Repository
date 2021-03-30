import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { ActionSheetController } from '@ionic/angular';
import Swal from 'sweetalert2';
//import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  Username_to_add = '';

  constructor(
    private _ds: DataService,
    private _user: UserService,
    private _router: Router,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit(): void {
  
  
    if(this._user.isLoggedIn()){
      this._router.navigate(['register']);
    }

  }

  Login(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    let param1 = e.target[0].value;
    let param2 = e.target[1].value;
    this._ds.setData(param1);
    
  
    this._ds.processData('login', { param1, param2 }).subscribe((res: any)=>{
  

     
  

      this._user.setLoggedIn();      this._router.navigate(['home']);
      
     });
     Swal.fire({
      icon : 'success',
      title: 'Successfuly log in!',
      confirmButtonText: 'Continue'
    });
  
      }


  







}
