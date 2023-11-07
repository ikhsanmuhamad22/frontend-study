export interface Employe {
  id: string,
  name: string,
  division: string
}

export interface Menager extends Employe {
  numberOfEmployes: number,
}