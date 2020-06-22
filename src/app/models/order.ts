export interface Order {
  id: number,
  product: string,
  start_date: Date,
  end_date: Date,
  canceled_at: Date,
  recipient: {
    nome: string,
    rua: string,
    numero: number,
    cidade: string,
    estado: string,
    cep: number
  },
  deliveryMan: {
    name: string,
    avatar: {
      url: string,
      id: number,
      path: string
    }
  }
}
