import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainings } from '../model/trainings.models';
import { environment } from 'src/environments/environment';
import { Training } from '../model/training.models';

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
 
  addTraining(data: Training){
    return this.http.post<Training>(environment.host + "/trainings", data);
  }
  deleteTraining(id: number){
    return this.http.delete<Training>(environment.host + "/trainings/"+ id)
  }
  fetchData(id: number){
    return this.http.get<Training>(environment.host + "/trainings/" +id)
  }
  //update Data
  upDateTraining(data: Training, id:number){

      return this.http.put<Training>(environment.host + "/trainings/" +id, data);
  }

  
}
