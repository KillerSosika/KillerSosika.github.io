var pi = Math.PI;

let academ = 'Beetroot';
let courses ='FrontEnd';
let country = 'Ukrain';
let fullName = 'Skaliush Dmytro';
let pay = '1000';


let all = academ+"\n"+courses+"\n"+country+"\n"+fullName+"\n"+pay;
console.log(all);


let vars =  parseInt(prompt('Що треба зробити 1.радіс кола 2.Відстань та час 3.Курс долар-євро'))

switch(vars){
    case 1:
        let rad = prompt('введіть радіус кола')
        alert("Радіус дорівнює = "+(rad*rad)*pi)
    break;
    
    case 2:
        let km = parseFloat(prompt('введіть відстань в км'))
        let tm = parseFloat(prompt('введіть час в годинах за котрий ви бажаєте доїхати'))
        alert("наймешьна швидкість ="+km/tm+"км/год")
    break;

    case 3:
        const currency = 0.92
        let dol = parseFloat(prompt('Ведіть кількість долларів'))
        alert("За цю кількість доларів можно купити"+dol*currency+"євро")
    break;

    default:
    alert('######');
    break;
}