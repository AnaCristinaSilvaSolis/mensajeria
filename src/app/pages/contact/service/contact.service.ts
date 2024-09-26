import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../shared/constants/enpoints.constants';
import { Observable } from 'rxjs';
import { Contacts } from '../interface/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContact(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(`${ENDPOINTS.api}/users`);
  }
}
