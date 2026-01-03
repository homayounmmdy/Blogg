"use client";
import { useEffect, useState } from "react";
import StaticData from "../config/StaticData";
import HorizontalCard from "./HorizontalCard";

interface Article {
  id: number;
  title: string;
  imgurl: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

const GridSection = () => {
  const [randomArticles, setRandomArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Shuffle and pick 6 random articles from "others"
    const shuffled = [...StaticData.others].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setRandomArticles(selected);
  }, []);

  return (
    <div className="mt-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {randomArticles.map((post) => (
          <HorizontalCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default GridSection;
