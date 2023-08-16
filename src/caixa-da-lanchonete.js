class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        const metodos = {"debito": 1, "credito": 1.03, "dinheiro": 0.95};
        const opcoes = {"cafe": 3.00, "chantily": 1.50, "suco": 6.20, "sanduiche": 6.50, "queijo": 2.00, "salgado": 7.25, "combo1": 9.50, "combo2": 7.50};
        var soma = 0;
        const pedido = itens.map(element => element.split(",")[0]);
    

        if(!itens.length > 0) {
            console.log("Não há itens no carrinho de compra!");
            return "Não há itens no carrinho de compra!";
        }
        

        if(Object.keys(metodos).indexOf(metodoDePagamento) < 0){
            console.log("Forma de pagamento inválida!");
            return "Forma de pagamento inválida!";
        }
        var multiplicadorMetodo = metodos[metodoDePagamento];
        
        
        for(var i = 0; i < itens.length; i++) {
            var item = itens[i].split(",");
            var nomeItem = item[0];
            var quantidadeItem = item[1];
            
            if(Object.keys(opcoes).indexOf(nomeItem) < 0){
                console.log("Item inválido!");
                return "Item inválido!";
            };
            
            if(quantidadeItem <= 0){
                console.log("Quantidade inválida!");
                return "Quantidade inválida!";
            }
    
            if(nomeItem == "chantily" && (pedido.indexOf("cafe") < 0) || nomeItem == "queijo" && (pedido.indexOf("sanduiche") < 0)){
                console.log("Item extra não pode ser pedido sem o principal")
                return "Item extra não pode ser pedido sem o principal";
            };
    
            soma += opcoes[nomeItem] * quantidadeItem;
        }
        var total = (soma * multiplicadorMetodo).toFixed(2).replace(".", ",");
        return "R$ " + total;
    }
};
    
    
export { CaixaDaLanchonete };

