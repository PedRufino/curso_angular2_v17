import { NewComponentComponent } from './../../new-component/new-component.component';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  imports: [NewComponentComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') public nameInput!: ElementRef
  @ViewChild('h2') public nameH2!: ElementRef

  @ViewChild(NewComponentComponent) public childComponent!: NewComponentComponent
  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value)
    console.log(this.nameH2.nativeElement.innerText)
    console.log(this.childComponent.name)
  }
}
