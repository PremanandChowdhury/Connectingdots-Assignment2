import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient ) {}

  // Get all todos
  getAll() {
    const URL = `https://dummyjson.com/todos`
    const HEADER_OPTIONS = {
      'Content-Type': 'application/json'
    }
    const HEADERS = new HttpHeaders(HEADER_OPTIONS)

    return this.http.get(
      URL,
      {
        headers: HEADERS
      }
    )
  }

  // Add a todo to the list
  addItem(value: any) {
    const URL = `https://dummyjson.com/todos/add`
    const HEADER_OPTIONS = {
      'Content-Type': 'application/json'
    }
    const HEADERS = new HttpHeaders(HEADER_OPTIONS)

    return this.http.post(
      URL,
      value,
      {
        headers: HEADERS
      }
    )
  }

  // Update a todo item in the list
  updateItem(value: any, id: number) {
    const URL = `https://dummyjson.com/todos/${id}`
    const HEADER_OPTIONS = {
      'Content-Type': 'application/json'
    }
    const HEADERS = new HttpHeaders(HEADER_OPTIONS)

    return this.http.put(
      URL,
      value,
      {
        headers: HEADERS
      }
    )
  }

  // Delete a todo item in the list
  deleteItem(id: number) {
    const URL = `https://dummyjson.com/todos/${id}`
    const HEADER_OPTIONS = {
      'Content-Type': 'application/json'
    }
    const HEADERS = new HttpHeaders(HEADER_OPTIONS)

    return this.http.delete(
      URL,
      {
        headers: HEADERS
      }
    )
  }
}