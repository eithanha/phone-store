import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneDbService } from '../../services/phone-db';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-phone-details',
  imports: [NgIf],
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css',
})
export class PhoneDetailsComponent implements OnInit {
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);
  private _phoneService = inject(PhoneDbService);

  public phone: Phone | null = null;

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone() {
    const phoneId = this._route.snapshot.paramMap.get('phoneId');

    if (phoneId) {
      this._phoneService.getPhone(phoneId).subscribe((phoneData) => {
        this.phone = phoneData;
      });
    }
  }

  onEdit() {
    if (this.phone) {
      this._router.navigate(['/edit', this.phone.id]);
    }
  }
}
