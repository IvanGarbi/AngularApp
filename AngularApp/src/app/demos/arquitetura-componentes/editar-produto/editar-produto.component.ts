import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html'
})
export class EditarProdutoComponent implements OnInit{

  produto!: Produto;

    constructor(
      private route: ActivatedRoute, 
      private produtoService: ProdutoService, 
      private router: Router) { }

    ngOnInit() {
      this.route.params
        .subscribe(params => {
          //console.log(params['id']);
          this.produto = this.produtoService.obterPorId(params['id']);
        });
    }


    salvar() {
      // faazer comunicação com o backend

      this.router.navigate(['/produtos']);
    }
}
