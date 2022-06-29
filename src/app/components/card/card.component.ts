import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  posts = {}

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getPokemon().subscribe(
      response => {
        console.log("Eiiiiii", response)
        this.posts = response;
      }
    );
  }

}
