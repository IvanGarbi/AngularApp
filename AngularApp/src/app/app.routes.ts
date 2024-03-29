import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { AuthGuard } from "./services/app.guard";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent }, // canActivate: [AuthGuard] verifica se a rota pode ser usada.
    { path: 'cadastro', component: CadastroComponent },
    { path: 'produtos', loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule),
        canLoad: [AuthGuard], canActivate: [AuthGuard] }, // lazy loading!
    { path: '**', component: NotFoundComponent } // sempre por último
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}