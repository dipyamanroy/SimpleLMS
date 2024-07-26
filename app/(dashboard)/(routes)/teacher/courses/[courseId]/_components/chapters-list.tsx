"use client";

import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";


interface ChaptersListProps {
    items: Chapter[];
    onReorder: (updateData: { id: string; position: number }[]) => void;
    onEdit: (id: string) => void;
}

export const ChaptersList = ({
    items,
    onReorder,
    onEdit,
}: ChaptersListProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [chapters, setChapters] = useState(items);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <div>
            Chapters List
        </div>
    );
}