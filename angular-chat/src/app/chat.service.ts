import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Channels } from './channels';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(`${environment.backUrl}/channels`)
  }
}
