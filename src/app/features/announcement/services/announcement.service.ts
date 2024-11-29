import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Announcement } from "../../../core/models/announcement";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  urlApi: string = "http://localhost:3000/announcements/";

  constructor(private http: HttpClient) { }

  // Get all announcements
  getAllAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.urlApi);
  }

  // Add new announcement
  addAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(this.urlApi, announcement);
  }

  // Get announcement by ID
  getAnnouncementById(id: number | string): Observable<Announcement> {
    return this.http.get<Announcement>(`${this.urlApi}${id}`);
  }

  // Delete announcement
  deleteAnnouncement(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}${id}`);
  }

  // Update announcement
  updateAnnouncement(id: number | string, announcement: Announcement): Observable<void> {
    return this.http.put<void>(`${this.urlApi}${id}`, announcement);
  }
}
