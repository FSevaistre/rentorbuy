import React, { memo } from 'react'
import { Content, SubHeading } from '../../../index'
import './SponsorshipConditionsPage.scss'

const SponsorshipConditionsPage = () => {
  return (
    <div className="sponsorship-conditions-page">
      <Content>
        <div className="sponsorship-conditions-page--paragraph">
          Cette page vous donne un aperçu de notre programme de parrainage d’un proche et de son fonctionnement. Le
          programme a été conçu pour que vous soyez récompensé pour la promotion de Pretto.
        </div>

        <SubHeading>
          Qu
          {"'"}
          est-ce que le programme de parrainage Pretto ?
        </SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          Pretto offre à ses clients qui se sont inscrits la possibilité de promouvoir Pretto auprès de leurs proches.
          Les parrains doivent être des utilisateurs enregistrés de Pretto. Pour vous inscrire, rendez-vous ici :{' '}
          <a href="https://app.pretto.fr/">https://app.pretto.fr/</a>. Une fois inscrit, vous pourrez inviter vos
          proches et votre famille avec votre lien de parrainage unique. Votre lien de parrainage vous sera fourni sur
          votre page de parrainage Pretto :{' '}
          <a href="https://extra.pretto.fr/parrainage/" target="blank">
            https://extra.pretto.fr/parrainage/
          </a>
          . Veuillez vous connecter pour obtenir votre lien.
        </div>

        <SubHeading>Quelle est la récompense et comment est-elle envoyée ?</SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          Pour chaque parrainage réussi, vous aurez droit à une récompense en espèces de 100€ par virement. Le montant
          de cette récompense peut varier : c{"'"}
          est le montant affiché sur{' '}
          <a href="https://extra.pretto.fr/parrainage/" target="blank">
            https://extra.pretto.fr/parrainage/
          </a>{' '}
          qui fait foi. Votre lien de parrainage unique Pretto fait le suivi de toutes les personnes qui cliquent et
          s’inscrivent. Une fois la demande de prêt immobilier de votre filleul remplie, sa demande de crédit immobilier
          sera traitée.
        </div>

        <div className="sponsorship-conditions-page--paragraph">
          Pretto a le droit de changer la valeur et la structure de ces récompenses à tout moment. Le programme de
          parrainage Pretto est illimité. Si vous parrainez 10 proches et qu
          {"'"}
          ils réussissent à obtenir une crédit immobilier après avoir fait leur demande auprès de Pretto, vous recevrez
          10 récompenses en espèces de 100 €. Pour information, les parrainages effectués aux dates suivantes font l
          {"'"}objet de primes exceptionnelles :
          <ul>
            <li>Avant le 28 février 2018 : 200€</li>
            <li>Du 4 au 20 mai 2018 : 150€</li>
            <li>Du 30 novembre au 12 décembre 2018 : 200€</li>
          </ul>
        </div>

        <SubHeading>Utilisations interdites</SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          <div className="sponsorship-conditions-page--paragraph">
            3.1. Vous ne pouvez utiliser notre programme de parrainage que de bonne foi à des fins licites. Vous ne
            pouvez pas :
          </div>
          <ul>
            <li>
              créer plus d{"'"}
              un compte afin de vous inviter;
            </li>
            <li>
              inviter d{"'"}
              autres personnes qui ont créé des comptes en double;
            </li>
            <li>
              utilisez des informations de contact alternatives pour vous-même ou d{"'"}
              autres personnes ayant créé des comptes en double;
            </li>
            <li>inviter un client existant de Pretto;</li>
            <li>inviter des personnes à l’identité modifiée;</li>
            <li>
              utiliser le programme de parrainage d{"'"}
              un proche dans les cas suivants :
              <ul>
                <li>
                  - par tout moyen enfreignant une loi ou une réglementation locale, nationale ou internationale
                  applicable; ou
                </li>
                <li>- tout moyen illégal ou frauduleux, ou ayant un but ou un effet illégal ou frauduleux;</li>
              </ul>
            </li>
            <li>
              envoyer de la publicité ou du matériel promotionnel non désiré ou non autorisé ou toute autre forme de
              sollicitation similaire (spam); ou
            </li>
            <li>
              essayer d{"'"}
              éviter les conditions générales du programme de parrainage Pretto
            </li>
          </ul>
        </div>

        <SubHeading>Protection des données</SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          Notre page de parrainage a été conçue pour nous permettre de suivre vos filleuls et de récompenser les
          demandes de crédit immobilier validées. Vous n’avez à aucun moment accès à l’identité de vos filleuls, à leurs
          données ou informations relatives à leur demande de crédit immobilier et vice versa. Pretto ne divulguera
          aucune information concernant une personne ni son expérience avec Pretto. Vous n{"'"}
          avez pas le droit de recevoir et ne recevrez pas de mises à jour sur la demande de prêt de votre filleul en
          raison de contrôles de confidentialité et de protection des données
        </div>

        <SubHeading>Non-respect des conditions générales</SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          Pretto peut refuser de vous payer la prime de parrainage de parrainage en cas de soupçon que vous n{"'"}
          avez pas utilisé ce programme de bonne foi ou si vous avez violé le présent contrat. Nous déciderons si cet
          accord a été rompu. Lorsque cet accord est rompu, Pretto peut prendre les mesures que nous jugeons
          appropriées, y compris (sans toutefois s{"'"}y limiter) la résiliation de cet accord, la fermeture de votre /
          vos compte (s), la fermeture d{"'"}
          un ou plusieurs comptes de tiers et la suspension du programme de parrainage d{"'"}
          un proche.
        </div>

        <SubHeading>Limitation de la responsabilité légale</SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          Pretto n{"'"}
          accepte aucune responsabilité légale pour l{"'"}
          utilisation du programme de parrainage qui rompt cet accord.
        </div>

        <SubHeading>Modifications de cet accord</SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          Nous pouvons modifier cet accord à tout moment en modifiant cette page. Nous pouvons ou non vous informer des
          modifications apportées. L{"'"}
          utilisation continue du programme de parrainage signifie que vous acceptez le contrat en vigueur à ce
          moment-là. Pretto se réserve le droit de :
          <ul>
            <li>Annuler le programme de parrainage à tout moment et sans préavis.</li>
            <li>
              Si un parrainage a été effectué, Pretto ne sera pas obligé de payer de prime qui auraient été qualifiées
              de prime validée.
            </li>
          </ul>
        </div>

        <SubHeading>Contactez-nous</SubHeading>
        <div className="sponsorship-conditions-page--paragraph">
          Pour nous contacter avec des idées, des suggestions ou des problèmes avec notre programme de parrainage d{"'"}
          un proche, veuillez envoyer un courrier électronique à hello@pretto.fr.
        </div>
      </Content>
    </div>
  )
}
export default memo(SponsorshipConditionsPage)
