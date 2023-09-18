const books = []
let RENDER_EVENT = 'render books'

document.addEventListener(RENDER_EVENT, function () {
  const unread = document.getElementById('incompleteBookshelfList');
  unread.innerHTML = '';
 
  const readed = document.getElementById('completeBookshelfList');
  readed.innerHTML = '';

  for (const book of books) {
    const bookShelf = makeBookshelf(book);
    if(!book.isCompleted) {
      unread.append(bookShelf)
    } else {
      readed.append(bookShelf)
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inputBook')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBook()    
  })
})

const addBook = () => {
  let id = +new Date()
  const title = document.getElementById('inputBookTitle').value
  const author = document.getElementById('inputBookAuthor').value
  const year = document.getElementById('inputBookYear').value
  const isCompleted = document.getElementById('inputBookIsComplete').checked

  const book = helper(id, title, author, year, isCompleted)
  books.unshift(book)
  document.dispatchEvent(new Event(RENDER_EVENT))

  document.getElementById('inputBookTitle').value = '';
  document.getElementById('inputBookAuthor').value = '';
  document.getElementById('inputBookYear').value = '';
  document.getElementById('inputBookIsComplete').checked = false;
}

const helper = (id, title, author, year, isCompleted) => {
  const value = { id, title, author, books, year, isCompleted }
  return value
}

const makeBookshelf = (book) => {
  const title = document.createElement('h3')
  title.innerText = `Book Title: ${book.title}`

  const author = document.createElement('p')
  author.innerText = `Penulis: ${book.author}`

  const year = document.createElement('p')
  year.innerText = `Tahun: ${book.year}`

  const buttonRemove = document.createElement('button')
  buttonRemove.classList.add('red')
  buttonRemove.innerText = 'Hapus buku'

  buttonRemove.addEventListener('click', () => {
    removeBook(book.id)
  })

  const divAction = document.createElement('div')
  divAction.classList.add('action')

  if(book.isCompleted) {
    const buttonUndo = document.createElement('button')
    buttonUndo.classList.add('green')
    buttonUndo.innerText = 'Belum Selesai dibaca'

    buttonUndo.addEventListener('click', () => {
      undoCompletedBook(book.id)
    })

    divAction.append(buttonUndo, buttonRemove)
  } else {
    const buttonDone = document.createElement('button')
    buttonDone.classList.add('green')
    buttonDone.innerText = 'selesai dibaca'

    buttonDone.addEventListener('click', () => {
      CompletedBook(book.id)
    })

    divAction.append(buttonDone, buttonRemove)
  }

  const article = document.createElement('article')
  article.classList.add('book_item')
  article.append(title, author, year, divAction)

  return article
}

const undoCompletedBook = (id) => {
  const selectBook = findId(id)

  books[selectBook].isCompleted = false
  document.dispatchEvent(new Event(RENDER_EVENT));
}

const CompletedBook = (id) => {
  const selectBook = findId(id)

  if(selectBook == null) return

  books[selectBook].isCompleted = true
  document.dispatchEvent(new Event(RENDER_EVENT));
}

const removeBook = (id) => {
  const target = findId(id);
 
  if (target === -1) return;
 
  books.splice(target, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

const findId = (id) => {
  for (const index in books) {
    if (books[index].id == id) {
      return index;
    }
  }
 
  return -1;
}