import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/internal/operators/finalize';
import { BootstrapService } from '../../../../../app/services/bootstrap/bootstrap.service';
import { Extender } from '../../../../../common/helpers/extender';
import { Contact, ContactApi } from '../../../../../common/sdk';
import { environment } from '../../../../../environments/environment';
import { DialogConfig } from '../../../../../modules/dialog/helpers/dialog-config';
import { DialogRef } from '../../../../../modules/dialog/helpers/dialog-ref';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent extends Extender implements OnInit {

  public modalSize: string = 'lg';
  public titles: string[] = ['Mr', 'Miss', 'Mrs', 'Dr', 'Sgt'];
  public contact: Contact = new Contact();
  public profileImage: { url: any; show: boolean } = null;
  private imgUrl = `${environment.server.BASE_URL}/${environment.server.API_VERSION}/Containers/container`;
  @ViewChild('form') public form: NgForm;
  public file: File;

  constructor(
    protected injector: Injector,
    private _http: HttpClient,
    private _dialogRef: DialogRef,
    private _dialogConfig: DialogConfig,
    public _contactApi: ContactApi,
    private _bootService: BootstrapService
  ) {
    super(injector);
  }

  public ngOnInit() {
    this.contact = this._dialogConfig.data;
    this.profileImage = { url: this.contact.picture, show: false };
  }

  public addImage(event): void {
    this.file = event.target.files[0];
    this.createFileUrl(this.file);
  }

  public createFileUrl(file: File) {
    const reader: FileReader = new FileReader();
    reader.addEventListener('load', () => {
      if (this.contact !== null && this.contact !== undefined) {
        this.profileImage = { url: reader.result, show: false };
      }
    });
    reader.readAsDataURL(file);
  }

  public deleteFile(file) {
    if (/data:image\/([a-zA-Z]*);base64,([^\"]*)/.test(file.url)) {
      this.profileImage = { url: null, show: false };
    } else {
      this._http.delete(`${file.url.replace('download', 'files')}`).subscribe(() => {
        this.profileImage = { url: null, show: false };
      });
    }
  }

  public closeModal(): void {
    this._dialogRef.close();
  }

  public save(): void {
    this.loading = true;
    const formData: FormData = new FormData();
    const uploadUrl = `${this.imgUrl}/upload`;

    if (this.form.valid) {
      if (this.file) {
        this._uploadImages(formData, this.imgUrl, uploadUrl).subscribe(() => {
          this.loading = true;
          this.upsertContact();
        });
      } else {
        this.upsertContact();
      }
    }
  }

  private upsertContact() {
    this._contactApi.upsert(this.contact)
      .subscribe((_data: Contact) => {
        this.loading = false;
        this._bootService.autoLogin();
        this.form.resetForm();
        this.closeModal();
        this.file = null;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error(error.message);
      });
  }

  private _uploadImages(formData: FormData, url: string, uploadUrl: string) {

    formData.append('uploads', this.file, this.file.name);

    this.contact.picture = `${url}/download/${this.file.name}`;
    return this._http.post(uploadUrl, formData)
      .pipe(finalize(() => this.loading = false));

  }

}
