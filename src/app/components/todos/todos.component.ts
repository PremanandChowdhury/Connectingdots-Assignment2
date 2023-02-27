import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../_services/todos.services';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup
  taskList:any [] = []

  constructor(private todoService: TodoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
    this.todoService.getAll().subscribe((result: any) => {
      if(result) {
        this.taskList = result['todos']
        console.log(this.taskList);
        
      }
    })
  }

  buildForm() {
    this.todoForm = this.fb.group({
      'item-content': ['', Validators.required]
    })
  }

  // update(item: any, i: number) {
  //   const value = this.todoForm.value
  //   this.todoService.updateItem(item, i).subscribe((result: any) => {
  //     console.log('>> result', result);
      
  //   })
  // }

}
