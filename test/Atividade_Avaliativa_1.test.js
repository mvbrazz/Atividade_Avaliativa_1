
describe('Utils', () => {
    describe('Faturas', () => {
        test('Se o valor da fatura for menor que 2000', () => {

            var cliente = {};
            var clientes = [];
            var fatura = {};
            var faturas = [];

            cliente.id = 0;
            cliente.nome = "José";
            cliente.data = "21-06-2003";
            cliente.estado = "Paraná";

            clientes[0] = cliente;

            cliente.id = 1;
            cliente.nome = "Marcos";
            cliente.data = "23-02-2007";
            cliente.estado = "Paraná";

            clientes[1] = cliente;

            cliente.id = 2;
            cliente.nome = "Paulo";
            cliente.data = "01-09-2001";
            cliente.estado = "Paraná";

            clientes[2] = cliente;

            cliente.id = 3;
            cliente.nome = "Alex";
            cliente.data = "06-05-2008";
            cliente.estado = "Paraná";

            clientes[3] = cliente;

            cliente.id = 4;
            cliente.nome = "Carlos";
            cliente.data = "12-01-2015";
            cliente.estado = "Paraná";

            clientes[4] = cliente;
    
            fatura.codigo = 0;
            fatura.valor = 1800;
            fatura.data= "12-12-2018";
            fatura.cliente.id=0;

            faturas[0] = fatura;

            fatura.codigo = 1;
            fatura.valor = 1000;
            fatura.data= "05-03-2013";
            fatura.cliente.id=1;

            faturas[1] = fatura;

            fatura.codigo = 2;
            fatura.valor = 2700;
            fatura.data= "23-08-2013";
            fatura.cliente.id=2;

            faturas[2] = fatura;

            fatura.codigo = 3;
            fatura.valor = 2400;
            fatura.data= "12-04-2001";
            fatura.cliente.id=3;

            faturas[3] = fatura;

            fatura.codigo = 4;
            fatura.valor = 2200;
            fatura.data= "03-12-2009";
            fatura.cliente.id=4;

            faturas[4] = fatura;

            const aux = filtroFaturaMenorQue2000(faturas);

            expect(aux).toBe(0);
        });
 
    });    
});