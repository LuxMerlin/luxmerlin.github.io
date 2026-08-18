import { boolean } from "astro:schema";

export interface Skill {
    name: string;
    featured: boolean;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
    {
        category: "Languages & Runtimes",
        items: [
            { name: "C#", featured: true},
            { name: ".NET", featured: true},
            { name: ".NET Framework", featured: false},
            { name: "Node.js", featured: false},
            { name:"JavaScript", featured: true},
            { name: "TypeScript", featured: true},
            { name: "Python", featured: false},
            { name: "Rust", featured: false},
            { name: "HTML", featured: false},
            { name: "CSS", featured: false}
        ]
    },
    {
        category: "Cloud & Infrastructure",
        items: [
            { name:"AWS", featured: false},
            { name:"Docker", featured: true},
            { name:"Terraform", featured: false},
            { name:"TeamCity", featured: false},
            { name:"Octapus", featured: false}
        ]
    },
    {
        category: "Architecture & Data",
        items: [
            { name: "PostgreSQL", featured: true },
            { name: "SQLite", featured: false },
            { name: "MSSQL", featured: false },
            { name: "Redis", featured: false },
            { name: "Distributed Systems", featured: false },
        ]
    }
];