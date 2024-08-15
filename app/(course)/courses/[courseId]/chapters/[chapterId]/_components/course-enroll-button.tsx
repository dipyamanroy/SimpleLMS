"use client"

import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format"

interface CourseEnrollButtonProps {
    price: number;
    courseId: string;
}

export const CourseEnrollButton = ({
    price,
    courseId,
}: CourseEnrollButtonProps) => {
    return (
        <Button>
            Enroll for {formatPrice(price)}
        </Button>
    )
}