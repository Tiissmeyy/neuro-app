import styles from "./subpage.module.css"
import { satis, roboto } from "@/app/fonts"

const Subpage = ({content}) => {
    const content_int = parseInt(content)
    let content_jsx
    
    content_int === 1 ? content_jsx = <div className={`${styles.subpage} ${roboto.className}`}>
        <h1 className={satis.className}>Suivi Psychologique</h1>
        <p>Le suivi psychologique est un accompagnement dont le but est de faire changer un comportement qui pose problème ou changer des croyances négatives et irréelles incorporées dans le schéma de pensée.</p>
        <p>Le psychologue psychothérapeute avec une écoute bienveillante et attentive, surveille (sans jugement) les mécanismes de la pensée en place.</p>
        <p>Ces mécanismes peuvent être fonctionnels ou dysfonctionnels. Quand ils sont dysfonctionnels, le psychothérapeute dispose de techniques d’entretien qui permettent de réorienter les pensées ou les croyances (irréelles) pour redirigér vers des réseaux adaptatifs propres à chacun.</p>
        <p>Une psychothérapie peut être conseillée, pour des perturbations comportementales ou pour tout autre problème entraînant une souffrance psychologique. Le but est de favoriser chez le patient des changements significatifs dans son fonctionnement cognitif, émotionnel ou comportemental</p>
            
        <h2 className={satis.className}>Pour qui ?</h2>
        <p>Le suivi psychologique s’adresse aussi bien aux enfants qu’aux adultes.</p>
        <h2 className={satis.className}>Méthode</h2>
        <p>La prise en charge nécessite un temps d’observation et d’entretien avec l’individu (et ses parents lorsqu’il s’agit d’un enfant ou d’un adolescent).</p>
        <p>Pour les enfants le travail par la parole est associé aux jeux et dessins afin qu’ils puissent se sentir en confiance et s’exprimer avec plus d’aisance.</p>
        <p>Une première séance de 30 min est donc effectuée pour comprendre la demande et permet de fournir une analyse fonctionnelle de la situation. Le cadre des séances ultérieures pourra ensuite être défini.</p>
        <h2 className={satis.className}>Objectifs</h2>
        <p>- Cesser de souffrir psychologiquement (phobies, angoisses, anxiété, panique, déprimes récurrentes...).</p>
        <p>- Régler des problèmes affectifs ou relationnels (obsessions, timidité, estime de soi, échecs amoureux...).</p>
        <p>- Modifier des comportements qui nuisent au bien-être (stress post-traumatique, dépendances diverses, maux imaginaires, dysfonctions sexuelles...).</p>
        <p>- Faire face à une crise existentielle et redéfinir ses objectifs de vie (après quoi je cours?, réorientation de carrière...).</p>
        <p>- Démarche de bien-être et développement personnel : meilleure estime de soi et connaissance plus précise de ses besoins, amélioration l’adéquation entre ses valeurs et la réalité de leur vie.</p>
    </div> : ""
    content_int === 2 ? content_jsx = <div className={`${styles.subpage} ${roboto.className}`}>
        <h1 className={satis.className}>L'EMDR</h1>
        <p>La thérapie EMDR (Eye Movement Desensitization and Reprocessing ou Désensibilisation et Retraitement par les Mouvements Oculaires) permet de retraiter des vécus traumatiques, non digérés, à forte ou faible dose émotionnelle.</p>
            
        <h2 className={satis.className}>Pour qui ?</h2>
        <p>L’EMDR s’adresse à toutes les personnes souffrant de troubles divers consécutifs à un débordement des capacités d’adaptation.</p>
        <p>Ces troubles peuvent engendrés des croyances dites dysfonctionnelles qui peuvent conduire aux symptômes suivants (liste non-exhaustive) :</p>
        <p>-  crises d’angoisse</p>
        <p>-  attaque panique</p>
        <p>-  anxiété généralisé</p>
        <p>-  dépression</p>
        <p>-  perte de confiance en soi</p>
        <p>-  baisse de l’estime de soi</p>
        <p>-  compulsion de répétition</p>
        <p>-  reviviscence d’une situation traumat(flash-backs, cauchemars)</p>
        <p>-  addiction</p>

        <h2 className={satis.className}>Méthode</h2>
        <p>Une séance d’EMDR dure de 60 à 90 mn, pendant laquelle le patient peut traverser des émotions intenses, et en fin de séance, peut également ressentir une nette amélioration.</p>
        <p>Cette approche neurophysiologique a l’avantage de ne pas nécessiter de parler des situations douloureuses. Le traitement s’opère sur les images, sons ou n’importe quelle autre sensation ancrée en mémoire et en lien avec le souvenir .(source qui sera ciblé) via :</p>
        <p>- une stimulation sensorielle bi-alternée (droite-gauche) qui se pratique par mouvements oculaires (le patient suit les doigts du thérapeute qui passent de droite à gauche devant ses yeux)</p>
        <p>- un stimuli auditif (avec un casque qui fait entendre alternativement un son à droite puis à gauche) OU un stimuli tactile (par tapotement alternatifs des genoux (droite et gauche du patient) ou sur le dos de la main du patient).</p>

        <h2 className={satis.className}>Objectifs</h2>
        <p>L'idée est d’éliminer les symptômes causés par les petits ou grands traumatismes.</p>
        <p>- De soigner les GRANDS traumatismes le plus souvent rencontrés chez les victimes d’agressions et maltraitances physiques, psychologiques, et sexuelles, accidents, deuils, attentats, catastrophes naturelles et chez les civils et militaires victimes de guerre</p>
        <p>- De soigner les PETITS traumatismes causés généralement par des situations qui favorisent un sentiment d’insécurité, un manque de contrôle ou des événement qui brisent l’estime de soi. </p>

        <h2 className={satis.className}>UNE EFFICACITÉ PROUVÉE</h2>
        <p>Depuis près de de 30 ans la thérapie EMDR a prouvé son efficacité à travers de très nombreuses études scientifiques contrôlées mises en place par des chercheurs et cliniciens du monde entier. Elle est principalement validée pour le trouble de stress post-traumatique (TSPT), qui est la dénomination scientifique de ce qu’on appelle aussi plus communément le psychotrauma.</p>
        <p>A ce titre, la thérapie EMDR est recommandée, entre autres instances publiques nationales et internationales, par :</p>
        <p>La Haute Autorité de Santé depuis Juin 2007
        L’Organisation Mondiale de la Santé depuis 2013
        Un rapport Inserm de Juin 2015 fait un état des lieux de la validation de l’efficacité de l’hypnose et de l’EMDR Evaluation de l’efficacité de la pratique de l’hypnose.</p>
    </div> : ""
    content_int === 3 ? content_jsx = <div className={`${styles.subpage} ${roboto.className}`}>
    <h1 className={satis.className}>Bilan Neuropsychologique</h1>
    <p>Le bilan neuropsychologique est une évaluation approfondie du système cognitif, englobant la mémoire, l'attention, la concentration, le langage, l'efficience intellectuelle et tant d’autres mécanismes impliqués dans le raisonnement. 
Grâce à des outils d’évaluation spécifiques adaptés au niveau et à l’âge de la personne , le neuropsychologue identifie la nature et l’intensité des perturbations cognitives, en même temps qu’il repère les ressources et le potentiel pour proposer des solutions qui visent à réduire le retentissement d’éventuelles difficultés au quotidien.</p>
        
    <h2 className={satis.className}>Pour qui ?</h2>
    <p>Pour toutes les personnes rencontrant des difficultés :</p>
    <p>-  d’attention/concentration</p>
    <p>-  d'organisation</p>
    <p>-  de mémoire</p>
    <p>-  relationelle et solciales</p>
    <p>-  de language</p>
    <p>-  de l'ecture et d'écriture</p>
    <p>-  de calcul</p>
    <p>-  reviviscence d’une situation traumat(flash-backs, cauchemars)</p>
    <p>-  addiction</p>

    <h2 className={satis.className}>Méthode</h2>
    <p>Le Bilan se passe en trois temps :</p>
    <p>1. Entretien (anamnese)</p>
    <p>2. Evaluation</p>
    <p>3. Restitution des résultats</p>
    <p>Il faut compter 1 heure pour l’entretien et 1 heure pour la restitution des résultats.</p>
    <p>Le temps de l’évaluation quant à lui varie en fonction du rythme et de la fatigue de la personne (2 heures minimum pour cette étape).</p>
    <p>Certains tests sont effectués par écrit d’autres informatisés.</p>
    <p>À savoir que le neuropsychologue travaille en moyenne 3 heures en plus du temps consacré à l’évaluation pour la cotation des résultats et la rédaction du compte-rendu qui est remis en main propre le jour de la restitution.</p>

    <h2 className={satis.className}>Objectifs</h2>
    <p>Le bilan permet d’orienter et d’accompagner le diagnostic envisagé par un médecin.</p>
    <p>Il permet également aux parents et à l’entourage de mieux comprendre le fonctionnement cognitif de la personne évaluée. Il est par conséquent possible, à partir du tableau clinique dressé d’aider la personne à optimiser son fonctionnement et ainsi contribuer à son épanouissement personnel.</p>
</div> : ""

    return (
        content_jsx
    )
}

export default Subpage