import { Host } from './cards';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}

export type Reviews = Review[];

export type ReviewsItem = {
  id: number;
  review: Reviews;
};

export type ReviewsList = ReviewsItem[];
