//Obtenir la data actual i mostrar 
//1)Avui es el dd del mm del aaaa                      
//2)Han passat n setmanes de l'any     43                   d1.getTime() - d2.getTime()
//3)El % de dies transcorreguts es nn,nn%   82,09%
//4)Queden un nn.nn% de dies a l'any   17'91%
//5)Ara son les hh:mm:ss
//6)El % del dia que ha passat es nn,nn%  68,05%
//7)Queda un % de nn,nn% del dia         31,95%

function Datas(){
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let any = data.getFullYear();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    let milisegon = data.getMilliseconds();

    console.log("1)Avui es " + dia + " del " + mes + " del " + any);

    let setmanes = Math.floor((data - new Date(data.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));
    console.log("2)Han passat " + setmanes + " setmanes de l'any");

    

    let diesTranscorreguts = Math.floor((data - new Date(data.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000)) + 1;
    let diesTotals = data.getFullYear() % 4 == 0 ? 366 : 365; 
    let percentatgeDiesTranscorreguts = ((diesTranscorreguts / diesTotals) * 100).toFixed(2);
    console.log("3)El % de dies transcorreguts és " + percentatgeDiesTranscorreguts + "%");

    let diesRestants = diesTotals - diesTranscorreguts;
    let percentatgeDiesRestants = ((diesRestants / diesTotals) * 100).toFixed(2);
    console.log("4)Queden un " + percentatgeDiesRestants + "% de dies a l'any");

    console.log("5)Ara son les " + hour + ":" + minute + ":" + second);

    let horaActualEnSegons = hour * 3600 + minute * 60 + second;
    let totalSegonsAlDia = 24 * 3600;
    let percentatgeDiaPassat = ((horaActualEnSegons / totalSegonsAlDia) * 100).toFixed(2);
    console.log("6)El % del dia que ha passat és " + percentatgeDiaPassat + "%");

    let segonsRestants = totalSegonsAlDia - horaActualEnSegons;
    let percentatgeDiaRestant = ((segonsRestants / totalSegonsAlDia) * 100).toFixed(2);
    console.log("7)Queda un " + percentatgeDiaRestant + "% del dia");
}












