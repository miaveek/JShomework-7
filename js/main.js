/*
    Реализовать функцию для создания объекта "пользователь".
    Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
    
При вызове функция должна спросить у вызывающего имя и фамилию.
Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.

    Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.
    Возьмите выполненное задание выше (созданная вами функция createNewUser()) и дополните ее следующим функционалом:

При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.
Создать метод getAge() который будет возвращать сколько пользователю лет.
Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, 
соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).
Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.
*/

function CreateNewUser(){
  var   birthday = prompt("Введите вашу дату рождения формате dd.mm.yyyy").split("."),
        firstName = prompt("Введите ваше Имя"),
        lastName  = prompt("Введите вашу Фамилию"),
        newUser = {
            firstName,
            lastName,
            birthday,
            setPass:CreateNewUser.getPassword(firstName,lastName,birthday),
            age : CreateNewUser.getAge(birthday) ,
            getLogin(){const setLogin = firstName[0]+lastName; return setLogin.toLocaleLowerCase();}   
        }
    return newUser;
    }
CreateNewUser.getAge = function(birthday){
    this.birthday = birthday;
    currentDate = new Date(),
    currentAge = currentDate.getFullYear() - birthday[2];
    return currentAge;
}
CreateNewUser.getPassword = function(firstName,lastName,birthday){
    this.firstName = firstName,
    this.lastName = lastName,
    this.birthday = birthday;
    var setPass = firstName[0].toUpperCase()+lastName.toLocaleLowerCase()+birthday[2];
    return setPass;
}
var user = new CreateNewUser();
console.log("name:"+user.firstName,"lastname:"+user.lastName+"login:"+user.getLogin(),"user age :"+user.age,"password:"+user.setPass);
/*
Реализовать функцию фильтра массива по указанному типу данных.
                   
Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом.
То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].
*/

var a =['hello', 'world', 23, '23', null],
    b = "string";

var filterBy = (a,b) =>{
    this.arrey = a,
    this.elemType = b;
    let newArrey = [];
    for(var element in arrey ){
        if(typeof arrey[element] != elemType ){
        newArrey.push(arrey[element]);
        document.write("<p>" + arrey[element]);
        }
    }
    console.log(newArrey);
}
filterBy(a,b);