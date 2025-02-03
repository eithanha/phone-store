import { Component, inject, OnInit } from '@angular/core';
import { PhoneCardComponent } from '../phone-card/phone-card.component';
import { NgFor } from '@angular/common';
import { PhoneDbService } from '../../services/phone-db';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-phones',
  imports: [PhoneCardComponent, NgFor],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.css',
})
export class PhonesComponent {
  private _phoneService = inject(PhoneDbService);

  public phones: Phone[] = [] as Phone[];

  ngOnInit(): void {
    this._phoneService.getPhones().subscribe((phoneData: Phone[]) => {
      this.phones = phoneData;
    });
  }
}
