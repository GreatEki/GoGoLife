export interface PostInterface {
    title: string;
    category: string;
    content: string;
}

export const posts: PostInterface[] = [
    { title: 'Our new youth space for all', category: 'messages', content: '' },
    { title: 'Christmas message 2020', category: 'messages', content: '' },
    { title: 'Works in the avenue 4th of july finished on schedule', category: 'news', content: '' },
    { title: 'City pools open doors to all citizens', category: 'news', content: '' },
    { title: 'Working hours of services', category: 'schedules', content: '' },
    { title: 'Working hours of sportive sites', category: 'schedules', content: '' },
    { title: 'Water Customer service', category: 'schedules', content: '' },
    { title: 'Licencing taxes', category: 'taxes', content: '' },
    { title: 'Water taxes', category: 'taxes', content: '' },
    { title: 'Garbage taxes', category: 'taxes', content: '' }
];
