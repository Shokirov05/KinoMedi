// src/trailer-comment/interface/trailer-comment.interface.ts

export interface TrailerComment {
    id: number;
    trailer_id: number;
    user_id: string;
    comment_text: string;
    created_at: Date;
  }
  