const books = document.querySelectorAll('.book');
const headers = document.querySelectorAll('.book h2');
const adBlock = document.querySelector('.adv');
 const chapterLIstSecond = books[0].querySelectorAll('li');
 const chapterLIstFifth = books[5].querySelectorAll('li');
 const sixthBook = books[2].querySelectorAll('li');
 const newLi = document.createElement('li');

books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

 document.body.style.backgroundImage = 'url("./image/adv.jpg")';

 headers[4].innerHTML = 'Книга 3. this и Протопипы Объектов';
 headers[4].style.color = 'darkkhaki';
 adBlock.remove();


 chapterLIstSecond[4].before(chapterLIstSecond[6]);
 chapterLIstSecond[4].before(chapterLIstSecond[8]);

 chapterLIstFifth[2].before(chapterLIstFifth[9]);
 chapterLIstFifth[9].after(chapterLIstFifth[3]);
 chapterLIstFifth[4].after(chapterLIstFifth[2]);
 newLi.innerHTML = 'Глава 8: За пределами ES6';

 books[2].append(newLi);

 



