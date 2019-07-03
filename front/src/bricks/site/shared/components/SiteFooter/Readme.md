### Import

```js static
import { SiteFooter } from 'bricks'
```

### Usage

```jsx static
<SiteFooter />
```

### Examples

```jsx
const props = {
  menus: [
    {
      items: [
        { title: 'En savoir plus', url: '/guide' },
        { title: 'Équipe', url: '/guide' },
        { title: 'FAQ', url: '/guide' },
        { title: 'Parrainer', url: '/guide' },
        { title: 'Presse', url: '/guide' },
        { title: 'Kit Média', url: '/guide' },
        { title: 'Partenariat', url: '/guide' },
        { title: 'Jobs', url: '/guide' },
        { title: 'Contact', url: '/guide' }
      ],
      name: 'À propos de Pretto'
    },
    {
      items: [
        { title: 'Courtier immobilier', url: '/guide' },
        { title: 'Achat immobilier', url: '/guide' },
        { title: 'Prêt immobilier', url: '/guide' },
        { title: 'Simulation prêt immobilier', url: '/guide' },
        { title: "Capacité d'emprunt", url: '/guide' },
        { title: 'Assurance prêt immobilier', url: '/guide' },
        { title: 'Hypothèque et caution', url: '/guide' },
        { title: 'Prêts aidés', url: '/guide' },
        { title: 'Ebook', url: '/guide' },
        { title: 'Lexique', url: '/guide' }
      ],
      name: 'Resources'
    },
    {
      items: [
        { title: 'Courtier immobilier', url: '/guide' },
        { title: 'Achat immobilier', url: '/guide' },
        { title: 'Prêt immobilier', url: '/guide' },
        { title: 'Simulation prêt immobilier', url: '/guide' },
        { title: "Capacité d'emprunt", url: '/guide' },
        { title: 'Assurance prêt immobilier', url: '/guide' },
        { title: 'Hypothèque et caution', url: '/guide' },
        { title: 'Prêts aidés', url: '/guide' },
        { title: 'Ebook', url: '/guide' },
        { title: 'Lexique', url: '/guide' }
      ],
      name: 'Questions fréquentes'
    },
    {
      items: [
        { title: 'Mentions légales', url: '/guide' },
        { title: 'CGU', url: '/guide' },
        { title: 'RGPD', url: '/guide' }
      ],
      name: 'Légal'
    }
  ],
  trustpilot: {
    count: '334',
    rate: '9.8'
  }
}
;<SiteFooter {...props} />
```
