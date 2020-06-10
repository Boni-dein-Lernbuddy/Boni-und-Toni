import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkPreviewService {

  private apiKey = 'b85970baab41fdd621be3bc8d0f90206';
  private apiUrl = 'https://api.linkpreview.net'

  constructor(private http: HttpClient) { }

  public getLinkPreview(requestUrl: string): Observable<any> {
    const params = `?key=${this.apiKey}&q=${requestUrl}`
    return this.http.get(this.apiUrl.concat(params));
  }
}
