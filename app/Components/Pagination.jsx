"use client";
import { useState } from "react";
export default function Pagination() {

    const [page, setPage] = useState(1);

    const changePage = (newPage) => {
        setPage(newPage);
    }

    {/* Pagination UI */ }
    return (
    <div className="w-full flex justify-center items-center mt-8 text-sm">
        <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-1">
            <span className="px-3 py-1">Page 1 of 366</span>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pageNum) => (
                <button
                    onClick={() => changePage(pageNum)}
                    key={pageNum}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${pageNum === 1 ? 'bg-primary text-onPrimary' : 'hover:bg-gray-100'
                        }`}
                >
                    {pageNum}
                </button>
            ))}

            <button
                className="px-3 py-1 bg-primary text-onPrimary font-medium hover:bg-primary/90 rounded transition-colors"
            >
                NEXT
            </button>
            </div>
        </div>
    );
}