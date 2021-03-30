import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://localhost/csa-api/";
  
  public shareData : string = '';
  public shareName : string = '';
  constructor(private http: HttpClient ) { 
    console.log('Data service is working') ;
    this.shareData ="datafromservices";
    
    
  }


  setData(data){
  this.shareData = data;
  }

  getData(){
  	return this.shareData;
  }

  setName(data){
    this.shareName = data;
    }
  
    getName(){
      return this.shareName;
    }
  

  processData(endpoint, data) {
    return this.http.post(this.url + endpoint, JSON.stringify(data));
  }
}

 

