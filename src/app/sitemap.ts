import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ibrahim-abdelatif.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/theory`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        ...projects.map((project) => ({
            url: `${baseUrl}/projects/${project.id}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: project.featured ? 0.85 : 0.7,
        })),
    ];
}
