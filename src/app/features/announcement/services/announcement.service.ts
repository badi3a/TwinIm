import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "../../../core/models/announcement";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

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
  addAnnouncement(announcement: Announcement):Observable<Announcement>{
    return this.http.post<Announcement>(this.urlApi,announcement)
  }
  //delete
  // delete
deleteAnnouncement(id: number): Observable<void> {
  return this.http.delete<void>(`${this.urlApi}${id}`);
}

  //search
  //getbyId
  getAnnouncementById(id: number): Observable<Announcement> {
    return this.http.get<Announcement>(`${this.urlApi}${id}`);
  }
  //update
updateAnnouncement(id: number, updatedAnnouncement: Announcement): Observable<Announcement> {
  return this.http.put<Announcement>(`${this.urlApi}${id}`, updatedAnnouncement);
}
//search
searchAnnouncements(query: string): Observable<Announcement[]> {
  console.log('Service searching for:', query);
  // Using json-server's built-in search functionality
  return this.getAllAnnouncements().pipe(
    map(announcements => 
      announcements.filter(announcement => 
        announcement.title.toLowerCase().includes(query.toLowerCase())
      )
    )
  );
}

  getAllAnnou(){

  }
}
