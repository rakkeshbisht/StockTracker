import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as a from '.'

const routes: Routes = [
    { path: '', redirectTo: 'watchlist', pathMatch: 'full' },
    { path: 'watchlist', component: a.WatchlistComponent },
    { path: 'portfolio', component: a.PortfolioComponent },
    { path: 'news', component: a.NewsComponent },
    { path: 'settings', component: a.SettingsComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes)  
