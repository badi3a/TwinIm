
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/core/models/announcement';




@Injectable()
export class AnnoucementService {


  urlApi: string ="http://localhost:3000/announcement";

  constructor(private http:HttpClient) { }

  //ce service est utilisé pour la cnx avce le backend 
  //affichage , supprimer , search , getby id ...



  getallannouncement() : Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.urlApi)
  }

  addannouncement(object: Announcement) : Observable<Announcement[]>
  {
    return this.http.post<Announcement[]>(this.urlApi ,object)
  }

}
