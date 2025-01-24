import {Link} from "next-view-transitions";
import {Calendar, SquareArrowOutUpRight} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

interface PostItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    tags: string[];
}

export function PostItem({slug, title, description, date, tags}: PostItemProps) {
    return (
        <article className="flex flex-col gap-2 border-border border-b py-3 relative">
            <div className="absolute top-3 right-3">
                <Link href={slug} className={buttonVariants({variant: "outline", size: "sm"})}>
                    <SquareArrowOutUpRight className="size-8"/>
                </Link>
            </div>
            <div>
                <h2 className="text-2xl font-bold">
                    <Link href={slug}>
                        {title}
                    </Link>
                </h2>
                <div className="text-muted-foreground max-w-none">
                    {description}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                        <Calendar className="size-4"/>
                        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
                    </dd>
                </dl>
            </div>
            <div className="w-full flex gap-2">
                {tags.map((tag) => (
                    <Badge key={tag} className="cursor-default">
                        {tag}
                    </Badge>
                ))}
            </div>
        </article>
    )
}