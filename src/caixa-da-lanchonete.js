class CaixaDaLanchonete {

    metodos = {"débito": 1, "crédito": 1.03, "dinheiro": 0.95};
    // | cafe      | Café                        | R$ 3,00 |
    // | chantily  | Chantily (extra do Café)    | R$ 1,50 |
    // | suco      | Suco Natural                | R$ 6,20 |
    // | sanduiche | Sanduíche                   | R$ 6,50 |
    // | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
    // | salgado   | Salgado                     | R$ 7,25 |
    // | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
    // | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |
    opcoes = {
        "cafe": 3.00,
        "suco": 6.20,
        "sanduiche": 6.50,
        "salgado": 7.25,
        "combo1": 9.50,
        "combo2": 7.50
    };
    adicionais = {
        cafe: ["chantily", 1.50],
        sanduiche: ["queijo", 2.00]
    };
    calcularValorDaCompra(metodoDePagamento, itens) {
        var total;
        try{
            var metodo = metodos[metodoDePagamento];
        } catch (error) {
            console.log("Forma de pagamento inválida!");
        }
        if("chantilly" in itens){
        };
        if("queijo" in itens){
        };
        return total * metodo;
    }

}


export { CaixaDaLanchonete };
