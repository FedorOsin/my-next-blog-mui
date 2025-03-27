// src/store/store.ts
import { create } from "zustand";
import { Article } from "~/types/Article"; // Используем псевдоним

export interface BlogState {
  articles: Article[];
  addComment: (
    articleSlug: string,
    comment: { name: string; text: string }
  ) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  articles: [
    {
      slug: "kak-rabotat-s-css-grid",
      title: "Как работать с CSS Grid",
      content:
        "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS...",
      date: "1 месяц назад",
      category: "Front-end",
      minutesRead: 3,
      likes: 4,
      imageUrl: "/images/mini.jpg", // <---- Картинка для карточки на главной странице
      detailImageUrl: "/images/Safari (Catalina) - Dark 1.jpg",
      comments: [], // Начальный пустой массив комментариев
    },
    // Добавь сюда больше моковых статей (убедись, что они соответствуют типу Article)
  ],
  addComment: (articleSlug: string, comment: { name: string; text: string }) =>
    set((state) => ({
      articles: state.articles.map((article) =>
        article.slug === articleSlug
          ? { ...article, comments: [...article.comments, comment] }
          : article
      ),
    })),
}));
