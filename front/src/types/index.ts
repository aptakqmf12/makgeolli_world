export interface Makgeolli {
  id: string;
  name: string;
  price?: number;
  comment?: string;
  flavor?: {
    sweet: number;
    acid: number;
    carbonic: number;
    body: number;
  };
}
