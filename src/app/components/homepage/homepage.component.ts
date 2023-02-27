import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from 'src/app/_services/upload.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  uploadForm: FormGroup
  fileSelected: any;
  constructor( private fb: FormBuilder, private uploadService:  UploadService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.uploadForm = this.fb.group({
      file: ['', Validators.required]
    })
  }

  selectedFile(event) {
    console.log('>> targeted file', event.target.files[0])
    this.fileSelected = event.target.files[0];
  }

  uploadFile() {
    console.log('>> file ', this.uploadForm);
    
    this.uploadService.upload(this.fileSelected).subscribe((result: any) => {
      if(result) {
        console.log(result)
      }
    })
  }
}
