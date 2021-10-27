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
let birthday = prompt("Введите вашу дату рождения формате dd.mm.yyyy используя '.' как разделитель").split(".")
    firstName = prompt("Введите ваше Имя")
    lastName  = prompt("Введите вашу Фамилию");
class CreateNewUser{ 
constructor(birthday,firstName,lastName){
    this.birthday =birthday,
    this.firstName =firstName ,
    this.lastName =lastName; 
}
get login(){return (this.firstName[0]+this.lastName).toLocaleLowerCase()} 
    
getAge(birthday){

       let currentDate = new Date() 
        birthday = this.birthday

        if(birthday[1] < currentDate.getMonth()){
            let currentAge = currentDate.getFullYear() - birthday[2];
            return currentAge
        }
        else if(birthday[1]==currentDate.getMonth()+1){

            if(birthday[0]<=currentDate.getDate()){return currentDate.getFullYear() - birthday[2]; }
            else{return currentDate.getFullYear() - birthday[2]-1; }
        }
        else{ return currentDate.getFullYear() - birthday[2]-1}
}
get password(){
        return this.firstName[0].toUpperCase()+this.lastName.toLocaleLowerCase()+this.birthday[2];
}
}

    let user = new CreateNewUser(birthday,firstName,lastName);
console.log("Пользователь ",user,"Получение логина " +user.login,"Генерация пароля " +user.password,"Возраст "+user.getAge());
/*             
Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом.
То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].
*/
const a =['hello', 'world', 23, '23', null],
      b = "string";
 filterBy = (a,b) =>{
    this.arrey = a,
    this.elemType = b;
    filterArrey = arrey.filter(function(item){
        return typeof item != elemType});
        console.log(filterArrey);
}
filterBy(a,b);
