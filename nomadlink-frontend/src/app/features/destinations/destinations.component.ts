import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  imports: [CommonModule],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {
  cities = [
    {
      name: 'Lisbon',
      country: 'Portugal',
      internet: '100 Mbps',
      cost: 'Medium',
      img: 'https://images.pexels.com/photos/2604056/pexels-photo-2604056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250',
    },
    {
      name: 'Chiang Mai',
      country: 'Thailand',
      internet: '80 Mbps',
      cost: 'Low',
      img: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250',
    },
    {
      name: 'Tbilisi',
      country: 'Georgia',
      internet: '60 Mbps',
      cost: 'Low',
      img: 'https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250',
    },
  ];
}
