import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
  ]
})
export class CoreModule { }
