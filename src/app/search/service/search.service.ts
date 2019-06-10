import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecordApi } from '../record-api';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private _httpClient: HttpClient) {}

  getRecords(page: number, search: string): Observable<RecordApi> {
    // const href = 'https://api.github.com/search/issues';
    // const requestUrl =
    //     `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        
    const requestUrl = `http://localhost:8080/records/${page + 1}/${search}`;
    return this._httpClient.get<RecordApi>(requestUrl);
  }
}
