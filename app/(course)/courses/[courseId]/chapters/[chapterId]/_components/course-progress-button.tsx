"use client"

import { CheckCircle, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CourseProgressButtonProps {
    chapterId: string;
    courseId: string;
    nextChapterId?: string;
    isCompleted: boolean;
}

export const CourseProgressButton = ({
    chapterId,
    courseId,
    nextChapterId,
    isCompleted,
}: CourseProgressButtonProps) => {
    const Icon  = isCompleted ? XCircle : CheckCircle
    return (
        <Button
            type="button" 
            variant={isCompleted ? "outline" : "success"}
        >
            {isCompleted ? "Not completed" : "Mark as complete"}
            <Icon className="h-4 w-4 ml-2"/>
        </Button>
    )
}