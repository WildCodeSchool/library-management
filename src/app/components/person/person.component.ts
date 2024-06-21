import { Component, Input } from '@angular/core';
import { Kitten } from '../../model/kitten/kitten';
import { KittenComponent } from '../kitten/kitten.component';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [KittenComponent],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {

  // List to welcome adopted kitten by user.
  @Input()
  userAdoptedKittenList!: Kitten[];

  // temporary kitten for verication
  @Input()
  kittenFromKittenList!: Kitten;

}
