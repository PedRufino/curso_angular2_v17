import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [NgClass, NgStyle ,FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Pedro Rufino";
  public age = 24;
  public isDisabled = true;
  public srcValue = "https://ionic.io/blog/wp-content/uploads/2023/12/angular-feature-image.png"

  // constructor(){
  //   setTimeout( () => {
  //     this.name = 'João e Maria'
  //   }, 1000);
  // }

  public condition = this.age > 1 ? "Teste" : "Teste2"

  public isTextDecoration = this.age >= 24 ? 'underline' : 'none'
  // public sum(val1: number, val2: number){
  //   return val1 + val2
  // }
  public sum(){
    return this.age++
  }
  public sub(){
    return this.age--
  }

  public onKeyDown(event: Event){
    return console.log(event)
  }

  public onMouseEvent(event: MouseEvent){
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    })
  }
}
