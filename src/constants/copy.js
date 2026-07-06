export const COPY = {
  header: {
    title: 'Merci pour votre amour et votre générosité ♡',
    intro:
      'Nous sommes tellement heureux de préparer l\'arrivée de bébé. Vous pouvez participer à notre liste de naissance de la manière qui vous convient le mieux.',
  },
  banner: {
    title: 'Trois façons simples de participer',
    bank: {
      title: 'Par virement (RIB)',
      description: 'Participez librement du montant de votre choix.',
    },
    postal: {
      title: 'Par envoi postal',
      description: 'Choisissez un cadeau sur la liste et faites-le nous parvenir. /n <br>Livraisons uniquement à partir de Septembre </br>',
    },
    hand: {
      title: 'En main propre',
      description: 'Si on se voit bientôt, vous pouvez nous remettre le cadeau en main propre !',
    },
  },
  footer: {
    text: 'Chaque attention compte énormément pour nous et notre petit trésor.',
    signoff: 'Merci du fond du cœur ! ♡',
  },
  gifts: {
    badgeFullOnly: 'Offrir',
    badgePartial: 'Participation partielle possible',
    participate: 'Participer',
    offerFull: 'Offrir',
    offeredFull: 'Réservé',
    reservedBy: 'Réservé par',
    participations: 'Offert par :',
    availableCount: (n) => `${n} cadeau${n > 1 ? 'x' : ''} disponible${n > 1 ? 's' : ''}`,
    progress: (paid, price, percent) => `${paid} € sur ${price} €`,
  },
}
