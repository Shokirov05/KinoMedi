// src/order/interface/order.interface.ts

export interface Order {
    id: string;
    userID: string;
    subscription: string;
    promocod: string;
    startData: Date;
    endData: Date;
  }
  