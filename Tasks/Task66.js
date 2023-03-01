let arr = ["a", "b"];

arr.push(function() {
    alert( this );
})

arr[2](); // a,b,function(){...}

//Вызов arr[2]() это obj[method]()
//obj – arr
//method – 2
//Вызов функции arr[2]
//Получает в качестве this объект arr и выводит массив a,b,function(){...}
//У массива 3 элемента:2+функция.