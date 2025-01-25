import {NextRequest} from "next/server";
import {ImageResponse} from "next/og";
import Image from "next/image";

export const runtime = "edge";

const interBold = fetch(new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url))
    .then((res) => res.arrayBuffer());

const icon = fetch(new URL("../../icon.png", import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
    try {
        const fontBold = await interBold;
        const iconPNGBuffer = await icon;

        const iconBase64 = Buffer.from(iconPNGBuffer).toString('base64');
        const iconSrc = `data:image/png;base64,${iconBase64}`;

        const {searchParams} = req.nextUrl;
        const title = searchParams.get("title");

        if (!title) {
            return new Response("Title is required", {status: 400});
        }

        const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

        return new ImageResponse((
            <div tw="h-full w-full flex flex-col items-center justify-center bg-white text-[32px] font-semibold">
                <img src={iconSrc} alt="code-with-raf-icon" width="75" height="75"/>
                <div tw="mt-10">Code With Raf</div>
                <div tw="text-slate-500 text-xl mt-3">{heading}</div>
            </div>
        ), {
            width: 1200,
            height: 630,
            fonts: [{
                name: "Inter",
                data: fontBold,
                style: "normal",
                weight: 700
            }]
        })

    } catch {
        return new Response("Failed to generate image", {status: 500});
    }
}