export interface ICarouselItem {
  id: number;
  image: string;
}

export interface ICarouselInitialState {
  currentId: number;
  items: ICarouselItem[];
}
