import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneDbService } from '../../services/phone-db';
import { Phone } from '../../models/phone';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-phone-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './phone-edit.component.html',
  styleUrl: './phone-edit.component.css',
})
export class PhoneEditComponent implements OnInit {
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
      this._phoneService.getPhone(phoneId).subscribe((phone) => {
        this.phone = phone ? { ...phone } : null;
      });
    }
  }

  saveEdit() {
    if (this.phone) {
      const success = this._phoneService.updatePhone(this.phone);
      if (success) {
        Swal.fire({
          title: 'Success!!',
          text: 'Update Successfully Saved',
          icon: 'success',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'blue',
        }).then(() => {
          this._router.navigate(['/phones']);
        });
      } else {
        Swal.fire('Error', 'Update Failed', 'error');
      }
    }
  }

  cancelEdit() {
    this._router.navigate(['/phones']);
  }
}
