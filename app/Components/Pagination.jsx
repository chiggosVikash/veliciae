'use client';

import { useEffect } from "react";
import { usePageStore } from "@/app/stores/pageStore";
import useFilterOptionsStore from "@/app/stores/filterOptionsStore";
export default function Pagination() {
    const { page, count, getTotalProductsCount, setPage } = usePageStore();
    const { filterOptions } = useFilterOptionsStore();
    useEffect(() => {
        getTotalProductsCount(filterOptions);
    }, [filterOptions]);


    {/* Pagination UI */ }
    return (
        <div className="w-full flex justify-center items-center mt-8 text-sm">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-1">
                <button
                    onClick={() => {if(page > 1) setPage(page - 1)}}
                    className="px-3 py-1 bg-primary text-onPrimary font-medium hover:bg-primary/90 rounded transition-colors"
                >
                    PREV
                </button>
                <span className="px-3 py-1">Page {page} of {Math.ceil(count / 30)}</span>

                {Array.from({ length: Math.ceil(count / 30) }, (_, i) => i + 1).map((pageNum) => (
                    <button
                        onClick={() => setPage(pageNum)}
                        key={pageNum}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${pageNum === page ? 'bg-primary text-onPrimary' : 'hover:bg-gray-100'
                            }`}
                    >
                        {pageNum}
                    </button>
                ))}

                <button
                    onClick={() => {
                        if(page < Math.ceil(count / 30)) setPage(page + 1)
                    }}
                    className="px-3 py-1 bg-primary text-onPrimary font-medium hover:bg-primary/90 rounded transition-colors"
                >
                    NEXT
                </button>
            </div>
        </div>
    );
}