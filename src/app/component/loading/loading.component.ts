import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-loading',
    styleUrls: ['./loading.component.scss'],
    template: `
        <div class="loading"><ion-spinner></ion-spinner></div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {}

