
// inisialisasi variable
const STORAGE_KEY = 'books';
const RENDER_EVENT = 'render books'

const books = []
 
// event saat load web
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inputBook')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBook()    
  })
  loadDataFromStorage();
})

// keperluarn local storage
const saveData = () => {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
}

const loadDataFromStorage = () => {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);
 
  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// toggle untuk mengambahkan input book
const toggleInput = document.querySelectorAll('.hidden-form');
toggleInput.forEach(toggleBook => {
  toggleBook.addEventListener('click', () => {
    const toggleHidden = document.getElementById('toggle-hidden');
    if (toggleHidden.hidden) {
      toggleHidden.removeAttribute('hidden');
    } else {
      toggleHidden.setAttribute('hidden', true);
    }
  });
});

// event render data yang masuk
document.addEventListener(RENDER_EVENT, function () {
  const searchTerm = document.getElementById('searchBookTitle').value.toLowerCase();
  const unread = document.getElementById('incompleteBookshelfList');
  const readed = document.getElementById('completeBookshelfList');
  unread.innerHTML = '';
  readed.innerHTML = '';

  for (const book of books) {
    const bookTitle = book.title.toLowerCase();
    if (bookTitle.includes(searchTerm)) {
      const bookShelf = makeBookshelf(book);
      if (!book.isComplete) {
        unread.append(bookShelf);
      } else {
        readed.append(bookShelf);
      }
    }
  }
});

// fun search buku
const searchBook = document.getElementById('searchBookTitle')
  searchBook.addEventListener('input', () => {
  document.dispatchEvent(new Event(RENDER_EVENT));
})

// fun tambah buku
const addBook = () => {
  let id = +new Date()
  const title = document.getElementById('inputBookTitle').value
  const author = document.getElementById('inputBookAuthor').value
  const year = document.getElementById('inputBookYear').value
  const isComplete = document.getElementById('inputBookIsComplete').checked

  const book = helper(id, title, author, year, isComplete)
  books.unshift(book)
  document.dispatchEvent(new Event(RENDER_EVENT))

  document.getElementById('inputBookTitle').value = '';
  document.getElementById('inputBookAuthor').value = '';
  document.getElementById('inputBookYear').value = '';
  document.getElementById('inputBookIsComplete').checked = false;

  document.getElementById('toggle-hidden').setAttribute('hidden', true);

  notification('behasil menambahkan buku')
  saveData()
}

const helper = (id, title, author, year, isComplete) => {
  const value = { id, title, author, year, isComplete }
  return value
}

// fun buat element buku
const makeBookshelf = (book) => {
  const title = document.createElement('h3')
  title.innerText = `Book Title: ${book.title}`

  const author = document.createElement('p')
  author.innerText = `Penulis: ${book.author}`

  const year = document.createElement('p')
  year.innerText = `Tahun: ${book.year}`

  const buttonRemove = document.createElement('button')
  buttonRemove.classList.add('button-book','danger-button')
  buttonRemove.innerText = 'Hapus buku'

  buttonRemove.addEventListener('click', () => {
    removeBook(book.id)
  })

  const divAction = document.createElement('div')
  divAction.classList.add('action')

  if(book.isComplete) {
    const buttonUndo = document.createElement('button')
    buttonUndo.classList.add('button-book','primary-button')
    buttonUndo.innerText = 'Belum Selesai dibaca'

    buttonUndo.addEventListener('click', () => {
      undoCompletedBook(book.id)
    })

    divAction.append(buttonUndo, buttonRemove)
  } else {
    const buttonDone = document.createElement('button')
    buttonDone.classList.add('button-book','primary-button')
    buttonDone.innerText = 'selesai dibaca'

    buttonDone.addEventListener('click', () => {
      CompletedBook(book.id)
    })

    divAction.append(buttonDone, buttonRemove)
  }

  const article = document.createElement('article')
  article.classList.add('book-item')
  article.append(title, author, year, divAction)

  return article
}

// fun undo completed book
const undoCompletedBook = (id) => {
  const selectBook = findId(id)

  books[selectBook].isComplete = false
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData()
}

// fun completed book
const CompletedBook = (id) => {
  const selectBook = findId(id)

  if(selectBook == null) return

  books[selectBook].isComplete = true
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData()
}

// fun hapus buku
const removeBook = (id) => {
  const target = findId(id);
 
  if (target === -1) return;
 
  books.splice(target, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  notification('berhasil menghapus buku')
  saveData()
}

// fun cari buku buat keperluan remove sama percompletedan
const findId = (id) => {
  for (const index in books) {
    if (books[index].id == id) {
      return index;
    }
  }
 
  return -1;
}

// fun untuk menampilkan notif singkat saat add dan remove buku
const notification = (text) => {
  const notif = document.getElementsByClassName('notification')[0]
  const textNotif = document.getElementById('text-notif')

  notif.removeAttribute('hidden')
  textNotif.innerText = text

  setTimeout(() => {
    notif.setAttribute('hidden', true)
    textNotif.innerText = ''
  },3000)
}

