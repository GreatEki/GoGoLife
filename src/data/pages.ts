export interface Content {
    type: string;
    title: string;
    properties: {
        categories: string[];
    };
}

export interface PagesInterface {
    title: string;
    icon: string;
    url: string;
    content: Content[];
}
export const pages: PagesInterface[] = [
    { title: 'Home', icon: 'fas fa-home', url: '/', content: [] },
    {
        title: 'Municipality',
        icon: 'fas fa-university',
        url: '/municipality',
        content: [
            { type: 'post', title: 'Mayor Messages', properties: { categories: ['messages'] } },
            { type: 'post', title: 'News', properties: { categories: ['news'] } },
            { type: 'post', title: 'Schedules and Services', properties: { categories: ['schedules', 'services'] } },
            { type: 'post', title: 'Taxes and Fees', properties: { categories: ['taxes'] } }
        ]
    },

    { title: 'Communicate', icon: 'fas fa-comments', url: '/communicate', content: [] },
    { title: 'Civil', icon: 'fas fa-exclamation-triangle', url: '/civil', content: [] },
    { title: 'COVID', icon: 'fas fa-band-aid', url: '/covid', content: [] },
    { title: 'Agenda', icon: 'fas fa-calendar-alt', url: '/agenda', content: [] }
];
