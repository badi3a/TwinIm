import { Injectable } from '@angular/core';
import {Announcement} from "../../core/models/announcement";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  list:Announcement[]=[];
  constructor() { }
}
