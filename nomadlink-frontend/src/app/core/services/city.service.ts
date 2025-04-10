import { Injectable, inject } from '@angular/core';
import { ApolloClient, gql } from '@apollo/client/core';

@Injectable({ providedIn: 'root' })
export class CityService {
  private readonly apollo = inject(ApolloClient);

  getCities() {
    return this.apollo.query({
      query: gql`
        query {
          cities {
            id
            name
            country
            internetSpeed
            costOfLiving
            image
          }
        }
      `,
    });
  }
}
