import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export default function ReviewCarousel({ testimonial }) {
    return (
        <Card className="max-w-sm mx-auto h-full">
            <CardHeader>
                <div className="flex">
                    {[...Array(testimonial.star)].map((_, i) => (
                        <span key={i} className="text-black text-lg">
                            ★
                        </span>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm text-gray-600 mb-2">
                    {testimonial.feedback}
                </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            </CardFooter>
        </Card>
    );
}
