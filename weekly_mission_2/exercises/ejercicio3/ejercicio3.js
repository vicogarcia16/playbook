//-------------repo----------------
class repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name =  name;
        this.author =  author;
        this.language= language;
        this.numberOfCommits= numberOfCommits;
        this.stars= stars;
        this.forks= forks;
        this.issues_open= issues_open;
        this.issues_close= issues_close;
    }
    getTotalIssues(){
        return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const Repo = new repo("Launchx","carlogilmar","JavaScript",100,199,299,10,10);
console.log("Nombre del repo:" + Repo.name);
console.log("Issues totales: " + Repo.getTotalIssues());
console.log(Repo.getGeneralInfo());
console.log("");

//-------------Issue----------------
class issue {
    constructor(title,repositoryNameAssociated,numberOfComments,labels,author){
        
        this.title= title;
        this.repositoryNameAssociated=repositoryNameAssociated;
        this.status= "activo";
        this.numberOfComments=numberOfComments;
        this.labels=labels;
        this.author=author;
        this.dateCreated=new Date();
        this.lastUpdated=new Date();
    }
    
    getTitleAndAuthor(){
        return this.title +" "+ this.author
    }
    getGeneralInfo(){
        return `This issue ${this.title} was created by ${this.author}`
    }
}

const Issue = new issue("Semana 2", "MissionNodeJs", 20, 12, "vicogarcia16" );
console.log("Nombre del issue:" + Issue.title);
console.log("Titulo y Autor: " + Issue.getTitleAndAuthor());
console.log(Issue.getGeneralInfo());
console.log("");

//-------------Pull Request--------------------------

class pull_request {
    constructor(title, branchName, repositoryNameAssociated){
        this.title= title;
        this.branchName= branchName;
        this.dateCreated=new Date();
        this.status= "activo";
        this.repositoryNameAssociated= repositoryNameAssociated;
    }

    getStatus(){
        return this.status + " " + this.dateCreated.toLocaleDateString()
    }
    getTitleAndAuthor(){
        return `This pull request ${this.title} was created by ${issue.author}`    
    }
}

const Pull = new pull_request("Ejercicio 3", "Master", "vicogarcia16");
console.log("Nombre del pull request: " + Pull.title);
console.log("Estado: " + Pull.getStatus());
console.log("Titulo y Autor: " + Pull.getTitleAndAuthor());
console.log("");

//---------------------Twitter-----------------------------------
class twitter  {
    constructor(name, username, bio, age, trending_topic, hashtag){
        this.name= name; 
        this.username= username; 
        this.bio= bio; 
        this.age= age;
        this.trending_topic= trending_topic;
        this.hashtag= hashtag;
    }

}

class user extends twitter {
    constructor(name, username, bio, age){
        super(name, username, bio, age);

    }

    getNameUsername(){
        return this.username
    }
}

class trending_topic extends twitter {
    constructor(username, lista){
        super(username, username);
        this.lista = lista;
    }
    getTrendingTopic(){
        return `El usuario ${this.username} tiene interes por la ${this.lista[1]}`
    }
}

const lista = {1:"IA", 2:"naturaleza", 3:"futbol"};
const Twit = new user("Manuel García", "vicogarcia16", "ingeniero en computación", 33);
const Trend = new trending_topic("vicogarcia16", lista); 
console.log("Aplicación - Twitter");
console.log("Informacion del usuario: " + Twit.getNameUsername());
console.log("Trending topic: " + Trend.getTrendingTopic());
console.log("");

//---------------------Facebook-----------------------------------
class facebook {
    constructor(username, age){
        this.username = username;
        this.age = age;
    }
}

class post extends facebook{
    constructor(username, titulo, contenido){
        super(username, username);
        this.titulo = titulo;
        this.contenido = contenido;
    }

    getPostUser(){
        return `Post ${this.titulo} realizado por ${this.username}`
    }
}

class biography extends facebook{
    constructor(username,ciudad, educacion, intereses){
        super(username, username);
        this.ciudad = ciudad;
        this.educacion = educacion;
        this.intereses = intereses;
    }
    getIntereses(){
        return `El usuario ${this.username} ${this.educacion} tiene los sig intereses: ${this.intereses}`;

    }
}
   
const intereses =  ["arte", "música", "tecnología"];
const Post = new post("vicogarcia16", "Felicitaciones", "Lo mas genial que me ha pasado");
const Bio = new biography("manu16","Taxco", "Universitario", intereses);
console.log("Aplicación - Facebook");
console.log(Post.getPostUser());
console.log(Bio.getIntereses());
console.log("");

//---------------------Uber-----------------------------------
class uber {
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.licencia = "A";
        this.status = "activo";
        this.calificacion = calificacion;
    }
    getPerfil(){
        return this.nombre +"; "+ "Estado: " + this.status
    }
    
}    

class travel extends uber{
    constructor(nombre, calle, colonia, tiempo_llegada, tipo_viaje){
        super(nombre);
        this.calle = calle;
        this.colonia = colonia;
        this.tiempo_llegada = tiempo_llegada;
        this.tipo_viaje = tipo_viaje;

    }
    getDatosViaje(){
        return `El viaje va dirigido a ${this.calle},${this.colonia}\nAtendido por: ${this.nombre}`
    }
}
   
const Uber = new uber("Víctor García", 10);
const Travel = new travel("Manuel García","Benito Juarez", "Centro", 20, "Privado");
console.log("Aplicación - Uber");
console.log("Perfil del conductor: " + Uber.getPerfil())
console.log(Travel.getDatosViaje())
console.log("Tipo de viaje: " + Travel.tipo_viaje)