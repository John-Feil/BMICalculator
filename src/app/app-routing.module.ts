import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { CalculationComponent } from './calculation/calculation.component';
import { EnglishComponent } from './english/english.component';
import { MetricComponent } from './metric/metric.component';


const routes: Routes = [
  {path: '', component: EnglishComponent},
  {path: 'english', component: EnglishComponent},
  {path: 'metric', component: MetricComponent},
  {path: 'calculation', component: CalculationComponent},
  {path: 'english/calculation', component: CalculationComponent},
  {path: 'metric/calculation', component: CalculationComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
