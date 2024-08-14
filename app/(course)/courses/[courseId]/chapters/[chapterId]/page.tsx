import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { getChapter } from "@/actions/get-chapter";

const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string },
}) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const {
        chapter,
        course,
        muxData,
        attachments,
        nextChapter,
        userProgress,
        purchase,
    } = await getChapter({
        userId,
        chapterId: params.chapterId,
        courseId: params.courseId,
    })

    return ( 
        <div>
            Chapter Id!
        </div>
    );
}

export default ChapterIdPage;