
export { default } from 'next-auth/middleware';

export const config = {
    matcher: [
        '/listings/new',
        '/listings/edit/:id+'
    ]
}