import React, { memo } from 'react'

import * as B from '../../../../index'

const LinkDocumentary = () => (
  <B.LinkCard
    emoji=":tada:"
    title="Nos modèles"
    href="/guide/base-documentaire/"
    variant="accent-1"
    cta="Voir"
    content="Retrouvez tous les modèles de documents - gratuits et téléchargeables - dont vous aurez besoin pendant votre achat."
  />
)

export default memo(LinkDocumentary)
