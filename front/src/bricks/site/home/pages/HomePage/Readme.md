### Import

```js static
import { HomePage } from 'bricks'
```

### Usage

```jsx static
<HomePage  />
```

### Example

```jsx
const props = {
  title: 'Trouver le meilleur prêt immobilier n’a jamais été aussi simple',
  cta: 'Simuler mon prêt',
  score: {
    count: 682,
    rate: '9,6'
  },
  args: {
    argument_1: {
      title: 'Le meilleur taux,<br />pour vous',
      content: 'En 5 minutes vous simulez le taux que Pretto peut négocier pour vous.<br />Nous vous accompagnons jusqu’a la signature du prêt.'
    },
    argument_2: {
      title: 'Des experts, avec les meilleurs outils',
      content: 'Avec l’aide d’un expert Pretto vous affinez votre demande de crédit et optimisez votre dossier : nos algorithmes vont partout.'
    },
    argument_3: {
      title: 'Aucun frais,<br />100% transparent',
      content: 'Aucun frais pour vous, ce sont les banques qui nous rémunèrent.<br />Notre service est sans engagement et 100% transparent.'
    }
  },
  banks: {
    title: 'Nous sommes bien plus qu’un courtier',
    content: 'Nos algorithmes analysent les offres des meilleures banques afin d’identifier le financement sur-mesure le plus adapté à votre projet.',
    items: [
      { slug: 'credit_foncier', size: 'medium' },
      { slug: 'bred', size: 'large' },
      { slug: 'bred_espace', size: 'medium' },
      { slug: 'credit_agricole', size: 'large' },
      { slug: 'lcl', size: 'medium' },
      { slug: 'caisse_d_epargne', size: 'large' },
      { slug: 'bnp_paribas', size: 'large' },
      { slug: 'axa_banque', size: 'small' },
      { slug: 'credit_du_nord', size: 'large' },
      { slug: 'societe_generale', size: 'small' }
    ]
  },
  press: {
    title: 'Pretto dans la presse',
    links: [
      {
        href: 'https://www.lesechos.fr/pme-regions/innovateurs/0600642869979-pretto-le-courtier-immobilier-en-ligne-qui-mobilise-8-millions-deuros-2242637.php',
        slug: 'les-echos',
        title: 'Les Echos'
      }
    ]
  },
  steps: {
    title: 'Comment ça marche ?',
    items: [
      { title: 'Simulez votre prêt', content: 'Pretto est le seul comparateur de taux immobilier en ligne vraiment transparent.' },
      { title: 'Nos experts à votre écoute', content: 'Avec votre conseiller Pretto, vous affinez votre demande de crédit et optimisez votre dossier : apport, assurance, prêts aidés...' },
      { title: '🍾 Obtenez votre prêt !', content: 'Pretto vous accompagne jusqu’à la signature de votre <a href="/pret-immobilier">crédit immobilier</a>, sans frais et sans engagement. ' }
    ]
  }
}
const trustpilot = {
  logo: '',
  reviewCount: '',
  ratingValue: '',
  sameAs: '',
  url: ''
}
;
<TrustpilotContext.Provider value={trustpilot}>
  <HomePage {...props} />
</TrustpilotContext.Provider>
```
