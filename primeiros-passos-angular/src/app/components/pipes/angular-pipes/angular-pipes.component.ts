import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';

@Component({
  selector: 'app-angular-pipes',
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    // Pipi customizado
    CustomStringPipe
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers: [{
    provide: LOCALE_ID, useValue: 'pt-BR'
  }]
})
export class AngularPipesComponent {
  public date = signal(new Date());
  public json = signal([{name: 'Jhon Cena'}])

  public loadingData$: Observable<string[]> = of([
    'Item 1',
    'Item 2',
    'Item 3',
  ]).pipe(delay(1000))
}
