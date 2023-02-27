import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  
  constructor(private http: HttpClient) {}

  upload(file: File) {
    console.log('>> file from upload service', file);
    let FORM_DATA = new FormData()
    
    const UPLOAD_URL = `https://v2.convertapi.com/upload`
    let HEADERS = new HttpHeaders();
    HEADERS.set('Content-Type', null);
    HEADERS.set('Accept', "multipart/form-data");

    FORM_DATA.set('filename', file, file.name);    

    return this.http.post(UPLOAD_URL, FORM_DATA, {
      headers: HEADERS
    })
  }

}