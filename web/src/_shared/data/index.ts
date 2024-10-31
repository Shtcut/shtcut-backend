import {
    Columns,
    GeneralType,
    IntegrationSectionType,
    Plan,
    PostInterface,
    SocialPost,
    Task
} from '@shtcut/types/types';
import dayjs from 'dayjs';
import { Activity, Command, PieChart } from 'lucide-react';

export const IMPACT: GeneralType[] = [
    {
        id: 1,
        icons: Activity,
        title: 'Publishing',
        text: 'Effortlessly streamline your link strategy with our intuitive links Manager. Simplify publishing and enhance collaboration seamlessly.'
    },
    {
        id: 2,
        icons: PieChart,
        title: 'Analytics',
        text: 'Get valuable insights and performance metrics for optimizing strategies.'
    },
    {
        id: 3,
        icons: Command,
        title: 'Engagement',
        text: 'Boost interaction and track performance effortlessly. Elevate engagement with streamlined link strategies.'
    }
];

export const AMOUNTS: GeneralType[] = [
    {
        id: 1,
        title: '500K',
        text: 'Global paying customers'
    },
    {
        id: 2,
        title: '200M',
        text: 'Links & QR Codes created monthly'
    },
    {
        id: 3,
        title: '20B',
        text: 'Connections (clicks & scans) monthly'
    },
    {
        id: 4,
        title: '800+',
        text: 'App integrations'
    }
];

export const BENEFITS: GeneralType[] = [
    {
        id: 1,
        title: 'Link Manager'
    },
    {
        id: 2,
        title: 'QR Codes'
    },
    {
        id: 3,
        title: 'URL Shorten-er'
    },
    {
        id: 4,
        title: 'Link History'
    },
    {
        id: 5,
        title: 'Link Bio'
    }
];

export const PLANS: Plan[] = [
    {
        id: 1,
        status: 'Free',
        amt: 0,
        text: 'Start your next side project',
        data: [
            'Users',
            'Custom domains',
            'Branded links total',
            'Link automation',
            'Redirects',
            'Tracked clicks',
            'Folders '
        ]
    },
    {
        id: 2,
        status: 'Pro',
        amt: 20,
        section: 'per user / month',
        text: 'Accelerate link creation seamlessly with our features',
        data: [
            'All features of free plan',
            'Country targeting',
            'Region targeting',
            'Link expiration by Date',
            'Export raw click data to S3, Middleware)',
            'Link expiration by Click Limit',
            'Password protection',
            'QR code '
        ]
    },
    {
        id: 3,
        status: 'Enterprise',
        amt: 'Custom',
        section: 'per user / month',
        text: 'Accelerate link creation seamlessly with our features',
        data: [
            'All features of Pro plan',
            'Multiple teams',

            'SLA of 99.9% uptime',
            'Mobile targeting',
            'Tags for links',
            'SAML Single-Sign-On (SSO)',
            'QR code',
            'Tools & Extensions'
        ]
    }
];

export const featureData = [
    {
        id: 1,
        title: 'Link Management',
        text: 'Users can shorten long url links, customize links with branded domains, edit and options to set expiration dates',
        img: '/images/user.png.png'
    },
    {
        id: 2,
        title: 'QR Codes',
        text: 'Automatically generate QR codes for shortened links, customize and also track. ',
        img: '/images/folder.png.png'
    },
    {
        id: 3,
        title: 'Custom Domains',
        text: 'Set up payroll and bonuses for all your employees, and never be late on salaries.',
        img: '/images/bulb.png.png'
    },
    {
        id: 4,
        title: 'Analytics',
        text: 'Get real-time visibility into every expense and payment, with a neat dashboard.',
        img: '/images/paper.png.png'
    }
];

export const integrationData: IntegrationSectionType[] = [
    {
        id: '01.',
        title: 'Social Media Platforms',
        text: ' Integrate with social media platforms for seamless sharing of shortened links.',
        img: ['/images/twitter.png', '/images/instagram.png', '/images/fb.png']
    },
    {
        id: '02.',
        title: 'Email Marketing Tools',
        text: ' Provide integrations with email marketing platforms for link tracking and campaign optimization.',
        img: ['/images/mailchimp.png', '/images/rate.png']
    },
    {
        id: '03.',
        title: 'Analytics Platforms',
        text: 'Support integration with analytics platforms for comprehensive performance tracking and reporting.',
        img: ['/images/circle.png', '/images/graph.png']
    }
];

export const PricingData = [
    {
        id: 1,

        title: 'Free',
        text: 'Ideal for individuals who need quick access to basic features. ',
        amt: '$0',
        plan: 'Month',
        btnText: 'Get Started',
        plans: [
            'Users',
            'Custom domains',
            'Branded links total',
            'Link automation',
            'Redirects',
            'Tracked clicks',
            'Folders',
            'Folders'
        ]
    },
    {
        id: 2,
        title: 'Professional',
        text: 'Accelerate link creation seamlessly with our features ',
        amt: '$20',
        plan: 'per user / Month',
        btnText: 'Start free trial',
        plans: [
            'All features of free plan',
            'Country targeting',
            'Region targeting',
            'Link expiration by Date',
            'Export raw click data to S3,',
            'Unlimited Sharing',
            'Create teams to collaborate on designs',
            'Unlimited Sharing'
        ]
    },
    {
        id: 3,

        title: 'Enterprise',
        text: 'Accelerate link creation seamlessly with our features ',
        amt: 'Custom',
        plan: '',
        btnText: 'Start Free Trial',
        plans: [
            'All features of Pro plan',
            'Multiple teams',
            'SLA of 99.9% uptime',
            'Mobile targeting',
            'Tags for links',
            'SAML Single-Sign-On (SSO)',
            'QR code',
            'Tools & Extensions'
        ]
    }
];
export const PlanCardsData = [
    {
        id: 1,

        title: 'Free',
        text: 'Everything you need to track work ',
        amt: '$0',
        plan: 'Month',
        btnText: 'Get Started',
        plans: ['Unlimited issues', 'Unlimited projects', '50 users + guests', 'Importers', 'APIs']
    },
    {
        id: 2,
        title: 'Pro',
        text: 'Best for tracking and measuring progress ',
        amt: '$20',
        plan: 'per user / Month',
        btnText: 'Get Started',
        plans: [
            'Active Cycles',
            'Advanced analytics',
            'Integrations + automation',
            'Integrations + automation',
            'Plane AI',
            'Tailored onboarding'
        ]
    },
    {
        id: 3,

        title: 'Custom',
        text: 'Ideal for unique, cross-functional set-ups',
        amt: 'Custom',
        plan: '',
        btnText: 'Get custom pricing',
        plans: [
            'RBAC and audit logs',
            'Custom SAML + OIDC',
            'Auto-backups',
            'Auto-backups',
            'Managed cloud',
            'Managed cloud',
            'Whiteglove implementation + support',
            'Whiteglove implementation + support'
        ]
    }
];

export const manageData = [
    {
        name: 'No hidden fees.'
    },
    {
        name: '100% security. Guaranteed.'
    },
    {
        name: 'Team Collaboration'
    }
];

export const subNav = [
    {
        id: 1,
        images: '/images/links.png',
        link: '/url-shorten',
        text: 'URL Shorten'
    },
    {
        id: 2,
        images: '/images/social-media.png',
        link: '/pricing',
        text: 'Social Media'
    },
    {
        id: 3,
        images: '/images/social-media.png',
        link: '/pricing',
        text: 'Email Marketing'
    }
];

export const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
];

export const colors = [
    { id: '1', value: '#000000' },
    { id: '2', value: '#DE3221' },
    { id: '3', value: '#EF8001' },
    { id: '4', value: '#188639' },
    { id: '5', value: '#229CE0' },
    { id: '6', value: '#2B5BD7' },
    { id: '7', value: '#6B52D1' },
    { id: '8', value: '#D94280' },
    { id: '9', value: '#764B24' },
    { id: '10', value: '#7C7D7D' },
    { id: '11', value: '#0000FB' },
    { id: '12', value: '#EEAAFF' }
];

export const logos = [
    {
        id: '1',
        name: 'whatsapp',
        logoUrl: '/logos/logos_whatsapp-icon.png'
    },
    {
        id: '2',
        name: 'shtcut',
        logoUrl: '/logos/shtcut.png'
    },
    {
        id: '3',
        name: 'instagram',
        logoUrl: '/logos/skill-icons_instagram.png'
    },
    {
        id: '4',
        name: 'facebook',
        logoUrl: '/logos/facebook.png'
    },
    {
        id: '5',
        name: 'youtube',
        logoUrl: '/logos/logos_youtube-icon.png'
    },
    {
        id: '6',
        name: 'bitly',
        logoUrl: '/logos/bitl.png'
    },
    {
        id: '7',
        name: 'twitter',
        logoUrl: '/logos/prime_twitter.png'
    },
    {
        id: '8',
        name: 'cloud',
        logoUrl: '/logos/simple-icons_icloud.png'
    },
    {
        id: '9',
        name: 'scan',
        logoUrl: '/logos/Scan.png'
    },
    {
        id: '10',
        name: 'skype',
        logoUrl: '/logos/logos_skype.png'
    }
];
export const postData_2 = [
    {
        title: 'Migrating to Shtcut',
        images: '/blog/customer-service.png',
        color: '#3538CD',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
        timeline: 'Lana Steiner • 18 Jan 2024',
        objectData: [
            { text: 'Engineering', color: '#026AA2' },
            { text: 'Customer Stories', color: '#C11574' }
        ]
    },
    {
        title: 'Building your API Stack',
        images: '/blog/building.png',
        color: '#C11574',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
        timeline: 'Phoenix Baker • 19 Jan 2024',
        objectData: [
            { text: 'Education', color: '#027A48' },
            { text: 'Customer Stories', color: '#C11574' }
        ]
    }
];

export const postData_3: PostInterface[] = [
    {
        id: '1',
        title: 'Bill Walsh leadership lessons',
        images: '/blog/leadership.png',
        color: '#3538CD',
        text: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        timeline: 'Alec Whitten • 17 Jan 2022',
        objectData: [
            { text: 'Leadership', color: '#6941C6' },
            { text: 'Company News', color: '#363F72' }
        ]
    },
    {
        id: '2',
        title: 'PM mental models',
        images: '/blog/mental.png',
        color: '#C11574',
        text: 'Mental models are simple expressions of complex processes or relationships.',
        timeline: 'Demi WIlkinson • 16 Jan 2022',
        objectData: [
            { text: 'Engineering', color: '#026AA2' },
            { text: 'Education', color: '#3538CD' },
            { text: 'Changelog', color: '#C4320A' }
        ]
    },
    {
        id: '3',
        title: 'What is Wireframing?',
        images: '/blog/Wireframing.png',
        color: '#C11574',
        text: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        timeline: 'Candice Wu • 15 Jan 2022',
        objectData: [
            { text: 'Leadership', color: '#6941C6' },
            { text: 'Engineering', color: '#026AA2' }
        ]
    },
    {
        id: '4',
        title: 'How collaboration makes us better designers',
        images: '/blog/collabo.png',
        color: '#C11574',
        text: 'Collaboration can make our teams stronger, and our individual designs better.',
        timeline: 'Natali Craig • 14 Jan 2022',
        objectData: [
            { text: 'Design', color: '#6941C6' },
            { text: 'Research', color: '#026AA2' }
        ]
    },
    {
        id: '5',
        title: 'Our top 10 Javascript frameworks to use',
        images: '/blog/javascript.png',
        color: '#C11574',
        text: 'JavaScript frameworks make development easy with extensive features and functionalities.',
        timeline: 'Drew Cano • 13 Jan 2022',
        objectData: [
            { text: 'Changelogs', color: '#6941C6' },
            { text: 'Tools', color: '#C11574' },
            { text: 'SaaS', color: '#C01048' }
        ]
    },
    {
        id: '6',
        title: 'Podcast: Creating a better CX Community',
        images: '/blog/creating.png',
        color: '#C11574',
        text: 'Starting a community doesn’t need to be complicated, but how do you get started?',
        timeline: 'Orlando Diggs • 12 Jan 2022',
        objectData: [
            { text: 'Podcasts', color: '#6941C6' },
            { text: 'Customer Success', color: '#363F72' }
        ]
    }
];
export const dummyData: number[] = [1, 2, 3, 4, 5];
export const authSlides = [
    {
        id: 1,
        image: '/images/qrcode-d.png',
        title: '  Generate short URLs with just a click',
        text: 'Say goodbye to chaos and hello to productivity',
        subTitle: 'URL Shortener',
        subText: 'Paste in any long url, make it sharable, trackable and customizable with just a few clicks.'
    },
    {
        id: 2,
        image: '/images/qrcode-d.png',
        title: 'Craft personalized surveys effortlessly',
        text: 'Say goodbye to chaos and hello to productivity',
        subTitle: 'Survey Creation',
        subText: 'Paste in any long url, make it sharable, trackable and customizable with just a few clicks.'
    },
    {
        id: 3,
        image: '/images/qrcode-d.png',
        title: 'Engage customers through targeted email campaigns.',
        text: 'Say goodbye to chaos and hello to productivity',
        subTitle: 'Email Marketing',
        subText: 'Paste in any long url, make it sharable, trackable and customizable with just a few clicks.'
    },
    {
        id: 4,
        image: '/images/qrcode-d.png',
        title: 'Stay connected with your audience!',
        text: 'Say goodbye to chaos and hello to productivity',
        subTitle: 'Social Media Management',
        subText: 'Paste in any long url, make it sharable, trackable and customizable with just a few clicks.'
    }
];

export const trustImage = ['cornell.png', 'elastic.png', 'kissflow.png', 'thought.png', 'trans.png', 'mag.png'];

export const InviteList = [
    { label: 'Member', value: 'member' },
    { label: 'Client', value: 'client' }
];

export const PropPlan = [
    'All features of Pro plan',
    'Multiple teams',
    'SLA of 99.9% uptime',
    'Mobile targeting',
    'Tags for links',
    'SAML Single-Sign-On (SSO)',
    'QR code',
    'Tools & Extensions'
];
export const PlanLimit = [
    '20 Users',
    '10  Custom domains',
    '10 Branded links total',
    '10 Link automation',
    '05 Redirects',
    '10 Tracked clicks'
];

export const users = [
    {
        id: 1,
        name: 'Neil Sims',
        email: 'neil.sims@flowbite.com',
        position: 'Member',
        status: 'Online',
        img: '/docs/images/people/profile-picture-1.jpg',
        date: '2/04/24'
    },
    {
        id: 2,
        name: 'Bonnie Green',
        email: 'bonnie@flowbite.com',
        position: 'Member',
        status: 'Online',
        img: '/docs/images/people/profile-picture-3.jpg',
        date: '2/04/24'
    },
    {
        id: 3,
        name: 'Jese Leos',
        email: 'jese@flowbite.com',
        position: 'Vue JS Developer',
        status: 'Online',
        img: '/docs/images/people/profile-picture-2.jpg',
        date: '2/04/24'
    },
    {
        id: 4,
        name: 'Thomas Lean',
        email: 'thomes@flowbite.com',
        position: 'UI/UX Engineer',
        status: 'Online',
        img: '/docs/images/people/profile-picture-5.jpg',
        date: '2/04/24'
    },
    {
        id: 5,
        name: 'Leslie Livingston',
        email: 'leslie@flowbite.com',
        position: 'SEO Specialist',
        status: 'Offline',
        img: '/docs/images/people/profile-picture-4.jpg',
        date: '2/04/24'
    },
    {
        id: 6,
        name: 'Leslie Livingston',
        email: 'leslie@flowbite.com',
        position: 'SEO Specialist',
        status: 'Offline',
        img: '/docs/images/people/profile-picture-4.jpg',
        date: '2/04/24'
    },
    {
        id: 7,
        name: 'Leslie Livingston',
        email: 'leslie@flowbite.com',
        position: 'SEO Specialist',
        status: 'Offline',
        img: '/docs/images/people/profile-picture-4.jpg',
        date: '2/04/24'
    },
    {
        id: 8,
        name: 'Leslie Livingston',
        email: 'leslie@flowbite.com',
        position: 'SEO Specialist',
        status: 'Offline',
        img: '/docs/images/people/profile-picture-4.jpg',
        date: '2/04/24'
    }
];
export const capacities = ['0-10', '11-30', '31-50', '51-100', 'Above 100'];
export const modules = [
    {
        key: 'URL Shortener',
        value: 'shtcut-shortener'
    },
    {
        key: 'Social Media Manager',
        value: 'shtcut-social-manager'
    },
    {
        key: 'Survey Creation',
        value: 'shtcut-survey'
    },
    {
        key: 'Email Marketing',
        value: 'shtcut-marketing'
    },
    {
        key: 'Web Builder',
        value: 'shtcut-web-builder'
    }
];

export const tabs = [
    { id: 'general', label: 'General' },
    { id: 'tags', label: 'Tags' },
    { id: 'billings', label: 'Billing' },
    { id: 'workspace', label: 'Workspace' },
    { id: 'security', label: 'Security' },
    { id: 'notification', label: 'Notification' },
    { id: 'api-keys', label: 'API Keys' }
];

export const social_media = [
    {
        id: '1',
        default_img: ['/social/default_fb.png', '/social/default_fb.png'],
        name: 'Facebook',
        isActive: false
    },
    {
        id: '2',
        default_img: ['/social/instagram.png', '/social/instagram.png'],
        name: 'Instagram',
        isActive: true
    },
    {
        id: '3',
        default_img: ['/social/tiktok.png', '/social/tiktok.png'],
        name: 'Tiktok',
        isActive: true
    },
    {
        id: '4',
        default_img: ['/social/twitter.png', '/social/twitter.png'],
        name: 'Twitter',
        isActive: true
    },
    {
        id: '5',
        default_img: ['/social/default_linkedin.png', '/social/default_linkedin.png'],
        name: 'Linkedin',
        isActive: false
    },
    {
        id: '6',
        default_img: ['/social/default_youtube.png', '/social/default_youtube.png'],
        name: 'Youtube',
        isActive: false
    },
    {
        id: '7',
        default_img: ['/social/default_pininterest.png', '/social/default_pininterest.png'],
        name: 'Pinterest',
        isActive: false
    }
];

export const socialPosts: SocialPost[] = [
    {
        channels: ['/social/Twitter.png', '/social/instagram.png', '/social/instagram.png'],
        status: 'Published',
        post: 'We built Safari to be the best browser for your Mac, iPhone and iPad.......',
        date: 'Nov 12, 2024 12:45 PM',
        label: 'Marketing',
        author: 'John Doe'
    },
    {
        channels: ['/social/Twitter.png', '/social/instagram.png', '/social/instagram.png'],
        status: 'Scheduled',
        post: 'We built Safari to be the best browser for your Mac, iPhone and iPad.......',
        date: 'Nov 12, 2024 12:45 PM',
        label: 'Brands',
        author: 'Jane Smith'
    },
    {
        channels: ['/social/Twitter.png', '/social/instagram.png', '/social/instagram.png'],
        status: 'Scheduled',
        post: 'We built Safari to be the best browser for your Mac, iPhone and iPad.......',
        date: 'Nov 12, 2024 12:45 PM',
        label: ['Marketing', 'Tech'],
        author: 'Alex Johnson'
    },
    {
        channels: ['/social/Twitter.png', '/social/instagram.png', '/social/instagram.png'],
        status: 'Failed',
        post: 'We built Safari to be the best browser for your Mac, iPhone and iPad.......',
        date: 'Nov 12, 2024 12:45 PM',
        label: ['Marketing', 'Tech'],
        author: 'Alex Johnson'
    },
    {
        channels: ['/social/Twitter.png', '/social/instagram.png', '/social/instagram.png'],
        status: 'Draft',
        post: 'We built Safari to be the best browser for your Mac, iPhone and iPad.......',
        date: 'Nov 12, 2024 12:45 PM',
        label: ['Marketing', 'Tech'],
        author: 'Alex Johnson'
    }
];

export const connectChannel = [
    { channels: '/social/instagram.png', title: 'Instagram', description: 'Profile' },
    { channels: '/social/outline-twitter.png', title: 'Twitter', description: 'Profile' },
    { channels: '/social/outline-fb.png', title: 'Facebook', description: 'Page or group' },
    { channels: '/social/tiktok.png', title: 'Tiktok', description: 'Business account' },
    { channels: '/social/youtube.png', title: 'Youtube', description: 'Channel' },
    { channels: '/social/linkedin.png', title: 'Linkedin', description: 'Page or Profile' },
    { channels: '/social/pininterest-outline.png', title: 'Pinterest', description: 'Profile' },
    { channels: '/social/threads.png', title: 'Threads', description: 'Profile' }
];
export const eventsData = [
    {
        id: '1',
        title: dayjs().startOf('day').add(1, 'hour').format('hh:mm A'),
        start: dayjs().startOf('day').add(1, 'hour').format(),
        end: dayjs().startOf('day').add(2, 'hours').format(),
        eventColor: 'blue'
    },
    {
        id: '2',
        title: dayjs().startOf('day').add(4, 'hours').format('hh:mm A'),
        start: dayjs().startOf('day').add(4, 'hours').format(),
        end: dayjs().startOf('day').add(5, 'hours').format(),
        eventColor: 'green'
    },
    {
        id: '3',
        title: dayjs().add(1, 'day').startOf('day').add(1, 'hour').format('hh:mm A'),
        start: dayjs().add(1, 'day').startOf('day').add(1, 'hour').format(),
        end: dayjs().add(1, 'day').startOf('day').add(2, 'hours').format(),
        eventColor: 'red'
    },
    {
        id: '4',
        title: dayjs().add(2, 'days').startOf('day').add(3, 'hours').format('hh:mm A'),
        start: dayjs().add(2, 'days').startOf('day').add(3, 'hours').format(),
        end: dayjs().add(2, 'days').startOf('day').add(4, 'hours').format(),
        eventColor: 'orange'
    },
    {
        id: '5',
        title: dayjs().add(1, 'week').startOf('day').add(5, 'hours').format('hh:mm A'),
        start: dayjs().add(1, 'week').startOf('day').add(5, 'hours').format(),
        end: dayjs().add(1, 'week').startOf('day').add(6, 'hours').format(),
        eventColor: 'purple'
    },
    {
        id: '6',
        title: dayjs().add(2, 'weeks').startOf('day').add(2, 'hours').format('hh:mm A'),
        start: dayjs().add(2, 'weeks').startOf('day').add(2, 'hours').format(),
        end: dayjs().add(2, 'weeks').startOf('day').add(3, 'hours').format(),
        eventColor: 'yellow'
    },
    {
        id: '7',
        title: dayjs().add(1, 'month').startOf('day').add(3, 'hours').format('hh:mm A'),
        start: dayjs().add(1, 'month').startOf('day').add(3, 'hours').format(),
        end: dayjs().add(1, 'month').startOf('day').add(4, 'hours').format(),
        eventColor: 'pink'
    },
    {
        id: '8',
        title: dayjs().add(3, 'months').startOf('day').add(1, 'hour').format('hh:mm A'),
        start: dayjs().add(3, 'months').startOf('day').add(1, 'hour').format(),
        end: dayjs().add(3, 'months').startOf('day').add(2, 'hours').format(),
        eventColor: 'cyan'
    },
    {
        id: '9',
        title: dayjs().add(1, 'day').startOf('day').add(4, 'hours').format('hh:mm A'),
        start: dayjs().add(1, 'day').startOf('day').add(4, 'hours').format(),
        end: dayjs().add(1, 'day').startOf('day').add(5, 'hours').format(),
        eventColor: 'brown'
    },
    {
        id: '10',
        title: dayjs().add(2, 'weeks').startOf('day').add(6, 'hours').format('hh:mm A'),
        start: dayjs().add(2, 'weeks').startOf('day').add(6, 'hours').format(),
        end: dayjs().add(2, 'weeks').startOf('day').add(7, 'hours').format(),
        eventColor: 'teal'
    },
    {
        id: '11',
        title: dayjs().add(1, 'week').startOf('day').add(8, 'hours').format('hh:mm A'),
        start: dayjs().add(1, 'week').startOf('day').add(8, 'hours').format(),
        end: dayjs().add(1, 'week').startOf('day').add(9, 'hours').format(),
        eventColor: 'violet'
    },
    {
        id: '12',
        title: dayjs().subtract(7, 'days').startOf('day').add(9, 'hours').format('hh:mm A'),
        start: dayjs().subtract(7, 'days').startOf('day').add(9, 'hours').format(),
        end: dayjs().subtract(7, 'days').startOf('day').add(10, 'hours').format(),
        eventColor: 'orange'
    },
    {
        id: '13',
        title: dayjs().subtract(6, 'days').startOf('day').add(10, 'hours').format('hh:mm A'),
        start: dayjs().subtract(6, 'days').startOf('day').add(10, 'hours').format(),
        end: dayjs().subtract(6, 'days').startOf('day').add(11, 'hours').format(),
        eventColor: 'blue'
    },
    {
        id: '14',
        title: dayjs().subtract(5, 'days').startOf('day').add(11, 'hours').format('hh:mm A'),
        start: dayjs().subtract(5, 'days').startOf('day').add(11, 'hours').format(),
        end: dayjs().subtract(5, 'days').startOf('day').add(12, 'hours').format(),
        eventColor: 'green'
    },
    {
        id: '15',
        title: dayjs().subtract(4, 'days').startOf('day').add(14, 'hours').format('hh:mm A'),
        start: dayjs().subtract(4, 'days').startOf('day').add(14, 'hours').format(),
        end: dayjs().subtract(4, 'days').startOf('day').add(15, 'hours').format(),
        eventColor: 'yellow'
    },
    {
        id: '16',
        title: dayjs().subtract(3, 'days').startOf('day').add(8, 'hours').format('hh:mm A'),
        start: dayjs().subtract(3, 'days').startOf('day').add(8, 'hours').format(),
        end: dayjs().subtract(3, 'days').startOf('day').add(9, 'hours').format(),
        eventColor: 'red'
    },
    {
        id: '17',
        title: dayjs().subtract(2, 'days').startOf('day').add(12, 'hours').format('hh:mm A'),
        start: dayjs().subtract(2, 'days').startOf('day').add(12, 'hours').format(),
        end: dayjs().subtract(2, 'days').startOf('day').add(13, 'hours').format(),
        eventColor: 'purple'
    },
    {
        id: '18',
        title: dayjs().subtract(1, 'day').startOf('day').add(3, 'hours').format('hh:mm A'),
        start: dayjs().subtract(1, 'day').startOf('day').add(3, 'hours').format(),
        end: dayjs().subtract(1, 'day').startOf('day').add(4, 'hours').format(),
        eventColor: 'cyan'
    },
    {
        id: '19',
        title: dayjs().add(1, 'week').startOf('day').add(7, 'hours').format('hh:mm A'),
        start: dayjs().add(1, 'week').startOf('day').add(7, 'hours').format(),
        end: dayjs().add(1, 'week').startOf('day').add(8, 'hours').format(),
        eventColor: 'orange'
    },
    {
        id: '20',
        title: dayjs().add(2, 'weeks').startOf('day').add(9, 'hours').format('hh:mm A'),
        start: dayjs().add(2, 'weeks').startOf('day').add(9, 'hours').format(),
        end: dayjs().add(2, 'weeks').startOf('day').add(10, 'hours').format(),
        eventColor: 'pink'
    }
];

export const initialLabels = [
    { id: 'brands', name: 'Brands' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'tech', name: 'Tech' },
    { id: 'fashion', name: 'Fashion' }
];
export const labelColors = ['bg-[#8789F3]', 'bg-[#F4C029]', 'bg-[#F070AF]', 'bg-[#A5E534]'];

export const socialDropdown = [
    {
        img: '/social/fb-page.png',
        name: 'Facebook'
    },
    {
        img: '/social/instagram.png',
        name: 'Instagram'
    },
    {
        img: '/social/tiktok.png',
        name: 'Tiktok'
    },
    {
        img: '/social/Twitter.png',
        name: 'Twitter'
    },
    {
        img: '/social/linkedin.png',
        name: 'Linkedin'
    },
    {
        img: '/social/youtube.png',
        name: 'Youtube'
    },
    {
        img: '/social/pininterest-outline.png',
        name: 'Pinterest'
    }
];

export const initialColumns: Columns = {
    todo: {
        title: 'To do',
        items: [
            {
                id: '1',
                content: 'Improve cards readability',
                description:
                    'Enhance the visual clarity and spacing of the cards on the dashboard for better readability.',
                time: '21/03/22',
                comments: 3
            },
            {
                id: '2',
                content: 'Implement user authentication',
                description:
                    'Complete the user authentication feature, allowing users to sign in and register securely.',
                time: '21/03/22',
                comments: 1
            },
            {
                id: '7',
                content: 'Prepare API documentation',
                description:
                    'Write detailed documentation for the public API endpoints, ensuring all developers can use it effectively.',
                time: '1 day ago',
                comments: 2
            },
            {
                id: '8',
                content: 'Set up CI/CD pipeline',
                description: 'Automate the build and deployment process using a CI/CD pipeline for smoother updates.',
                time: '21/03/22',
                comments: 4
            },
            {
                id: '9',
                content: 'Design mobile view for homepage',
                description: 'Create a responsive design for the homepage to ensure it looks great on mobile devices.',
                time: '21/03/22',
                comments: 5
            }
        ]
    },
    pending: {
        title: 'In Progress',
        items: [
            {
                id: '3',
                content: 'Create social media post',
                description:
                    'Draft and design social media content for the upcoming product launch on Twitter, Facebook, and LinkedIn.',
                time: '30 minutes ago',
                comments: 7
            },
            {
                id: '4',
                content: 'Optimize database queries',
                description: 'Refactor and optimize slow-performing database queries to improve backend performance.',
                time: '2 hours ago',
                comments: 2
            },
            {
                id: '10',
                content: 'Refactor authentication logic',
                description:
                    'Streamline and clean up the authentication logic to ensure more secure and efficient user login flow.',
                time: '5 hours ago',
                comments: 0
            },
            {
                id: '11',
                content: 'Update design system components',
                description:
                    'Add new components and styles to the design system to maintain a consistent UI/UX across the platform.',
                time: '6 hours ago',
                comments: 4
            },
            {
                id: '12',
                content: 'Write unit tests for API',
                description:
                    'Add comprehensive unit tests for backend API functions to ensure their reliability and catch potential bugs early.',
                time: '8 hours ago',
                comments: 6
            }
        ]
    },
    completed: {
        title: 'Completed',
        items: [
            {
                id: '5',
                content: 'Polish Twitter post messaging',
                description:
                    'Refine the messaging and hashtags for the product launch post on Twitter to maximize engagement.',
                time: '1 day ago',
                comments: 12
            },
            {
                id: '6',
                content: 'Fix notification system bugs',
                description:
                    'Resolve bugs in the notification system to ensure users are properly notified of important updates.',
                time: '2 days ago',
                comments: 3
            },
            {
                id: '13',
                content: 'Deploy latest update to production',
                description:
                    'Successfully deploy the latest version of the application, including all recent bug fixes and features.',
                time: '3 days ago',
                comments: 0
            },
            {
                id: '14',
                content: 'Add analytics to marketing page',
                description: 'Integrate Google Analytics to track visitor behavior on the marketing page.',
                time: '4 days ago',
                comments: 2
            },
            {
                id: '15',
                content: 'Implement lazy loading for images',
                description: 'Improve page load times by implementing lazy loading for images on content-heavy pages.',
                time: '5 days ago',
                comments: 5
            }
        ]
    }
};
