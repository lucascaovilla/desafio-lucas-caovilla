class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        const metodos = {"debito": 1, "credito": 1.03, "dinheiro": 0.95};
        const opcoes = {"cafe": 3.00, "chantily": 1.50, "suco": 6.20, "sanduiche": 6.50, "queijo": 2.00, "salgado": 7.25, "combo1": 9.50, "combo2": 7.50};
        var soma = 0;
        const pedido = itens.map(element => element.split(",")[0]);
    
        // - Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
        if(!itens.length > 0) {
            console.log("Não há itens no carrinho de compra!");
            return "Não há itens no carrinho de compra!";
        }
        
        // - Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"
        if(Object.keys(metodos).indexOf(metodoDePagamento) < 0){
            console.log("Forma de pagamento inválida!");
            return "Forma de pagamento inválida!";
        }
        var multiplicadorMetodo = metodos[metodoDePagamento];
        
        
        for(var i = 0; i < itens.length; i++) {
            var item = itens[i].split(",");
            var nomeItem = item[0];
            var quantidadeItem = item[1];
            
            // - Se o código do item não existir, apresentar mensagem "Item inválido!"
            if(Object.keys(opcoes).indexOf(nomeItem) < 0){
                console.log("Item inválido!");
                return "Item inválido!";
            };
            
            // - Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
            if(quantidadeItem <= 0){
                console.log("Quantidade inválida!");
                return "Quantidade inválida!";
            }
    
            // - Caso item extra seja informado num pedido que não tenha o respectivo item principal
            //   apresentar mensagem "Item extra não pode ser pedido sem o principal".
            // - Combos não são considerados como item principal.
            // - É possível pedir mais de um item extra sem precisar de mais de um principal.
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

