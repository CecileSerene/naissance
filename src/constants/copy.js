export const COPY = {
  header: {
    title: 'Merci pour votre amour et votre générosité ♡',
    intro:
      'Chère famille, chers amis,<br>Nous sommes tellement heureux de préparer l\'arrivée de notre petite fille.<br>Votre attention et votre soutien est pour nous le plus beau des cadeaux. Si le cœur vous en dit, vous pouvez choisir dans cette liste un cadeau pour notre bébé.<br>Cécile et Alexandre',
  },
  banner: {
    title: 'Trois façons simples de participer',
    bank: {
      title: 'Par virement bancaire',
      description: 'Réservez ou participez à un cadeau pour le montant de votre choix.',
      name: "Alexandre ou Cécile POIRRIER",
      iban: "FR76 4061 8803 6600 0408 1302 277",
      bic: "BOUS FRPP XXX"
    },
    postal: {
      title: 'Par envoi postal',
      description: 'Envoyez votre cadeau chez nous.<br><span style="color:#e76f51">Livraisons uniquement à partir de septembre, autrement nous ne serons pas là pour les recevoir</span>',
      address: 'Notre adresse :<br>Cécile et Alexandre POIRRIER<br>19 avenue Louis Barthou<br>35000 Rennes<br>Tél. : 0666024819'
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
