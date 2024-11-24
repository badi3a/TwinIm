import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "../../../core/models/announcement";
import {Observable} from "rxjs";

@Injectable()
export class AnnouncementService {
   urlApi: string= "http://localhost:3000/announcements/";
  constructor(private http:HttpClient) { }
  ///CNX Backend Side
  //getAnnouncement
  getAllAnnouncements():Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.urlApi)
  }
  //addAnnouncement
  addAnnouncement(objet:Announcement):Observable<Announcement>{
    return this.http.post<Announcement>(this.urlApi,objet)
  }

  //getAnnouncementbyID
  getAnnouncementbyID(id:any):Observable<Announcement>{
    return this.http.get<Announcement>(`${this.urlApi}${id}`)
  }
 //delete
 deleteAnnouncement(id: number): Observable<void> {
  return this.http.delete<void>(`${this.urlApi}${id}`);
}
updateAnnouncement(id: number, updatedAnnouncement: Announcement): Observable<Announcement> {
  return this.http.put<Announcement>(`${this.urlApi}${id}`, updatedAnnouncement);
}

  //search
  //getbyId
  //update

  // getAllAnnou(){

  // }
}
