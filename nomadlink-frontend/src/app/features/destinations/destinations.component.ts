import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ApolloClient, gql } from '@apollo/client/core';

@Component({
  selector: 'app-destinations',
  imports: [CommonModule],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {
  private apollo = inject(ApolloClient);
  destinations = signal<any[]>([]);

  ngOnInit() {
    this.apollo
      .query({
        query: gql`
        query{
        allDestinations{
            id
            name
            country
            description
            image_url
          }
        }
      `,
      })
      .then((result: any) => 
        this.destinations.set(result.data.allDestinations))
      .catch((err) => console.error('GraphQl Error: ', err));
  }
}
