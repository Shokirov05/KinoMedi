// src/payment/interface/payment.interface.ts

export interface Payment {
    id: number;
    orderID: string;
    amount: number;
    status: string;
    card: string;
  }
  