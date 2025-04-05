import Head from "next/head"

interface SEOHeadProps {
    title?: string
    description?: string
    keywords?: string
    ogImage?: string
    ogUrl?: string
}

export function SEOHead({
    title = "Muhammad Ibrahim | LinkedIn Expert & Personal Branding Specialist",
    description = "Transform your LinkedIn presence with expert profile optimization, content strategy, and growth tactics from Pakistan's top 5% LinkedIn expert.",
    keywords = "LinkedIn expert, personal branding, profile optimization, LinkedIn Pakistan, professional branding",
    ogImage = "/images/muhammad-ibrahim.png",
    ogUrl = "https://yourwebsite.com",
}: SEOHeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </Head>
    )
}

