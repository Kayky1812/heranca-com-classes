class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado) {
            console.log(this.nome + " já ligado")
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if (!this.ligado){
            console.log(this.nome + " já desligado")
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone ('Iphone', "Preto", '11 pro');
s1.ligar()
console.log(s1)

console.log("-----------------------------")

class Tablet extends DispositivoEletronico{
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi
    }

    ligar(){
        console.log("Voce alterou o metodo ligar")
    }
}

const t1 = new Tablet ("Samsung", true)
t1.ligar()
console.log(t1)

console.log("-----------------------------")



class Computador extends Smartphone{
    constructor(nome, cor,teclado,mouse){
        super(nome,cor)
        this.teclado = teclado;
        this.mouse = mouse

    }
}


const computador1 = new Computador ("Dell", "Azul",true,true)
computador1.ligar()
console.log(computador1)