//-------------repo----------------

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log("\n")

   //-------------Issue----------------
const issue = {
    title: "Semana 2",
    repositoryNameAssociated:"MissionNodeJs",
    status: "activo",
    numberOfComments:20,
    labels:12,
    author:"vicogarcia16",
    dateCreated:"2022/04/11",
    lastUpdated:"2022/04/11",

    getTitleAndAuthor: function(){
        return this.title + this.author
    },
    getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.author}`
    }
}
   console.log("Nombre del issue:" + issue.title)
   console.log("Titulo y Autor: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())
   console.log("\n")

//-------------Pull Request--------------------------

const pull_request = {
    
    title: "Ejercicio 1",
    branchName: "master",
    dateCreated:"2022/04/11",
    status: "activo",
    repositoryNameAssociated: "MissionNodeJs",

    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `This pull request ${this.title} was created by ${issue.author}`
        
    }
}

   console.log("Nombre del pull request: " + pull_request.title)
   console.log("Estado: " + pull_request.getStatus())
   console.log("Titulo y Autor: " + pull_request.getTitleAndAuthor())
   console.log("\n")

//---------------------Twitter-----------------------------------
const twitter = {
    user :  {
        name: "Manuel García", 
        username: "vicogarcia16", 
        bio: "Ingeniero en computación", 
        age: 33
    }, 
    trending_topic: {1:"IA", 2:"naturaleza", 3:"futbol"},
    hashtag: "#inovacionvirtual",
    getNameUsername: function(){
        return this.user.username
    },
    getTrendingTopic: function(){
        return this.trending_topic[1];

    },
}
console.log("Aplicación - Twitter")
console.log("Informacion del usuario: " + twitter.getNameUsername())
console.log("Trending topic: " + twitter.getTrendingTopic())
console.log("\n")
   
//---------------------Facebook-----------------------------------
const facebook = {
    user:{
        username: "vicogarcia",
        edad: 33
    },
    post: { 
        titulo: "Felicitaciones",
        contenido: "Lo mas genial que me ha pasado" 
    },
    biography: {
        ciudad: "Taxco Guerrero",
        educacion: "Ingeniería",
        intereses: ["arte", "música", "tecnología"]
    },
    getPostUser: function(){
        return `Post ${this.post.titulo} realizado por ${this.user.username}`
    },
    getIntereses: function(){
        return this.biography.intereses;

    },
}
console.log("Aplicación - Facebook")
console.log(facebook.getPostUser())
console.log("Intereses personales: " + facebook.getIntereses())
console.log("\n")

//---------------------Uber-----------------------------------
const uber = {
    profile: {
        nombre: "Victor Garcia",
        licencia: "A",
        status: "activo",
        reputacion: 10
    },
    travel: {
        calle: "Lazaro cardenas",
        colonia: "Pedro Martin",
        tiempo_llegada: 20,
        tipo_viaje: "Privado"
    },
    getPerfil: function(){
        return this.profile.nombre +";"+ "Estado: " + this.profile.status
    },
    getDatosViaje: function(){
        return this.travel.calle + " "+this.travel.colonia
    }
}

console.log("Aplicación - Uber")
console.log("Perfil del conductor: " + uber.getPerfil())
console.log("Datos del viaje: " + uber.getDatosViaje())
console.log("Tipo de viaje: " + uber.travel.tipo_viaje)