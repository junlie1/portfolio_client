"use client";

import { useState, useMemo } from "react";
import Card, { CardProps } from "./Card";

interface CardListProps {
  items: CardProps[];
  itemsPerPage?: number;
}

export default function CardList({ items, itemsPerPage = 4 }: CardListProps) {
  console.log("items", items);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, itemsPerPage, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="space-y-8">
      {/* List card */}
      <div className="grid md:grid-cols-1 gap-30">
        {paginatedItems.map((item, index) => {
          let offsetClass = "md:translate-x-0";

          if (index % 2 === 0) {
            offsetClass = "md:translate-x-12";
          } else {
            offsetClass = "md:-translate-x-12";
          }

          return (
            <div
              key={item.title}
              className={`
                transition-transform duration-300
                ${offsetClass}
              `}
            >
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                index={index + 1}
              />
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`h-8 w-8 rounded-full text-xs md:text-sm flex items-center justify-center border transition ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
