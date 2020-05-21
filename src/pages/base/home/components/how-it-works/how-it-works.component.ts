import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  public items: any[] = [
    'Escolha um sorteio que você deseja participar',
    'Escolha quantos números você gostaria no sorteio',
    "Não vê seu número, tente o botão Seleção aleatória",
    "Revisão e pagamento completo",
    'Sente-se e aguarde o sorteio terminar. Nosso sistema de identificará automaticamente o vencedor e o notificará se você ganhou ou não. '
  ];
  constructor() { }

  public ngOnInit() {
  }

}
