import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { firstValueFrom } from 'rxjs';
import { ChangeModel } from '../models/change.model';

@Injectable({
    providedIn: 'root'
})
export class ChangeService {

    constructor(private http: HttpClient) { }

    public async getAllChange() {
        const observable = this.http.get<ChangeModel[]>(appConfig.changeUrl);
        const change = await firstValueFrom(observable);
        return change;
    }

// without image
    // public async addChange(change:ChangeModel) {
    //     const observable = this.http.post<ChangeModel>(appConfig.changeUrl,change);
    //     const addedChange = await firstValueFrom(observable);
    //     return addedChange;
    // }


    // with image
 public async addChange(change:ChangeModel){
    const myFormData = new FormData()
  
    myFormData.append("name",change.name)
  
    const observable = this.http.post<ChangeModel>(appConfig.changeUrl ,myFormData);
   const addedChange =  await firstValueFrom(observable);
    return addedChange
   } 

   
 public async updateChange(changeId:string,change:ChangeModel){
    const myFormData = new FormData()
  
    myFormData.append("_id",change._id)
  
    const observable = this.http.put<ChangeModel>(appConfig.changeUrl+changeId ,myFormData);
   const updateChange =  await firstValueFrom(observable);
    return updateChange
   }

   public async deleteChange(changeId:String){
    const observable = this.http.delete<void>(appConfig.changeUrl+changeId)
     await firstValueFrom(observable)
   }




}
