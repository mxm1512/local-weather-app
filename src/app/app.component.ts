import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
            <mat-toolbar color="primary">
              <span>LocalCast Weather</span>
            </mat-toolbar>
            <div fxLayoutAlign="center">
              <div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
            </div>
            <div fxLayout="row">
              <div fxFlex></div>
              <div fxFlex="300px">
                <mat-card>
                  <mat-card-header class="mat-typography"  fxLayoutAlign="center">
                    <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <app-current-weather ></app-current-weather>
                  </mat-card-content>
                </mat-card>
                </div>
              <div fxFlex></div>
            </div>
            `,
})
export class AppComponent {}
