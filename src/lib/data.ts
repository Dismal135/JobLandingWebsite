import dashbaord from '@/app/images/dashboard.png';
import dashboardicon from '@/app/images/dashboardicon.png';
import magazine from '@/app/images/ffcMagazine.png';
import newspaper from '@/app/images/newspaper.png';

export const websites = [
    {
        name: 'Nextjs Dashboard',
        article: 'This is a Acme dashboard brought to you by Nextjs for tracking nextjs teammember invoices and revenue chart.',
        link: '/nextjsdashboard',
        href: 'https://nextjs-dashboardpth.vercel.app',
        image: dashbaord,
        icon: dashboardicon
    },
    {
        name: 'FreeCodeCamp Magazine',
        article: 'This is a Magazine brought to you by FreeCodeCamp to announce CURRICULUM',
        link: '/ffcmagazine',
        href: 'https://ffc-magazine.vercel.app',
        image: magazine,
        icon: newspaper
    }
]

export const websitesDetails = [
    {
        id: 'nextjsdashboard',
        name: 'Next.js Dashboard',
        type: 'Dashboard',
        description: 'Revenue Chart, latest invoices, and CRUD for team members.',
        usage: 'For tracking invoice activities.',
        technologies: 'Next.js, shadcn, TypeScript, Zod, etc.',
        image: dashbaord,
        href: 'https://nextjs-dashboardpth.vercel.app',
        icon: dashboardicon
    },
    {   
        id: 'ffcmagazine',
        name: 'FreeCodeCamp Magazine',
        type: 'Single Page',
        description: 'Write article.',
        usage: 'For documentation.',
        technologies: 'HTML, CSS',
        image: magazine,
        href: 'https://ffc-magazine.vercel.app',
        icon: newspaper
    }
];
