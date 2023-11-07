const lista = new Map();

lista.set(1, {nome: 'João', telefone: '(11)99348-2318', email: 'joao@gmail.com', endereco : {rua : 'rua 1', numero : '22', cep : '08140-480'}})
lista.set(2, {nome: 'Lucas', telefone: '(11)96321-6523', email: 'lucas@gmail.com', endereco : {rua : 'rua 2', numero : '276', cep : '32581-325'}})
lista.set(3, {nome: 'Livian', telefone: '(11)96342-1478', email: 'livian@gmail.com', endereco : {rua : 'rua 3', numero : '63', cep : '63254-965'}})

console.log(lista)

function add(id, nome, telefone, email, rua, numero, cep){

    if(lista.has(id)){
        return console.log('id existente')
    }
    return lista.set(id, {nome , telefone , email, endereco: { rua , numero , cep }} )
}


function have(id){
    return lista.has(id)
}

function deletar(id){
    lista.delete(id)
}

function listarTodos(lista){
    for (const [key, values] of lista){
        console.log(key, values)
    }
}

add(2, 'carlos', '(11)99348-238', 'carlos@gmail.com', 'rua 10', 656, '08140-480')





