import { Component, inject, OnInit } from '@angular/core';
import { PhoneCardComponent } from '../phone-card/phone-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { PhoneDbService } from '../../services/phone-db';
import { Phone } from '../../models/phone';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-phones',
  imports: [PhoneCardComponent, NgFor, AsyncPipe],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.css',
})
export class PhonesComponent {
  private _phoneService = inject(PhoneDbService);

  public phones$: Observable<Phone[]> = this._phoneService
    .loadDb()
    .pipe(map((phoneDb) => Object.values(phoneDb as Record<string, Phone>)));
}
