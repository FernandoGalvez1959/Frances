/* Contenido del curso: Français Básico A1 (8 lecciones) */
window.APP = {
  id: "frances-basico-a1",
  langName: "francés",
  speechLang: "fr-FR",
  voicePrefix: "fr",
  contractions: false,
  LESSONS: [

  /* ---------- 1 ---------- */
  { title: "Saludos y presentarse",
    intro: "Aprende a saludar, despedirte y decir tu nombre.",
    items: [
      ["Bonjour", "bon-yur", "Buenos días"],
      ["Bonsoir", "bon-suár", "Buenas tardes (al anochecer)"],
      ["Salut", "sa-lü", "Hola (con amigos)"],
      ["Au revoir", "o ré-vuár", "Adiós"],
      ["Merci", "mer-sí", "Gracias"],
      ["S’il vous plaît", "sil vu plé", "Por favor"],
      ["Je m’appelle Fer", "yö ma-pel Fer", "Me llamo Fer"],
      ["Comment vous appelez-vous ?", "ko-man vu za-pe-lé vu", "¿Cómo se llama usted?"],
      ["Enchanté", "an-chan-té", "Encantado"],
      ["Comment allez-vous ?", "ko-man ta-lé vu", "¿Cómo está usted?"],
      ["Ça va bien, merci", "sa va bian mer-sí", "Estoy bien, gracias"],
      ["Et vous ?", "e vu", "¿Y usted?"],
      ["Bonne nuit", "bon nüi", "Buenas noches (al acostarse)"]
    ],
    tips: [
      "<b>Tú y usted.</b> Con familia y amigos se dice <b>tu</b>; con desconocidos y personas mayores, <b>vous</b> (usted). Ante la duda, usa siempre <b>vous</b>.",
      "<b>La «j».</b> Suena como una «y» suave, casi «zh»: <b>je</b> = «yö», <b>bonjour</b> = «bon-yur».",
      "Una mujer dice «enchantée» y un hombre «enchanté», pero suenan igual."
    ],
    dialogs: [
      { title: "Primer encuentro", lines: [
        ["Bonjour ! Je m’appelle Marie.", "¡Buenos días! Me llamo Marie."],
        ["Bonjour Marie ! Je m’appelle Fer.", "¡Buenos días, Marie! Me llamo Fer."],
        ["Enchantée !", "¡Encantada!"],
        ["Enchanté !", "¡Encantado!"]
      ]},
      { title: "¿Cómo está usted?", lines: [
        ["Bonsoir, comment allez-vous ?", "Buenas tardes, ¿cómo está usted?"],
        ["Ça va bien, merci. Et vous ?", "Estoy bien, gracias. ¿Y usted?"],
        ["Très bien, merci.", "Muy bien, gracias."],
        ["Au revoir !", "¡Adiós!"]
      ]}
    ]
  },

  /* ---------- 2 ---------- */
  { title: "Pronunciación y letras",
    intro: "Los sonidos del francés que no existen en español.",
    items: [
      ["tu", "tü", "tú"],
      ["rue", "rü", "calle"],
      ["vous", "vu", "usted"],
      ["moi", "muá", "yo"],
      ["chat", "sha", "gato"],
      ["jour", "yur", "día"],
      ["montagne", "mon-tañ", "montaña"],
      ["enfant", "an-fan", "niño"],
      ["bon", "bon", "bueno"],
      ["pain", "pan", "pan"],
      ["eau", "o", "agua"],
      ["homme", "om", "hombre"],
      ["Comment ça s’écrit ?", "ko-man sa se-krí", "¿Cómo se escribe?"],
      ["Pouvez-vous répéter ?", "pu-vé vu ré-pe-té", "¿Puede repetir?"],
      ["Plus lentement, s’il vous plaît", "plü lan-te-man sil vu plé", "Más despacio, por favor"]
    ],
    tips: [
      "<b>La «u» francesa:</b> pon los labios como para decir «u» y di «i». <b>tu</b> = «tü».",
      "<b>Combinaciones:</b> <b>ou</b> = «u» · <b>oi</b> = «uá» · <b>ch</b> = «sh» · <b>gn</b> = «ñ» · <b>eau</b> = «o».",
      "<b>Vocales nasales:</b> <b>an / en</b> = «an» · <b>on</b> = «on» · <b>in / ain</b> = «an» abierta. No se pronuncia la «n».",
      "<b>Letras mudas:</b> la «h» nunca suena y casi todas las consonantes finales tampoco: <b>petit</b> = «pe-tí», <b>vous</b> = «vu».",
      "<b>Alfabeto:</b> A (a) B (be) C (se) D (de) E (ö) F (ef) G (yé) H (ash) I (i) J (yi) K (ka) L (el) M (em) N (en) O (o) P (pe) Q (kü) R (er) S (es) T (te) U (ü) V (ve) W (dublö-ve) X (iks) Y (i-grek) Z (zed)."
    ],
    dialogs: [
      { title: "Deletrear un nombre", lines: [
        ["Comment ça s’écrit ?", "¿Cómo se escribe?"],
        ["Fer : F, E, R.", "Fer: F, E, R."],
        ["Pouvez-vous répéter ?", "¿Puede repetir?"],
        ["Plus lentement, s’il vous plaît.", "Más despacio, por favor."]
      ]}
    ]
  },

  /* ---------- 3 ---------- */
  { title: "Números del 0 al 20",
    intro: "Contar, decir tu edad y pedir un número de teléfono.",
    items: [
      ["zéro", "ze-ró", "cero"],
      ["un", "an", "uno"],
      ["deux", "dö", "dos"],
      ["trois", "truá", "tres"],
      ["quatre", "katr", "cuatro"],
      ["cinq", "sank", "cinco"],
      ["six", "sis", "seis"],
      ["sept", "set", "siete"],
      ["huit", "üit", "ocho"],
      ["neuf", "nöf", "nueve"],
      ["dix", "dis", "diez"],
      ["onze", "onz", "once"],
      ["douze", "duz", "doce"],
      ["treize", "trez", "trece"],
      ["quatorze", "ka-torz", "catorce"],
      ["quinze", "kanz", "quince"],
      ["seize", "sez", "dieciséis"],
      ["dix-sept", "di-set", "diecisiete"],
      ["dix-huit", "di-süit", "dieciocho"],
      ["dix-neuf", "diz-nöf", "diecinueve"],
      ["vingt", "van", "veinte"],
      ["J’ai vingt ans", "yé van tan", "Tengo veinte años"],
      ["Quel âge avez-vous ?", "kel az a-vé vu", "¿Cuántos años tiene usted?"]
    ],
    tips: [
      "<b>Del 17 al 19</b> se dice «diez-siete», «diez-ocho», «diez-nueve»: <b>dix-sept</b>, <b>dix-huit</b>, <b>dix-neuf</b>.",
      "<b>La edad usa «tener»:</b> <b>J’ai vingt ans</b> = «tengo veinte años». Nunca «je suis vingt ans».",
      "<b>Consonantes finales.</b> En <b>cinq, six, sept, huit, dix</b> la última letra sí suena: «sank», «sis», «set», «üit», «dis»."
    ],
    dialogs: [
      { title: "Preguntar la edad", lines: [
        ["Quel âge avez-vous ?", "¿Cuántos años tiene usted?"],
        ["J’ai quinze ans. Et vous ?", "Tengo quince años. ¿Y usted?"],
        ["J’ai dix-huit ans.", "Tengo dieciocho años."]
      ]},
      { title: "Contar", lines: [
        ["Un, deux, trois, quatre, cinq.", "Uno, dos, tres, cuatro, cinco."],
        ["Six, sept, huit, neuf, dix.", "Seis, siete, ocho, nueve, diez."]
      ]}
    ]
  },

  /* ---------- 4 ---------- */
  { title: "Género y artículos",
    intro: "En francés todos los nombres son masculinos o femeninos: aprende cada palabra con su artículo.",
    items: [
      ["le livre", "lö livr", "el libro"],
      ["la maison", "la me-zon", "la casa"],
      ["l’ami", "la-mí", "el amigo"],
      ["l’amie", "la-mí", "la amiga"],
      ["les enfants", "le zan-fan", "los niños"],
      ["un homme", "an nom", "un hombre"],
      ["une femme", "ün fam", "una mujer"],
      ["des amis", "de za-mí", "unos amigos"],
      ["le café", "lö ka-fé", "el café"],
      ["la voiture", "la vuá-tür", "el coche"],
      ["le chat", "lö sha", "el gato"],
      ["la table", "la tabl", "la mesa"],
      ["C’est un livre", "se tan livr", "Es un libro"],
      ["C’est une table", "se tün tabl", "Es una mesa"]
    ],
    tips: [
      "<b>le / un</b> = masculino · <b>la / une</b> = femenino · <b>les / des</b> = plural (para los dos géneros).",
      "Delante de vocal o «h» muda, <b>le</b> y <b>la</b> pasan a <b>l’</b>: <b>l’ami</b>, <b>l’eau</b>.",
      "El plural añade casi siempre una <b>-s</b> que <b>no suena</b>: <b>livre</b> / <b>livres</b> se pronuncian igual; la diferencia se oye en el artículo."
    ],
    dialogs: [
      { title: "¿Qué es esto?", lines: [
        ["C’est un livre ?", "¿Es un libro?"],
        ["Non, c’est une table.", "No, es una mesa."],
        ["Et ça ? C’est un chat ?", "¿Y esto? ¿Es un gato?"],
        ["Oui, c’est le chat de mon ami.", "Sí, es el gato de mi amigo."]
      ]}
    ]
  },

  /* ---------- 5 ---------- */
  { title: "Ser y tener: être y avoir",
    intro: "Los dos verbos más importantes del francés: te servirán en cada frase.",
    items: [
      ["Je suis espagnol", "yö süi es-pa-ñol", "Soy español"],
      ["Tu es content", "tü e kon-tan", "Estás contento"],
      ["Il est fatigué", "il e fa-ti-gué", "Él está cansado"],
      ["Elle est française", "el e fran-sez", "Ella es francesa"],
      ["Nous sommes ici", "nu som i-sí", "Estamos aquí"],
      ["Vous êtes prêt", "vu zet pre", "Usted está listo"],
      ["Ils sont à la maison", "il son ta la me-zon", "Ellos están en casa"],
      ["J’ai trente ans", "yé trant an", "Tengo treinta años"],
      ["Tu as un frère", "tü a an frer", "Tienes un hermano"],
      ["Il a une voiture", "il a ün vuá-tür", "Él tiene un coche"],
      ["Nous avons faim", "nu za-von fan", "Tenemos hambre"],
      ["Vous avez raison", "vu za-vé re-zon", "Usted tiene razón"],
      ["Ils ont soif", "il zon suaf", "Ellos tienen sed"]
    ],
    tips: [
      "<b>être</b> (ser / estar): je <b>suis</b> · tu <b>es</b> · il/elle <b>est</b> · nous <b>sommes</b> · vous <b>êtes</b> · ils/elles <b>sont</b>.",
      "<b>avoir</b> (tener): j’<b>ai</b> · tu <b>as</b> · il/elle <b>a</b> · nous <b>avons</b> · vous <b>avez</b> · ils/elles <b>ont</b>.",
      "En francés se <b>tiene</b> hambre, sed, razón y años: <b>j’ai faim</b>, <b>j’ai soif</b>, <b>j’ai raison</b>, <b>j’ai trente ans</b>."
    ],
    dialogs: [
      { title: "Presentarse", lines: [
        ["Vous êtes français ?", "¿Es usted francés?"],
        ["Non, je suis espagnol. Et vous ?", "No, soy español. ¿Y usted?"],
        ["Moi, je suis français. J’ai un frère à Madrid.", "Yo soy francés. Tengo un hermano en Madrid."]
      ]},
      { title: "Hambre y sed", lines: [
        ["Tu as faim ?", "¿Tienes hambre?"],
        ["Oui, et j’ai soif aussi.", "Sí, y también tengo sed."],
        ["Nous avons du pain et de l’eau.", "Tenemos pan y agua."]
      ]}
    ]
  },

  /* ---------- 6 ---------- */
  { title: "La familia y los posesivos",
    intro: "Habla de tu familia con mon, ma, mes y notre.",
    items: [
      ["mon père", "mon per", "mi padre"],
      ["ma mère", "ma mer", "mi madre"],
      ["mon frère", "mon frer", "mi hermano"],
      ["ma sœur", "ma sör", "mi hermana"],
      ["mes parents", "me pa-ran", "mis padres"],
      ["mon fils", "mon fis", "mi hijo"],
      ["ma fille", "ma fiy", "mi hija"],
      ["mon grand-père", "mon gran-per", "mi abuelo"],
      ["ma grand-mère", "ma gran-mer", "mi abuela"],
      ["mon mari", "mon ma-rí", "mi marido"],
      ["ma femme", "ma fam", "mi mujer"],
      ["notre famille", "notr fa-miy", "nuestra familia"],
      ["Voici ma famille", "vuá-si ma fa-miy", "Esta es mi familia"]
    ],
    tips: [
      "<b>Mi:</b> <b>mon</b> (masc.) · <b>ma</b> (fem.) · <b>mes</b> (plural). Igual con <b>ton / ta / tes</b> (tu) y <b>son / sa / ses</b> (su).",
      "El posesivo concuerda con la cosa poseída, no con quien la posee: <b>son père</b> es «su padre» (de él o de ella).",
      "Delante de vocal se usa <b>mon</b> aunque sea femenino: <b>mon amie</b> = «mi amiga».",
      "<b>Nuestro:</b> <b>notre</b> · <b>Vuestro:</b> <b>votre</b> · <b>Su (de ellos):</b> <b>leur</b>."
    ],
    dialogs: [
      { title: "Mi familia", lines: [
        ["Voici ma famille.", "Esta es mi familia."],
        ["C’est ton père ?", "¿Es tu padre?"],
        ["Oui, et voici ma mère et mes frères.", "Sí, y aquí están mi madre y mis hermanos."]
      ]},
      { title: "Preguntar por la familia", lines: [
        ["Vous avez des enfants ?", "¿Tiene usted hijos?"],
        ["Oui, j’ai un fils et une fille.", "Sí, tengo un hijo y una hija."],
        ["Et votre femme ?", "¿Y su mujer?"],
        ["Ma femme est à la maison.", "Mi mujer está en casa."]
      ]}
    ]
  },

  /* ---------- 7 ---------- */
  { title: "Verbos en -er y negación",
    intro: "Hablar, vivir, comer, mirar… y cómo decir que no.",
    items: [
      ["Je parle français", "yö parl fran-se", "Hablo francés"],
      ["Tu parles espagnol", "tü parl es-pa-ñol", "Hablas español"],
      ["Elle habite à Gijón", "el a-bit a yi-hon", "Ella vive en Gijón"],
      ["Nous mangeons du pain", "nu man-yon dü pan", "Comemos pan"],
      ["Vous aimez le café", "vu ze-mé lö ka-fé", "Le gusta el café"],
      ["Ils regardent la télé", "il rö-gard la te-lé", "Ellos miran la tele"],
      ["Je ne parle pas italien", "yö nö parl pa i-ta-lian", "No hablo italiano"],
      ["Je n’aime pas le thé", "yö nem pa lö té", "No me gusta el té"],
      ["Il ne mange pas de viande", "il nö manj pa dö vian-d", "Él no come carne"],
      ["Parlez-vous espagnol ?", "par-lé vu es-pa-ñol", "¿Habla usted español?"],
      ["Est-ce que vous habitez ici ?", "es-kö vu za-bi-té i-sí", "¿Vive usted aquí?"],
      ["Nous ne comprenons pas", "nu nö kom-prö-non pa", "No entendemos"]
    ],
    tips: [
      "<b>Verbos en -er.</b> Quita <b>-er</b> y añade: <b>-e, -es, -e, -ons, -ez, -ent</b>. <b>parler</b>: je parle · tu parles · il parle · nous parlons · vous parlez · ils parlent.",
      "<b>Negación:</b> <b>ne … pas</b> rodea al verbo: <b>Je ne parle pas</b>. Delante de vocal, <b>ne</b> pasa a <b>n’</b>: <b>Je n’aime pas</b>.",
      "<b>Preguntas fáciles:</b> pon <b>Est-ce que</b> al principio, o invierte verbo y sujeto con guion: <b>Parlez-vous espagnol ?</b>",
      "Con <b>nous</b>, el verbo <b>manger</b> se escribe <b>mangeons</b>: la «e» conserva el sonido suave de la «g»."
    ],
    dialogs: [
      { title: "¿Dónde vive usted?", lines: [
        ["Vous habitez ici ?", "¿Vive usted aquí?"],
        ["Oui, j’habite à Gijón. Et vous ?", "Sí, vivo en Gijón. ¿Y usted?"],
        ["Moi, j’habite à Paris. Je parle un peu espagnol.", "Yo vivo en París. Hablo un poco de español."]
      ]},
      { title: "Gustos", lines: [
        ["Vous aimez le café ?", "¿Le gusta el café?"],
        ["Non, je n’aime pas le café. J’aime le thé.", "No, no me gusta el café. Me gusta el té."],
        ["Moi, je ne mange pas de viande.", "Yo no como carne."]
      ]}
    ]
  },

  /* ---------- 8 ---------- */
  { title: "En el café y frases útiles",
    intro: "Con estas frases te defiendes en un café, un restaurante o una tienda.",
    items: [
      ["Je voudrais un café", "yö vu-dré an ka-fé", "Quisiera un café"],
      ["Un thé, s’il vous plaît", "an té sil vu plé", "Un té, por favor"],
      ["De l’eau, s’il vous plaît", "dö lo sil vu plé", "Agua, por favor"],
      ["Un croissant", "an krua-san", "Un cruasán"],
      ["L’addition, s’il vous plaît", "la-di-sion sil vu plé", "La cuenta, por favor"],
      ["Combien ça coûte ?", "kom-bian sa kut", "¿Cuánto cuesta?"],
      ["Où sont les toilettes ?", "u son le tua-let", "¿Dónde están los aseos?"],
      ["Je ne comprends pas", "yö nö kom-pran pa", "No entiendo"],
      ["Excusez-moi", "ek-skü-zé muá", "Disculpe"],
      ["De rien", "dö rian", "De nada"],
      ["Avec plaisir", "a-vek ple-sir", "Con mucho gusto"],
      ["C’est délicieux", "se de-li-siö", "Está delicioso"]
    ],
    tips: [
      "<b>Pedir con educación:</b> usa <b>Je voudrais…</b> («quisiera…») y termina con <b>s’il vous plaît</b>.",
      "<b>Si no entiendes</b> algo, di con calma: <b>Pouvez-vous répéter, s’il vous plaît ?</b>",
      "Para llamar la atención de un camarero: <b>Excusez-moi, monsieur</b> / <b>madame</b>."
    ],
    dialogs: [
      { title: "En el café", lines: [
        ["Bonjour ! Je voudrais un café, s’il vous plaît.", "¡Buenos días! Quisiera un café, por favor."],
        ["Voilà ! Et avec ça ?", "¡Aquí tiene! ¿Algo más?"],
        ["Un croissant, s’il vous plaît.", "Un cruasán, por favor."],
        ["Très bien. Ça fait quatre euros.", "Muy bien. Son cuatro euros."]
      ]},
      { title: "Pedir la cuenta", lines: [
        ["Excusez-moi, l’addition, s’il vous plaît.", "Disculpe, la cuenta, por favor."],
        ["Voilà, monsieur.", "Aquí tiene, señor."],
        ["Merci. C’est délicieux !", "Gracias. ¡Está delicioso!"],
        ["De rien. Au revoir !", "De nada. ¡Adiós!"]
      ]}
    ]
  }

  ]
};
