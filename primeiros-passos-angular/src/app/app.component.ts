import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao_entre_components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // NewComponentComponent, 
    // TemplateBindingComponent, 
    // TemplateVariablesComponent,
    // TemplateControlFlowComponent,
    // TemplateDeferrableViewsComponent,
    // SignalsComponent,
    // PaiOuMaeComponent
    AngularPipesComponent
  ],
  template: `
    <!-- <router-outlet /> -->
    <!-- <app-new-component/> -->
    <!-- <app-template-binding/> -->
    <!-- <app-template-variables/> -->
    <!-- <app-template-control-flow/> -->
    <!-- <app-template-deferrable-views/> -->
    <!-- <app-signals/> -->
    <!-- <app-pai-ou-mae/> -->
    <h1>Curso de Angular</h1>
    <app-angular-pipes/>
  `,
})
export class AppComponent {
  title = 'primeiros-passos-angular';
}