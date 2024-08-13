import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

const CourseLayout = async ({
    children,
    params
}: {
    children: React.ReactNode;
    params: { courseId: string };
}) => {
    const { userId } = auth();

    if (!userId){
        return redirect("/");
    }

    const course = await db.course.findUnique({
        where: { 
            id: params.courseId 
        },
        include: {
            chapters: {
                where: {
                    isPublished: true,
                },
                include: {
                    userProgress: {
                        where: {
                            userId, 
                        },
                    },
                },
                orderBy: {
                    position: "asc",
                },
            },
        },
    });

    return (
        <div>
            {children}
        </div>
    )
}

export default CourseLayout