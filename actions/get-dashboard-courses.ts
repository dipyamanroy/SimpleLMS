import { Category, Chapter, Course } from "@prisma/client"

import { db } from "@/lib/db";

type CourseWithProgressWithCategory = Course & {
    category: Category;
    chapters: Chapter[];
    progress: number | null;
}

type DashboardCourses = {
    completedCourses: CourseWithProgressWithCategory[],
    coursesInProgress: CourseWithProgressWithCategory[],
}

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
    try {
        const purchasedCourses = = await db.purchase.findMany({
            where: {
                userId: userId,
            },
            select: {
                course: {
                    include: {
                        category: true,
                        chapters: {
                            where: {
                                isPublished: true,
                            }
                        },
                    },
                }
            }
        });

        const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithCategory[];

    } catch (error) {
        console.log("[GET_DASHBOARD_COURCES]", error);
        return {
            completedCourses: [],
            coursesInProgress: [],
        };
    }
}