import { db } from "@/lib/db";
import { Course, Purchase } from "@prisma/client";

type PurchaseWithCourse = Purchase & {
    course: Course;
}

const groupByCourse = (purchases: PurchaseWithCourse[]) => {
    const grouped: { [courseTitle: string]: number } = {};

    purchases.forEach((purchase) => {
        const courseTitle = purchase.course.title;
        if (!grouped[courseTitle]) {
            grouped[courseTitle] = 0;
        } 
        grouped[courseTitle] += purchase.course.price!;
    });

    return grouped;
}