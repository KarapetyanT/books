export interface IBook{
  id: number,
  title: string,
  pages: number,
  price: number,
  author: string
}

export interface IAuthor{
  id: number|string
  name: string,
  surname: string
}