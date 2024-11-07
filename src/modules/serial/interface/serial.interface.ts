// src/serial/interface/serial.interface.ts

export interface Serial {
    id: number;
    name: string;
    genre: string;
    year: string;
    language: string;
    age_limit: string;
    serial_vid?: string; 
    image: string;
  }
  