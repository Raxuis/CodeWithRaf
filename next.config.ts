import type {NextConfig} from "next";
import createMdx from '@next/mdx';

const nextConfig: NextConfig = {
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
    }
};

const withMdx = createMdx({});

export default withMdx(nextConfig);
