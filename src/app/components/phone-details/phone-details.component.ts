import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneDbService } from '../../services/phone-db';
import { Phone } from '../../models/phone';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-phone-details',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css',
})
export class PhoneDetailsComponent implements OnInit {
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);
  private _phoneService = inject(PhoneDbService);

  public phone$: Observable<Phone | null> = of(null);

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone() {
    const phoneId = this._route.snapshot.paramMap.get('phoneId');

    if (phoneId) {
      this.phone$ = this._phoneService.getPhone(phoneId);
    }
  }

  onEdit(phone: Phone) {
    this._router.navigate(['/edit', phone.id]);
  }
}
