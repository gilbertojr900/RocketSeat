/*
  Buscando e contando dados em Arrays

  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

  - Contar o numero de categorias e o numero de livros em cada categoria
  - Contar o numero de autories
  - Mostrar livros do autor Auguto Cury
  Transformar a função acima em uma função que ira receber o nome do autor e devolver os livros desse autor.
  */


  const booksByCategory = [
    {
      category: "Riqueza",
      books: [
        {
          title: "Os segredos da mente milionaria",
          author: "T. Harv Eker",
        },
        {
          title: "O homem mais rico da Babilônia",
          author: "George S. Clason",
        },
        {
          title: "Pai rico, pai pobre",
          author:"Robert T. Kiyosaki e Sharon L. Lechter",

        },
      ],
    },
  {
    category:"Inteligência Emocional",
    books:[
      {
        title:"Você é Insubstituivel",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury"
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey"
      }
    ]
  }
  ];
  

  const totalCategories = booksByCategory.length

  console.log(totalCategories);
  for(let category of booksByCategory){
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
  }


  function countAuthors(){
    let author = [];

    for(let category of booksByCategory){
      for(let books of category.books){
          if(author.indexOf(book.author)== -1){
            author.push(books.author)
          }
      }
    }
    console.log("Total de autores:",author.length)
  }
countAuthors();





function booksOfAugustoCury(){
  let books = [];

  for(let category of booksByCategory){
    for(let books of category.books){
        if(book.author == 'Augusto Cury'){
          books.push(books.title)
        }
    }
  }
  console.log("Livros do autor:",books)
}

booksOfAugustoCury()




function booksOfAuthor(author){
  let books = [];

  for(let category of booksByCategory){
    for(let books of category.books){
        if(book.author ==  author){
          books.push(books.title)
        }
    }
  }
  console.log(`Livros do autor: ${author}: ${books.join(', ')}`)
}

booksOfAuthor('Augusto Cury')