import {
  Component,

} from '@angular/core';
import { NgForm } from '@angular/forms';

import {animate, AnimationEvent, state, style, transition, keyframes, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        style({ transform: 'translateX(300px)' }),
        animate(
          200,
          keyframes([
            style({ transform: 'translateX(300px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ]),
      transition('*=>void', [
        style({ transform: 'translateX(0px)' }),
        animate(
          100,
          keyframes([
            style({ transform: 'translateX(0px)' }),
            style({ transform: 'translateX(300px)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Anggun App';
  todoArray: any = [];
  todo: any;

  addTodo(value: any) {
    if (value == '') {
      alert('input text');
    } else {
      this.todoArray.push(value);
    }
  }

  deleteItem(todo: any) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  todoSubmit(value:any){

    console.log(value);

    if(value.todo == '' || value.todo == null){
      alert('Field required **')
    }else{
      this.addTodo(value.todo)
    }
  }



}
