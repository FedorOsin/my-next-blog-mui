export interface Article {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  minutesRead: number;
  likes: number;
  imageUrl: string; // Картинка для главной страницы (карточки)
  detailImageUrl?: string; // Картинка для страницы статьи (необязательное поле)
  comments: { name: string; text: string }[];
}
