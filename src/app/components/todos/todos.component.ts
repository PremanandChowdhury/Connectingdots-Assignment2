import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../_services/todos.services';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  taskList: any[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAllTodos()
  }

  getAllTodos() {
    this.taskList = []
    this.todoService.getAll().subscribe((result: any) => {
      if (result) {
        this.taskList = result['todos']
      }
    })
  }
  updateItem(item: any, i: number) {
    console.log('Id ', i + 1, 'form value ', item)
    const value = {
      "completed": !item['completed']
    }

    this.todoService.updateItem(value, i + 1).subscribe((result: any) => {
      if (result) {
        alert('Updated Successfully')
      }

    })
  }

  removeItem(i: number) {
    this.taskList.splice(i, 1)
    console.log(this.taskList);
    
    this.todoService.deleteItem(i+1).subscribe((result: any) => {
      if (result) {
        alert('Deletion Completed')
      }
    })
  }

}
