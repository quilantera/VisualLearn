interface LessonListHeaderProps {
    firstName: string;
    lessonNames: string[]
}
export function LessonListHeader({ firstName,lessonNames }: LessonListHeaderProps) {
    return (
        <ul className="bg-violet-950 dark:bg-gray-900 dark:border dark:border-slate-50 pr-10 pl-4 ml-2 flex items-center rounded text-white h-14 text-lg tracking-wider  font-normal">
            <li className="pl-5 text-left dark:tracking-wider w-2/5">{firstName}</li>
            {lessonNames.map((lessonName, index) => {
                return <li className="text-center w-1/5 dark:tracking-wider" key={index}>{lessonName}</li>
            })}
        </ul>)
}