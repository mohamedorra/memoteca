import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componetes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';


//PATH PARA MUDAR URL E DIRECIONAR A PAGINA USANDO COMPONENT </router-outlet> NO HTML
const routes: Routes = [
  {
    path:'',
    redirectTo:'listarPensamento',
    pathMatch:'full',
  },
  {
    path: 'criarPensamento', component: CriarPensamentoComponent
  }, //http://localhost:4200/criarpensamento
  {
    path:'listarPensamento', component: ListarPensamentoComponent
  }, //http://localhost:4200/listarpensamento
    {
            path: 'pensamentos/excluirPensamento/:id',
            component: ExcluirPensamentoComponent
    },
    {
            path: 'pensamentos/editarPensamento/:id',
            component: EditarPensamentoComponent
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
