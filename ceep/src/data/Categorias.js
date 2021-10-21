export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    //função será executada quando ocorrer alguma mudança
    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }


}