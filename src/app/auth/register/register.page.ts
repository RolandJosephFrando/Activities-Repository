import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor( 
  	private _ds: DataService,
    private _user: UserService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }


  Register(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    console.log(e.target[4].value);
    
 
    
  //let gender    = e.target[2].value;
    //let birthday  = e.target[3].value;
    //let address   = e.target[4].value;
     //let mobileno  = e.target[7].value;

    let fname     = e.target[0].value;
    let lname     = e.target[1].value;
    let username  = e.target[2].value;
    let email     = e.target[3].value;
    let password  = e.target[4].value;
    
    this._ds.processData('register', { fname, lname,username, email, password }).subscribe((res: any)=>{
  
    
    this._router.navigate(['login']);
      
    });

    Swal.fire({
        icon : 'success',
        title: 'Register!',
        confirmButtonText: 'Continue'
      });


  }
  
}
