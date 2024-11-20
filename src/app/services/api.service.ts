import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainings } from '../model/trainings.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTrainings(){
    return this.http.get<Trainings[]>(environment.host+ "/trainings");
  }
  public getTraining(id: number){
    return this.http.get<Trainings[]>(environment.host+ "/trainings/" + id);
  }
}
