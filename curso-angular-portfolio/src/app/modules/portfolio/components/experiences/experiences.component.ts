import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Análista de Integração Junior",
        p: "Napp Solutions | Dez 2022 - Presente"
      },
      text: "<p>Na NAPP, minha atuação como Analista de Integração Júnior envolve aprimorar processos de ETL, utilizando conhecimentos avançados em Python para criar automação de dados e fornecer insights para shopping centers. </p>",
    }
  ])
}
