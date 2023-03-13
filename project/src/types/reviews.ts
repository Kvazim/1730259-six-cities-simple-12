export type Review = {
  avatarUrl: string;
  name: string;
  score: number;
  data: string;
  text: string;
}

export type Reviews = Review[];

export type ReviewsItem = {
  id: number;
  review: Reviews;
};

export type ReviewsList = ReviewsItem[];
