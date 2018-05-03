import { Quote } from "./quote.interface";

export interface QuotesCategory {
    category: string,
    quotes: Quote[],
    icon: string
}
