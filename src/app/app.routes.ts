import { Routes } from '@angular/router';





export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'readArticle',
        loadComponent: () => import('./components/read-article/read-article.component').then(m => m.ReadArticleComponent)
    },
    {
        path: 'not-found',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
