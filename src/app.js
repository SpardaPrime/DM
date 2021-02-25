const buyClean = document.getElementById('clean');
const buyShoes = document.getElementById('shoes');

buyClean.addEventListener('click',(e)=>{
    const div = document.createElement('div');
    div.classList.add('bc');
    div.innerHTML=`
    <div class="bg-d">
    <button id="del" class="back">Назад</button>
    <div class="bg-i">
    <img src="./images/udfrf3m6c0v62nz_17f8b2d7.png" alt="photo">
    </div>
    <div class="bg-c">
    <h1>Очиститель для обуви из кожи</h1>
    
    <div class="bg-t">
    <div class="bg-t-child"><h2>Цена</h2><h2>371 грн</h2></div>
    <div class="bg-t-child"><h3>Код</h3><h3>0514003</h3></div>
    <div class="bg-t-child"><h3>Наличие</h3><h3>есть</h3></div>
    <div class="bg-t-child"><h3>Объём</h3><h3>25 мл</h3></div>
    <div class="bg-t-child"><button id="fist" name="describe" class="btn-opt btn-opt-on">Описание</button><button id="second" name="character" class="btn-opt">Характеристика</button></div>
    <div class="bg-t-child-p">
    <p class="bg-p"><strong>Очиститель</strong> – жидкое средство для чистки и обновления всех видов гладкой кожи, независимо от её цвета. Мощная, и при этом безвредная, формула продукта удаляет грязь, старые кремы, воски, пасты, силиконы и смолы за считанные минуты без прикладывания чрезмерных усилий. Также обезжиривает кожу, открывает её поры и восстанавливает «дышащие» свойства материала.
    Рекомендуем использовать очиститель кожи минимум 1 раз в 3 месяца.</p>
    <p><strong>Материал применения: </strong>гладкая кожа (обувь, мебель, салон автомобиля, кожгалантерея и т. д.)</p>
    <p><strong>Как пользоваться очистителем кожи </strong></p>
    <p>Качественно почистите изделие от пыли и засохшей грязи щёткой.
    Взболтайте флакон со средством.
    Сверните лоскуток хлопковой ткани или обувную салфетку в форме тампона и нанесите на него очиститель.
    Протрите загрязнённый участок без чрезмерных усилий.
    Дождитесь высыхания изделия (~ 15 мин.) За это время средство восстанавливает изначальный цвет и мягкость кожи.</p>
    <p> <strong>Полезные советы</strong><br>
    После чистки кожаного изделия очистителем  важно регулярно обрабатывать его увлажняющий кремом для обуви Saphir Creme Surfine или полировочным воском Saphir Pate De Luxe или крем-краской с защитными свойствами Saphir Canadian. Эти продукты питают и увлажняют гладкую кожу, тем самым продлевая ей жизнь.
    Очиститель кожи  не предназначен для удаления пятен. Рекомендуем использовать спрей-пятновыводитель Avel Hussard Detacheur Cuirs Textiles для устранения старых жирных пятен, жидкий пятновыводитель Avel Hussard для устранения всех видов свежих и старых пятен или порошкообразный пятновыводитель Avel Hussard Terre De Sommieres для устранения свежих жирных пятен.</p>
    </div>

    <div class="bg-t-child-p text-off">
    <p><strong>ХАРАКТЕРИСТИКИ КОМПЛЕКТАЦИИ</strong></p>
    <hr>
    <p>Карта цвета 	-------------------------------------- 02 БЕСЦВЕТНЫЙ</p>
    <p><strong>ОСНОВНЫЕ</strong></p>
    <hr>
    <p>Продукт --------------------------------------	Очиститель, Пятновыводитель</p>
    <p>Тип упаковки --------------------------------------	Стеклянный флакон</p>
    <p>Объем --------------------------------------	25 гр</p>
    <p>Материал применения --------------------------------------	Гладкая кожа, Кожа краст, Кожзам</p>
    <p>Эффективен при --------------------------------------	Других пятнах, Загрязнении, Светлых пятнах, Тёмных пятнах</p>
<p><strong>ШКАЛА</strong></p>
<hr>
<p>Простота использования  --------------------------------------	3</p>
<p>Время высыхания  --------------------------------------	3</p>
<p>Противопоказания  --------------------------------------	2</p>
<p>Функциональность  --------------------------------------	3</p>
<p>Норма расхода  --------------------------------------	1</p>
<p>Очистка  --------------------------------------	5</p>
<p>Восстановление  --------------------------------------	4</p>



</div>
	
	
	
	
</p>

    </div>
    
    </div>
    
    </div>
    `;

    

    document.body.append(div);
    const btn1 = document.getElementById('fist');
    const btn2 = document.getElementById('second');

    btn1.addEventListener('click',(e)=>{
        e.target.classList.add('btn-opt-on');
        btn2.classList.remove('btn-opt-on');
        const textBlock = document.querySelectorAll('.bg-t-child-p');
        textBlock.forEach(item=>item.classList.remove('text-off'));
        textBlock[1].classList.add('text-off');

    });
    btn2.addEventListener('click',(e)=>{
        e.target.classList.add('btn-opt-on');
        btn1.classList.remove('btn-opt-on');
        const textBlock = document.querySelectorAll('.bg-t-child-p');
        textBlock.forEach(item=>item.classList.remove('text-off'));
        textBlock[0].classList.add('text-off');

    });
    const del = document.getElementById('del');
    del.addEventListener('click',()=>{
        div.remove();
    })
});



buyShoes.addEventListener('click',(e)=>{
    const div = document.createElement('div');
    div.classList.add('bc');
    div.innerHTML=`
    <div class="bg-d">
    <button id="del" class="back">Назад</button>
    <div class="bg-i">
    <img src="./images/st.png" alt="photo">
    </div>
    <div class="bg-c">
    <h1>Кожаные ортопедические стельки</h1>
    
    <div class="bg-t">
    <div class="bg-t-child"><h2>Цена</h2><h2>295 грн</h2></div>
    <div class="bg-t-child"><h3>Код</h3><h3>14012303</h3></div>
    <div class="bg-t-child"><h3>Наличие</h3><h3>есть</h3></div>
    <div class="bg-t-child"><h3>Размер</h3><h3>35 - 42</h3></div>
    <div class="bg-t-child"><button id="fist" name="describe" class="btn-opt btn-opt-on">Описание</button><button id="second" name="character" class="btn-opt">Характеристика</button></div>
    <div class="bg-t-child-p">
    <p class="bg-p">
    <p><strong>Применяются при плоскостопии и плосковальгусной стопе, так как оказывают плюсневую и продольную поддержку.</strong></p>
    <p><strong>Особенности.</strong></p>
    <p>Стельки  изготовлены из термопласта. Специальная конструкция способствует равномерному распределению нагрузки веса и уменьшает давление на связки. Кожаное покрытие делает ортопедическое изделие комфортным для применения. Стопа не потеет и не скользит в обуви. Пяточная область имеет смягченную структуру, что положительно влияет на устранение пяточной шпоры и снятия боли во время ходьбы.</p>
    <p><string>Показания к применению</string></p>
    <p>поперечный супинатор</p>
    <p>плоскостопие</p>
    <p>боли в пятке</p>
    <p>полая стопа</p>
    <p>плосковальгусная стопа</p>
    <p><string>Преимущества стелек</string></p>
<p>Продольная и плюсневая поддержка.
Размерный ряд от 35 до 44 размера.
Материал термопласт с кожаным покрытием.
Предотвращение пяточной шпоры.</p>
    </div>

    <div class="bg-t-child-p text-off">
    <p><strong>ХАРАКТЕРИСТИКИ</strong></p>
    <hr>
    <p>Тип	-------------------------------------- стельки</p>
    <p>Вид --------------------------------------	профилактические</p>
    <p>Размер обуви --------------------------------------	36, 37, 38, 39, 40, 41, 42, 43, 44, 45</p>
    <p>Возрастная категория --------------------------------------	для взрослых, для подростков</p>
    <p>Вид обуви --------------------------------------	закрытая</p>
    <p>Функциональное назначение --------------------------------------	профилактика плоскостопия</p>
<p>Материал  --------------------------------------	натуральная кожа</p>
<p>Цвет  --------------------------------------	бежевый</p>
<p>Особенности  --------------------------------------	ортопедические</p>
<p>Функциональное назначение  --------------------------------------	Плоско-вальгусная деформация стопы</p>
<p>Функциональное назначение  --------------------------------------	Пяточная шпора</p>
<p>Верхний слой  --------------------------------------	Кожаное покрытие</p>
<p>Назначение  --------------------------------------	корригирующие</p>
</div>

</p>

    </div>
    
    </div>
    
    </div>
    `;

    

    document.body.append(div);
    const btn1 = document.getElementById('fist');
    const btn2 = document.getElementById('second');

    btn1.addEventListener('click',(e)=>{
        e.target.classList.add('btn-opt-on');
        btn2.classList.remove('btn-opt-on');
        const textBlock = document.querySelectorAll('.bg-t-child-p');
        textBlock.forEach(item=>item.classList.remove('text-off'));
        textBlock[1].classList.add('text-off');

    });
    btn2.addEventListener('click',(e)=>{
        e.target.classList.add('btn-opt-on');
        btn1.classList.remove('btn-opt-on');
        const textBlock = document.querySelectorAll('.bg-t-child-p');
        textBlock.forEach(item=>item.classList.remove('text-off'));
        textBlock[0].classList.add('text-off');

    });
    const del = document.getElementById('del');
    del.addEventListener('click',()=>{
        div.remove();
    })
})
