//Boolean
let muted: boolean = true
muted= false

//number
let numerador:number = 42
let denominador:number = 6
let resultado = numerador/denominador
//Strings
let nombre:string='Richar'
let saludo= `Hola ${nombre}`

//arreglos
let people: string[]=[]
people = ['Isabel', 'Juan']
//people.push(77)
let peopleNumber:Array<string | number>=[]
peopleNumber.push(people[1])
peopleNumber.push[1]
//Enum
enum Color{
    
    Rojo='Rojo',

    Verde='Verde',
    
    Azul='Azul'
}
let colorFav:Color= Color.Verde
console.log(`Mi color Favorito es ${colorFav}`)
//any
let comodin:any ='Joker'
comodin ={type:'wildcard'}
comodin= 3
//object
let someObject:object = {nombre:'Juan'}
//Functions
function add(a:number, b:number){
    return a+b
}
const sum =add(2,3)

function createAdder(a:number):(number)=>number{
    return function (b:number) {
        return a + b 
        
    }
}
const addFour =createAdder(4)
const fourPlus =addFour(6)

function fullName (FirstName:string,lastName?: String):string {

    return`${FirstName} ${lastName}`
}
const richard = fullName('Richard')
console.log(richard)

interface rectangulo{
    ancho:number
    alto:number
    Color:Color
}
let rect:rectangulo ={
    ancho:3,
    alto:3,
    Color:Color.Rojo
}
function area(r:rectangulo):number {
    return r.alto*r.ancho
    
}
const areaRect=area(rect)
console.log(areaRect)
rect.toString = function(){
    return`${this.Color}`
}
const Colores=rect.toString()
console.log(Colores)