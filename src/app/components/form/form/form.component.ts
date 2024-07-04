import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../../model/animal/animal';
import { Person } from '../../../model/person/person';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  // form inputs
  e_usrFName_aName: string = "";
  e_usrLName_aRace: string = "";
  e_usr_aSex: string = "";
  e_usr_aBirthday: Date = new Date;
  e_usr_aPicture: string = "";
  e_usrEmail: string = "";
  e_usrPassword: string = "";
  e_usrMobilNumber: string = "";

  // New user object to send to create-user login
  newUser?: Person;
  // New kitten object to send to add to available kittens
  newKitten?: Animal;
  // EventEmitter to register user login
  @Output()
  newUserDataToEmit: EventEmitter<Person> = new EventEmitter();
  // EventEmitter to add new kitten login
  @Output()
  newKittenDataToEmit: EventEmitter<Animal> = new EventEmitter();

  // On submit, button color changes
  btnStyle!: string;
  @Input()
  isUser:boolean=true;

  // form labels
  l_usrFName_aName: string = (this.isUser ? "Prénom " : "Nom");
  l_usrLName_aRace: string = (this.isUser ? "Nom " : " Race");
  l_usr_aMSex: string = (this.isUser ? "Homme" : "Mâle");
  l_usr_aFSex: string = (this.isUser ? "Femme " : "Femelle");

  // form placeholder
  p_usrFName_aName: string = (this.isUser ? "notre prénom " : "son nom");
  p_usrLName_aRace: string = (this.isUser ? "notre nom " : "sa race");
  p_usr_aPicture: string = "un lien vers" + (this.isUser ? " votre photo " : " sa photo");

  p_usrEmail: string = "notre email";
  p_usrPassword: string = "notre mot de passe";
  p_usrMobilNumber: string = "notre numéro de téléphone";


  // Submit
  onSubmit(myForm: NgForm): void {

    console.log("DEBUG - Submit du formulaire ajoute de élément à la collection")
    console.log("DEBUG - Le bouton du formulaire change de couleur pour montrer que le formulaire est valide");

    if (this.isUser) {
      this.newUser = new Person(
        this.e_usrFName_aName,
        this.e_usrLName_aRace,
        this.e_usr_aSex,
        this.e_usr_aBirthday,
        this.e_usrEmail,
        this.e_usrPassword,
        this.e_usrMobilNumber,
        this.e_usr_aPicture,
      );

      this.newUserDataToEmit.emit(this.newUser);

    } else {
      this.newKitten = new Animal(
        this.e_usrFName_aName,
        this.e_usrLName_aRace,
        this.e_usr_aBirthday,
        this.e_usr_aPicture,
      );

      this.newKittenDataToEmit.emit(this.newKitten);
    }

    myForm.onReset()
  }


}
