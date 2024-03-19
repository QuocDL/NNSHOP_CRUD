export interface IProduct{
    id: number | string
    title: string
    description: string
    price: number
    oldprice?: number
    category: string
    image: string
    sales: {
        saleNumber: string
        saleBackgroud: string
    }
}