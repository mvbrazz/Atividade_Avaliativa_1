
const FiltroMaior2000 = (value) => {
    if(value.valor > 2000){
        return value;
    }
}

function FiltroGeral (value){

    var date = new Date();

    if(value.valor <= 2500 && value.data > date.getMonth() ){
        return value;
    }
}

module.exports = {FiltroMaior2000,FiltroGeral};