window.addEventListener('DOMContentLoaded', function () {

    'use strict'; // переходим в строгий режим


    function myTab(infoHeader, infoHeaderTab, infoTabContent) {

        let tab = document.querySelectorAll('.' + infoHeaderTab),
            info = document.querySelector('.' + infoHeader),
            tabContent = document.querySelectorAll('.' + infoTabContent);

        // функция которая будет скрывать наши табы
        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {

                tabContent[i].classList.remove('show'); // удаляем с каждого таба класс show
                tabContent[i].classList.add('hide'); // и полностью скроем со страницы

            }
        }

        hideTabContent(1); // скроются все табконтенты кроме первого

        // функция которая будет показывать табконтент
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) { // если содежит класс hide
                tabContent[b].classList.remove('hide'); // удаляем с каждого таба класс hide
                tabContent[b].classList.add('show'); // показываем
            }
        }

        // ставим обработчик событий на info 
        info.addEventListener('click', function (event) {
            let target = event.target;

            if (target && target.classList.contains(infoHeaderTab)) {

                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0); // скрываем все табы
                        showTabContent(i); // показываем нужный таб
                        break;
                    }
                }
            }
        });
    }
    // Вызов нашей функции
    myTab('info-header', 'info-header-tab', 'info-tabcontent');







    //////////// Timer

    let deadline = '2020-02-29';
    // Узнаем промежуток времени который лежит между сейчас и deadline

    function getTimeRemaining(endtime) {
        // Любую дату можно превратить в количество миллисекунд которые прошли с первого января 1970 г методом parse
        let t = Date.parse(endtime) - Date.parse(new Date()), // в t - лежит количество миллисекунд которые лежат в промежутке
            // теперь мы располагаем количеством миллисикунд, но нам надо получить три параметра часы минуты секунды
            seconds = Math.floor((t / 1000) % 60), // получим  целое число методом floor  // делим на 1000 получаем из миллисекунд секунды
        // %60 получим остаток от деления секунд на 60
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
            // days = Math.floor((t/(1000*60*60*24)))
//..Здесь мы создаем объект и возвращаем его
        return {
            'total': t,
            'hours': hours,
            "minutes": minutes,
            "seconds": seconds
        };
        
    }
    // напишем функцию которая превращает нашу статичную верстку в динамичную

    // создадим функцию которая создает различные переменные и привязывает к ним элементы страницы
    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock , 1000);

        // следующая функция сначала получает разницу между временем gettimeRemaining, которая возвращает объект с данными 
        // для нашего таймера и записываем все эти данные в верстку

        function updateClock(){
                let t = getTimeRemaining(endtime);
              
               // добавляем нолик если число от 0 до 9
                if (t.hours >= 0 && t.hours <=9){
                    hours.textContent = '0' + t.hours;
                } else hours.textContent = t.hours;
                if (t.minutes >=0 && t.minutes <=9){
                    minutes.textContent = '0' + t.minutes;
                } else minutes.textContent = t.minutes;
                if (t.seconds >= 0 && t.seconds <= 9){
                    seconds.textContent = '0' + t.seconds; 
                } else seconds.textContent = t.seconds;

                if (t.total <= 0 ){

                    clearInterval(timeInterval);
                    // выставляем нули если deadline был раньше чем сейчас
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00'; 
                } 
               
        }
    }

    setClock('timer', deadline);







    // // Модальное окно



    // let more = document.querySelector('.more'),
    //     overlay = document.querySelector('.overlay'), //наше модальное окно
    //     close = document.querySelector('.popup-close');

    // more.addEventListener('click', function() {
    //     overlay.style.display = 'block';
    //     this.classList.add('more-splash'); //  будет воспроизводиться небольшая анимация которая будет применена  к этой кнопке
    //     // чтобы запретить пролистывать страницу пока открыто модальное окно:
    //     document.body.style.overflow = 'hidden';
    // })
    // close.addEventListener('click', function() {

    //     overlay.style.display = 'none';
    //     more.classList.remove('more-splash');
    //     document.body.style.overflow = '';

    // })




    // Пишу сам функцию вызова модального окна


    function modal(button, modalBlock, popupClose) { // кнопка на которую будет наложен обработчик события, класс модального окна, 
                                                    //класс блока с крестиком закрывающего модальное окно
        let btn = document.querySelectorAll(button),
            mdBlock = document.querySelector(modalBlock), //наше модальное окно
            closeModal = document.querySelector(popupClose); // окно с крестиком
            console.log(btn);
        btn.forEach ( function(item){ // перебираем все элементы этого класса

            item.addEventListener('click', function () {
                mdBlock.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            })

        })
                closeModal.addEventListener('click', function () {
                mdBlock.style.display = 'none';
                this.classList.remove('more-splash');
                document.body.style.overflow = '';
                })
        
        
    }
    modal('.more', '.overlay', '.popup-close');
    modal('.description-btn', '.overlay', '.popup-close');
    
  

    // Второе задание

    // let age = document.getElementById('age');
    // function showUser(surname, name) {
    //         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    //         console.log(this);
    // }
    //     showUser.apply(age, ['denis', 'ustimenko']);
    
});