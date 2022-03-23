export type Song = {
    name: string,
    id: string,
    duration: string,
    lyrics: string,
    artist: string
}

export const musicData: {[key: string]: Song[]} = {
    french: <Song[]>[
    {
        name: 'La gare',
        id: '6JGZSiRToBXTfxUakPo0n8',
        artist: 'Pomme',
        duration: '3:43',
        lyrics: `[Couplet 1]
        Je m'avance vers toi dans la gare|
        Est-ce que tu excuseras mon retard ?|
        Toi, tu téléphones encore|
        Je sens que ça ne va pas fort|
        
        [Refrain]|
        Pour la première fois, je vois pleurer un garçon|
        Devant moi, dans tes yeux, des larmes de papillon|
        Je n'sais pas si je t'aime, si je suis assez forte|
        Et si ça vaut la peine que tu claques ta porte|
        Oh|
        Ta porte, oh|
        
        [Couplet 2]|
        Comme deux beaux imbéciles dans la gare|
        Ta femme au bout du fil, quel hasard|
        Elle dit que tu dois choisir|
        Entre elle et moi sans mentir|
        
        [Refrain] X2|
        Pour la première fois, je vois pleurer un garçon|
        Devant moi, dans tes yeux, de femme de saison|
        Je n'sais pas si je t'aime, si je suis assez forte|
        Et si ça vaut la peine que tu claques ta porte|
        Oh|
        Ta porte, oh`
    },
    {
        name: 'A peu pres',
        id: '65h4yduK6bShDuahteRxgR',
        artist: 'Pomme',
        duration: '3:26',
        lyrics: `Je me souviens de tes poèmes|
        Et de la lumière dans tes yeux|
        Je me souviens de tes "je t'aime"|
        Que tu balançais comme des vœux|
        As-tu un jour voulu qu'on sème|
        Des pétales et des jours heureux?|
        Ou savais-tu tous les problèmes|
        As-tu jeté les dés au feu?|
        Au feu|
        C'était de l'or, tu sais|
        C'était comme de l'or notre histoire|
        Et si jamais|
        Si je m'en sors à peu près|
        Ne t'en fais pas qu'un jour ou l'autre je te retrouverais|
        Je te retrouverais|
        Tu m'as dit que j'étais la tienne|
        Qu'avec moi le ciel est plus bleu|
        Tu m'as cité Rimbaud, Verlaine|
        Compté l'histoire de la vie à deux|
        À deux|
        Et c'était de l'or, tu sais|
        C'était comme de l'or notre histoire|
        Et si jamais|
        Si je m'en sors à peu près|
        Ne t'en fais pas qu'un jour ou l'autre je te retrouverais|
        Je te retrouverais|
        C'en est assez des amours blêmes|
        Et des cœurs brisés en morceaux|
        De ces chansons sur le même thème|
        Qui ont épuisées tous mes mots|
        Tous mes mots|
        Et c'était de l'or, tu sais|
        C'était comme de l'or notre histoire|
        Et si jamais|
        Si je m'en sors à peu près|
        Ne t'en fais pas qu'un jour ou l'autre je te retrouverais|
        Je te retrouverais`
    },
    {
        name: 'De la-haut',
        id: '2algMKr17nsVOYrZRtFXGm',
        artist: 'Pomme',
        duration: '2:43',
        lyrics: `Voilà qu'on pleure autour d'une croix
        Qu'on jette des fleurs, qu'on parle de moi|
        C'est une belle journée d'été|
        Tout le monde s'est habillé|
        Les mots qui sortent, qu'on ne disait pas|
        Le vent les apporte jusqu'à moi|
        Tout paraît si limpide, si limpide, limpide|
        Vu de là-haut|
        De là-haut, je vous vois si petit|
        Tout là-haut, ma peine s'évanouit|
        Tout là-haut, des visions inouïes|
        Du soleil qui mange la pluie|
        J'ai brisé le lien qui me tenait|
        Le nœud quotidien, je l'ai défait|
        Tout paraît si futile, si futile, futile|
        Vu de là-haut|
        Sèchez vos larmes, dormez en paix|
        Je pars sans drame et sans regret|
        Mais c'est facile, si facile, facile à dire|
        Vu de là-haut|
        De là-haut, je vous vois si petit|
        Tout là-haut, ma peine s'évanouit|
        Tout là-haut, des visions inouïes|
        Du soleil qui mange la pluie|
        De là-haut, je vous vois si petit|
        Tout là-haut, ma peine s'évanouit|
        Tout là-haut, des visions inouïes|
        Du soleil qui mange la pluie`
    },
    {
        name: 'Pauline',
        id: '4ysbxlUlb00V0vFvq4Ixk1',
        artist: 'Pomme',
        duration: '2:39',
        lyrics: `Ça fait depuis l'enfance|
        Que je connais Pauline|
        J'n'ai jamais eu la chance|
        D'être sa copine|
        Elle avait l'air plus grande|
        Ses jambes étaient si fines|
        Il n'y avait dans sa bande|
        Que les plus jolies filles|
        Oh Pauline|
        Pendus à tes bottines|
        Les garçons passaient tous à côté de moi|
        Oh Pauline|
        Belle comme une ballerine|
        Je les comprenais, je ne leur en voulais pas|
        On a suivi nos routes|
        Un peu en parallèle|
        Moi surmontant mes doutes|
        Et toi de plus en plus belle|
        J'ai trouvé ce garçon|
        Qui me trouvait je ne sais quoi|
        Mais tu connais son nom|
        Et tu le veux pour toi|
        Oui tu le veux pour toi|
        Oh Pauline|
        J'ai pas ta poitrine|
        Mais mon coeur bat pour lui|
        Ne me fais pas ça|
        Oh Pauline|
        Moulée dans ton jean|
        Tu sais que je ne peux pas lutter contre ça|
        Je ne suis pas stupide|
        Tu peux claquer des doigts|
        En faire un chien de cirque|
        Il ne vivra que pour toi|
        Pour toi ça n'est qu'un jeu|
        Tu l'oublieras demain|
        Moi j'suis folle amoureuse|
        S'il me quitte c'est la fin|
        S'il me quitte c'est la fin|
        Oh Pauline|
        Rose pleine d'épines|
        Tu le blesseras un jour, alors laisse-le moi|
        Oh Pauline|
        Range tes canines|
        Laisse le bonheur aux autres|
        Au moins pour cette fois|
        Oh Pauline, oh Pauline|
        Laisse le bonheur aux autres|
        Au moins pour cette fois|
        Oh Pauline, oh Pauline|
        Laisse le bonheur aux autres|
        Au moins pour cette fois`
    },
    {
        name: 'Ceux qui revent',
        id: '7as88HhLbDLgobaSbJrVBs',
        artist: 'Pomme',
        duration: '1:58',
        lyrics: `Mes nuits blanches ne sont pas blanches, à peine claires|
        Semées d'étoiles|
        Petits trous dans la toile étanche|
        Tristes strass sur le voile|
        Et moi, envoutée de ténèbres|
        Je passe des heures infinies|
        À compter les moutons funèbres|
        Qui tapissent mes insomnies|
        Ah minuit est là|
        Ah je ne dors pas|
        Et moins je dors et plus je pense|
        Et plus je pense et moins j'oublie|
        L'immense impasse, l'espace immense|
        Qui s'étendent au fond de mon lit|
        C'est inouï tous ces silences|
        Qu'il est cosmique cet ennui|
        Dois-je recourir à la science?|
        Anesthésier l'insomnie?|
        Ah minuit est là|
        Ah je ne dors pas|
        Et puis passé minuit je danse|
        Au rythme des tachycardies|
        Et tout s'emballe et tout balance|
        Et tout m'étale et tout me fuit|
        La lune est un fruit un peu rance|
        La vie est une maladie|
        Ceux qui rêvent ont bien de la chance|
        Et les autres ont des insomnies|
        Ceux qui rêvent ont bien de la chance|
        Et les autres ont des insomnies|
        Ceux qui rêvent ont bien de la chance|
        Quant à moi j'ai des insomnies|
        Ah minuit est là|
        Ah je ne dors pas|
        Ah minuit est là|
        Ah je ne dors pas|
        Je ne dors pas|
        Je ne dors pas|
        Je ne dors pas`
    },
    {
        name: 'L`enfer',
        id: '7bp3zmEvpHLa0h32nhDUkB',
        artist: 'Stromae',
        duration: '3:09',
        lyrics: `J'suis pas tout seul à être tout seul|
        Ça fait d'jà ça d'moins dans la tête|
        Et si j'comptais, combien on est|
        Beaucoup|
        Tout ce à quoi j'ai d'jà pensé|
        Dire que plein d'autres y ont d'jà pensé|
        Mais malgré tout je m'sens tout seul|
        Du coup|
        J'ai parfois eu des pensées suicidaires|
        Et j'en suis peu fier|
        On croit parfois que c'est la seule manière de les faire taire|
        Ces pensées qui nous font vivre un enfer|
        Ces pensées qui me font vivre un enfer|
        Est-c'qu'y a que moi qui ai la télé|
        Et la chaîne culpabilité?|
        Mais faut bien s'changer les idées|
        Pas trop quand même|
        Sinon ça r'part vite dans la tête|
        Et c'est trop tard pour qu'ça s'arrête|
        C'est là qu'j'aimerais tout oublier|
        Du coup|
        J'ai parfois eu des pensées suicidaires|
        Et j'en suis peu fier|
        On croit parfois que c'est la seule manière de les faire taire|
        Ces pensées qui me font vivre un enfer|
        Ces pensées qui me font vivre un enfer|
        Tu sais j'ai mûrement réfléchi|
        Et je sais vraiment pas quoi faire de toi|
        Justement, réfléchir|
        C'est bien l'problème avec toi|
        Tu sais j'ai mûrement réfléchi|
        Et je sais vraiment pas quoi faire de toi|
        Justement, réfléchir|
        C'est bien l'problème avec toi`
    },
    {
        name: 'Sante',
        id: '3vXnuFnC5RhPGwsFi0ORcI',
        artist: 'Stromae',
        duration: '3:10',
        lyrics: `À ceux qui n'en ont pas|
        À ceux qui n'en ont pas|
        Rosa, rosa|
        Quand on fout le bordel, tu nettoies|
        Et toi, Albert|
        Quand on trinque, tu ramasses les verre|
        Céline, bataire|
        Toi, tu t'prends des vestes au vestiaire|
        Arlette, arrête|
        Toi la fête tu la passes aux toilettes|
        Et si on célébrait ceux qui ne célèbrent pas|
        Pour une fois, j'aimerais lever mon verre à ceux qui n'en ont pas|
        À ceux qui n'en ont pas|
        Quoi les bonnes manières?|
        Pourquoi j'f'rais semblant?|
        Toute façon elle est payée pour le faire|
        Tu t'prends pour ma mère?|
        Dans une heure j'reviens, qu'ce soit propre|
        Qu'on puisse y manger par terre|
        Trois heures que j'attends, franchement|
        Il les fabrique ou quoi?|
        Heureusement qu'c'est que deux verres|
        Appelle-moi ton responsable|
        Et fais vite, elle pourrait se finir comme ça ta carrière|
        Oui, célébrons ceux qui ne célèbrent pas|
        Encore une fois, j'aimerais lever mon verre à ceux qui n'en ont pas|
        À ceux qui n'en ont pas|
        À ceux qui n'en ont pas|
        Frotter, frotter|
        Mieux vaut ne pas s'y|
        Frotter, frotter|
        Si tu n'me connais pas|
        Brosser, brosser|
        Tu pourras toujours te|
        Brosser, brosser|
        Si tu ne me respectes pas|
        Oui, célébrons ceux qui ne célèbrent pas|
        Encore une fois, j'aimerais lever mon verre à ceux qui n'en ont pas|
        À ceux qui n'en ont pas|
        Pilotes d'avion ou infirmières|
        Chauffeurs de camion, hôtesses de l'air|
        Boulangers ou marins-pêcheurs|
        Un verre aux champions des pires horaires|
        Aux jeunes parents bercés par les pleurs|
        Aux insomniaques de profession|
        Et tous ceux qui souffrent de peines de cœur|
        Qui n'ont pas le cœur aux célébrations|
        Qui n'ont pas le cœur aux célébrations`
    },
    {
        name: 'Le chant des sirenes',
        id: '4KT6rWA9kZ5XNytkKAfrWe',
        artist: 'Frero Delavega',
        duration: '2:59',
        lyrics: `Enfants des parcs, gamins des plages|
        Le vent menace les châteaux de sable façonnés de mes doigts|
        Le temps n'épargne personne hélas|
        Les années passent, l'écho s'évade sur la Dune du Pyla|
        Au gré des saisons, des photomatons|
        Je m'abandonne à ces lueurs d'autrefois|
        Au gré des saisons, des décisions, je m'abandonne|
        Quand les souvenirs s'en mêlent, les larmes me viennent|
        Et le chant des sirènes me replonge en hiver|
        Oh mélancolie cruelle, harmonie fluette, euphorie solitaire|
        Tadalalala, tadalalala|
        Tadalalala, tadalala|
        Combien de farces, combien de frasques|
        Combien de traces, combien de masques|
        Avons-nous laissé là-bas|
        Poser les armes, prendre le large|
        Trouver le calme dans ce vacarme avant que je ne m'y noie|
        Au gré des saisons, des photomatons|
        Je m'abandonne à ces lueurs d'autrefois|
        Au gré des saisons, des décisions, je m'abandonne|
        Quand les souvenirs s'en mêlent, les larmes me viennent|
        Et le chant des sirènes me replonge en hiver|
        Oh mélancolie cruelle, harmonie fluette, euphorie solitaire|
        Oh|
        Oh|
        Quand les souvenirs s'en mêlent, les larmes me viennent|
        Et le chant des sirènes me replonge en hiver|
        Oh mélancolie cruelle, harmonie fluette, euphorie solitaire|
        Quand les souvenirs s'en mêlent, les larmes me viennent|
        Et le chant des sirènes me replonge en hiver|
        Oh mélancolie cruelle, harmonie fluette, euphorie solitaire|
        Tadalalala, tadalalala|
        Tadalalala, tadalala|
        Tadalalala, tadalalala|
        Tadalalala, tadalala`
    },
],
portuguese: <Song[]>[
    {
        name: 'Carta Que Nao Diz',
        id: '2iXQ3CYVGQihlFpWCDDmJM',
        artist: 'Rodrigo Alarcon',
        duration: '3:11',
        lyrics: `Por que você nunca me amou?|
        Por que você nunca me amou?|
        Por que você me magoou?|
        Fingiu, mentiu, nunca me amou|
        Queria poder dizer que eu|
        Jamais senti nada por você|
        Queria poder deschorar|
        A lágrima que já rolou|
        E se já rolou (Vai secar)|
        E se já secou (Ninguém viu)|
        Vou mandar lá pra ponte que caiu|
        Essa carta que não diz|
        Por que você nunca me amou?|
        Por que você nunca me amou?|
        Por que você me magoou?|
        Fingiu, mentiu, nunca me amou|
        Queria poder dizer que eu|
        Jamais senti nada por você|
        Queria poder deschorar|
        A lágrima que já rolou|
        E se já rolou (Vai secar)|
        E se já secou (Ninguém viu)|
        Vou mandar lá pra ponte que caiu|
        Essa carta que não diz|
        Queria poder dizer que eu|
        Jamais senti nada por você|
        Queria poder deschorar|
        A lágrima que já rolou|
        E se já rolou (Vai secar)|
        E se já secou (Ninguém viu)|
        Vou mandar lá pra ponte que caiu|
        Essa carta que não diz`
    },
    {
        name: '15b',
        id: '657snoTuKuYiyv7XhtMvKw',
        artist: 'Rodrigo Alarcon',
        duration: '2:43',
        lyrics: `Sinto falta de tudo com você|
        De passar nem um dia sem te ver|
        De tomar seu café de manhã|
        De dormir e acordar sem perder|
        Um sorriso, um resmungo, um porque|
        Um bom dia, um boa noite, um amo você|
        De dançar na sua sala e pisar no seu pé|
        De te olhar pelo espelho e dizer como é linda mulher|
        De fazer o calango na varanda|
        Ver na parede suas fotos de criança|
        Sinto falta de ter você aqui|
        De falar amenidade, fazer rir|
        Te amar sem pensar no amanhã|
        De dizer o que ninguém vai entender|
        Inventar uma palavra p'ra descrever|
        Quantas delicias é amar você|
        De correr de você p'ra você me pegar|
        De olhar nos seus zóio e pensar como é lindo zoiá|
        De sentar do seu lado à mesa|
        E viajar com tamanha sua beleza|
        Laiá la laiá|
        Laiá la laiá|
        Laiá la laiá|
        De ter frio na barriga subindo a escada|
        E a cada degrau sentir que o coração dispara|
        Apertar a campainha do 15b|
        Quase morrer feliz ao ver você|
        Apertar a campainha do 15b|
        Quase morrer feliz ao ver você`
    },
    {
        name: 'Garota de Ipanema',
        id: '2qjO714ruqdwKx5kkY9M3w',
        artist: 'Vinicius',
        duration: '2:30',
        lyrics: `Olha que coisa mais linda mais cheia de graça|
        É ela menina que vem que passa|
        Num doce balanço caminho do mar|
        Moça do corpo dourado do sol de Ipanema|
        O seu balançado é mais que um poema|
        É a coisa mais linda que eu já vi passar|
        Ah, porque estou tão sozinho|
        Ah, porque tudo é tão triste|
        Ah, a beleza que existe|
        A beleza que não é só minha|
        Que também passa sozinha|
        Ah, se ela soubesse|
        Que quando ela passa|
        O mundo sorrindo se enche de graça|
        E fica mais lindo por causa do amor|
        Tall and tan and young and lovely|
        The girl from Ipanema goes walking|
        And when she passes Each one she passes goes, ah|
        When she walks, she's like a samba|
        That swings so cool and sways so gently|
        That when she passes Each one she passes goes, ah|
        Oh, but he watches so sadly|
        How can he tell her he loves her|
        Yes, he would give his heart gladly|
        But each day, when she walks to the sea|
        She looks straight ahead, not at him|
        Tall, and tan, and young, and lovely|
        The girl from Ipanema goes walking|
        And when she passes He smiles, but she doesn't see|
        Oh, but he sees her so sadly|
        How can he tell her he loves her|
        Yes, he would give his heart gladly|
        But each day, when she walks to the sea|
        She looks straight ahead, not at him|
        Tall, and tan, and young, and lovely|
        The girl from Ipanema goes walking|
        And when she passes he smiles, but she doesn't see|
        She just doesn't see, no she just doesn't see|
        But she doesn't see, she doesn't see, no she just doesn't see|`
    },
    {
        name: 'O bêbado e a equilibrista',
        id: '3eVyDZXJPJzUKkyWP6eLyc',
        artist: 'Elis Regina',
        duration: '3:51',
        lyrics: `Caía a tarde feito um viaduto|
        E um bêbado trajando luto me lembrou Carlitos|
        A lua, tal qual a dona de um bordel|
        Pedia a cada estrela fria um brilho de aluguel|
        E nuvens lá no mata-borrão do céu|
        Chupavam manchas torturadas|
        Que sufoco|
        Louco|
        O bêbado com chapéu-coco|
        Fazia irreverências mil|
        Pra noite do Brasil|
        Meu Brasil|
        Que sonha com a volta do irmão do Henfil|
        Com tanta gente que partiu|
        Num rabo de foguete|
        Chora|
        A nossa Pátria mãe gentil|
        Choram Marias e Clarisses|
        No solo do Brasil|
        Mas sei que uma dor assim pungente|
        Não há de ser inutilmente|
        A esperança|
        Dança na corda bamba de sombrinha|
        E em cada passo dessa linha|
        Pode se machucar|
        Azar|
        A esperança equilibrista|
        Sabe que o show de todo artista|
        Tem que continuar`
    },
    {
        name: 'Detalhes',
        id: '2BpZrHa9GS5o6vULVOoHnT',
        artist: 'Roberto Carlos',
        duration: '5:03',
        lyrics: `Não adianta nem tentar me esquecer|
        Durante muito tempo em sua vida|
        Eu vou viver|
        Detalhes tão pequenos de nós dois|
        São coisas muito grandes pra esquecer|
        E a toda hora vão estar presentes|
        Você vai ver|
        Se um outro cabeludo aparecer|
        Na sua rua|
        E isto lhe trouxer saudades minhas|
        A culpa é sua|
        O ronco barulhento do seu carro|
        A velha calça desbotada ou coisa assim|
        Imediatamente você vai lembrar de mim|
        Eu sei que um outro deve estar falando|
        Ao seu ouvido|
        Palavras de amor como eu falei|
        Mas eu duvido|
        Duvido que ele tenha tanto amor|
        E até o erros do meu português ruim|
        E nessa hora você vai, lembrar de mim|
        À noite, envolvida no silêncio do seu quarto|
        Antes de dormir você procura o meu retrato|
        Mas da moldura não sou eu quem lhe sorri|
        Mas você vê o meu sorriso mesmo assim|
        E tudo isto vai fazer você lembrar de mim|
        Se alguém tocar seu corpo como eu|
        Não diga nada|
        Não vá dizer seu nome, sem querer|
        À pessoa errada|
        Pensando ter amor nesse momento|
        Desesperada você tenta até o fim|
        Mas até nesse momento, você vai|
        Você vai lembrar de mim|
        Eu sei que esses detalhes vão sumir|
        Na longa estrada|
        Do tempo que transforma todo amor|
        Em quase nada|
        Mas quase também é mais um detalhe|
        Um grande amor não vai morrer assim|
        Por isso é que de vez em quando você vai|
        Você vai lembrar de mim|
        Não adianta nem tentar me esquecer|
        Durante muito muito tempo em sua vida|
        Eu vou viver|
        Não adianta nem tentar|
        Não adianta nem tentar|
        Não adianta nem tentar`
    },
],
english: <Song[]>[
    {
        name: 'Perfect',
        id: '1HNkqx9Ahdgi1Ixy2xkKkL',
        artist: 'Ed Sheeran',
        duration: '4:18',
        lyrics: `Loving can hurt, loving can hurt sometimes|
        But it's the only thing that I know|
        When it gets hard, you know it can get hard sometimes|
        It is the only thing makes us feel alive|
        We keep this love in a photograph|
        We made these memories for ourselves|
        Where our eyes are never closing|
        Hearts are never broken|
        And time's forever frozen, still|
        So you can keep me|
        Inside the pocket of your ripped jeans|
        Holding me closer 'til our eyes meet|
        You won't ever be alone, wait for me to come home|
        Loving can heal, loving can mend your soul|
        And it's the only thing that I know, know|
        I swear it will get easier|
        Remember that with every piece of ya|
        Hmm, and it's the only thing we take with us when we die|
        Hmm, we keep this love in a photograph|
        We made these memories for ourselves|
        Where our eyes are never closing|
        Hearts were never broken|
        And time's forever frozen, still|
        So you can keep me|
        Inside the pocket of your ripped jeans|
        Holding me closer 'til our eyes meet|
        You won't ever be alone|
        And if you hurt me|
        That's okay, baby, only words bleed|
        Inside these pages, you just hold me|
        And I won't ever let you go|
        Wait for me to come home|
        Wait for me to come home|
        Wait for me to come home|
        Wait for me to come home|
        Oh, you can fit me|
        Inside the necklace you got when you were sixteen|
        Next to your heartbeat where I should be|
        Keep it deep within your soul|
        And if you hurt me|
        Well, that's okay, baby, only words bleed|
        Inside these pages, you just hold me|
        And I won't ever let you go|
        When I'm away, I will remember how you kissed me|
        Under the lamppost back on Sixth street|
        Hearing you whisper through the phone|
        "Wait for me to come home"`
    },
    {
        name: 'Riptide',
        id: '7yq4Qj7cqayVTp3FF9CWbm',
        artist: 'Vance Joy',
        duration: '3:24',
        lyrics: `I was scared of dentists and the dark|
        I was scared of pretty girls and starting conversations|
        Oh, all my friends are turning green|
        You're the magician's assistant in their dream|
        Ah-ooh-ooh-ooh, ah-ahh-ah-ah|
        And they come unstuck|
        Lady, running down to the riptide|
        Taken away to the dark side|
        I wanna be your left hand man|
        I love you when you're singing that song|
        And I got a lump in my throat|
        'Cause you're gonna sing the words wrong|
        There's this movie that I think you'll like|
        This guy decides to quit his job and heads to New York City|
        This cowboy's running from himself|
        And she's been living on the highest shelf|
        Ah-ooh-ooh-ooh, ah-ahh-oh|
        And they come unstuck|
        Lady, running down to the riptide|
        Taken away to the dark side|
        I wanna be your left hand man|
        I love you when you're singing that song|
        And I got a lump in my throat|
        'Cause you're gonna sing the words wrong|
        I just wanna, I just wanna know|
        If you're gonna, if you're gonna stay|
        I just gotta, I just gotta know|
        I can't have it, I can't have it any other way|
        I swear she's destined for the screen|
        Closest thing to Michelle Pfeiffer that you've ever seen, oh|
        Lady, running down to the riptide|
        Taken away to the dark side|
        I wanna be your left hand man|
        I love you when you're singing that song|
        And I got a lump in my throat|
        'Cause you're gonna sing the words wrong|
        Oh lady, running down to the riptide|
        Taken away to the dark side|
        I wanna be your left hand man|
        I love you when you're singing that song|
        And I got a lump in my throat|
        'Cause you're gonna sing the words wrong|
        Oh lady, running down to the riptide|
        Taken away to the dark side|
        I wanna be your left hand man|
        I love you when you're singing that song|
        And I got a lump in my throat|
        'Cause you're gonna sing the words wrong|
        Yeah, I got a lump in my throat|
        'Cause you're gonna sing the words wrong`
    },
    {
        name: 'The Nights',
        id: '0ct6r3EGTcMLPtrXHDvVjc',
        artist: 'Avicii',
        duration: '2:56',
        lyrics: `Once upon a younger year|
        When all our shadows disappeared|
        The animals inside came out to play|
        Went face to face with all our fears|
        Learned our lessons through the tears|
        Made memories we knew would never fade|
        One day, my father, he told me|
        "Son, don't let it slip away"|
        He took me in his arms, I heard him say|
        "When you get older|
        Your wild heart will live for younger days|
        Think of me if ever you're afraid"|
        He said, "One day, you'll leave this world behind|
        So live a life you will remember"|
        My father told me when I was just a child|
        "These are the nights that never die"|
        My father told me|
        "When thunderclouds start pouring down|
        Light a fire they can't put out|
        Carve your name into those shining stars"|
        He said, "Go venture far beyond the shores|
        Don't forsake this life of yours|
        I'll guide you home no matter where you are"|
        One day, my father, he told me|
        "Son, don't let it slip away"|
        When I was just a kid, I heard him say|
        "When you get older|
        Your wild heart will live for younger days|
        Think of me if ever you're afraid"|
        He said, "One day, you'll leave this world behind|
        So live a life you will remember"|
        My father told me when I was just a child|
        "These are the nights that never die"|
        My father told me|
        "These are the nights that never die"|
        My father told me|
        My father told me`
    },
    {
        name: 'Submarines',
        id: '3hVrC8e2aBK2suo7EMMXLj',
        artist: 'The Lumineers',
        duration: '2:43',
        lyrics: `I believe submarines|
        Underneath deep blue seas|
        Saw the flags: Japanese|
        No one will believe me|
        Ran back to the town bar|
        And I told the people how|
        I had seen the submarine|
        And everyone laughed aloud|
        I did spy periscopes|
        Dead of night on the eastern coast|
        The police made them jokes|
        Told me I'd seen a ghost|
        Everyone thinks I'm a liar|
        No one knows the truth|
        If it was a bigger fire|
        I would be on the roof|
        Ships will rust in Baldwin Bay|
        (Let me go!)|
        No one trusts what I say|
        (I don't know!)|
        Oh my God, no one paid|
        (Attention!)|
        Overnight my hair turned gray|
        (Oh oh oh!)|
        In the end it boils down to credibility|
        I had none, so I will die with the secrets of the sea|
        Submarine...`
    },
    {
        name: 'Rap God',
        id: '6or1bKJiZ06IlK0vFvY75k',
        artist: 'Eminem',
        duration: '6:03',
        lyrics: `"Look, I was gonna go easy on you not to hurt your feelings"|
        "But I'm only going to get this one chance" (six minutes-, six minutes-)|
        "Something's wrong, I can feel it" (six minutes, Slim Shady, you're on!)|
        "Just a feeling I've got, like something's about to happen, but I don't know wha|t
        If that means what I think it means, we're in trouble, big trouble|
        And if he is as bananas as you say, I'm not taking any chances"|
        "You are just what the doc ordered"|
        I'm beginnin' to feel like a Rap God, Rap God|
        All my people from the front to the back nod, back nod|
        Now, who thinks their arms are long enough to slap box, slap box?|
        They said I rap like a robot, so call me Rap-bot|
        But for me to rap like a computer, it must be in my genes|
        I got a laptop in my back pocket|
        My pen'll go off when I half-cock it|
        Got a fat knot from that rap profit|
        Made a livin' and a killin' off it|
        Ever since Bill Clinton was still in office|
        With Monica Lewinsky feelin' on his nutsack|
        I'm an MC still as honest|
        But as rude and as indecent as all hell|
        Syllables, skill-a-holic (kill 'em all with)|
        This flippity dippity-hippity hip-hop|
        You don't really wanna get into a pissin' match|
        With this rappity brat, packin' a MAC in the back of the Ac'|
        Backpack rap crap, yap-yap, yackety-yack|
        And at the exact same time, I attempt these lyrical acrobat stunts while I'm pra|cticin' that
        I'll still be able to break a motherfuckin' table|
        Over the back of a couple of faggots and crack it in half|
        Only realized it was ironic, I was signed to Aftermath after the fact|
        How could I not blow? All I do is drop F-bombs|
        Feel my wrath of attack|
        Rappers are havin' a rough time period, here's a maxi pad|
        It's actually disastrously bad for the wack|
        While I'm masterfully constructing this masterpièce|
        'Cause I'm beginnin' to feel like a Rap God, Rap God|
        All my people from the front to the back nod, back nod|
        Now, who thinks their arms are long enough to slap box, slap box?|
        Let me show you maintainin' this shit ain't that hard, that hard|
        Everybody want the key and the secret to rap immortality like Ι have got|
        Well, to be truthful the blueprint's|
        Simply rage and youthful exuberance|
        Everybody loves to root for a nuisance|
        Hit the Earth like an asteroid|
        Did nothing but shoot for the Moon since (pew!)|
        MCs get taken to school with this music|
        'Cause I use it as a vehicle to "bus the rhyme"|
        Now I lead a new school full of students|
        Me? I'm a product of Rakim|
        Lakim Shabazz, 2Pac, N.W.A, Cube, hey Doc, Ren|
        Yella, Eazy, thank you, they got Slim|
        Inspired enough to one day grow up, blow up and be in a position|
        To meet Run-D.M.C., induct them|
        Into the motherfuckin' Rock and Roll Hall of Fame|
        Even though I'll walk in the church and burst in a ball of flames|
        Only Hall of Fame I'll be inducted in is the alcohol of fame|
        On the wall of shame|
        You fags think it's all a game, 'til I walk a flock of flames|
        Off a plank and, tell me what in the fuck are you thinkin'?|
        Little gay-lookin' boy|
        So gay, I can barely say it with a straight face, lookin' boy (ha-ha!)|
        You're witnessin' a mass-occur|
        Like you're watching a church gathering take place, lookin' boy|
        "Oy vey, that boy's gay!", that's all they say, lookin' boy|
        You get a thumbs up, pat on the back|
        And a "way to go" from your label every day, lookin' boy|
        Hey, lookin' boy! What you say, lookin' boy?|
        I get a "hell yeah" from Dre, lookin' boy|
        I'ma work for everything I have, never asked nobody for shit|
        Get outta my face, lookin' boy!|
        Basically, boy, you're never gonna be capable|
        Of keepin' up with the same pace, lookin' boy, 'cause-|
        I'm beginnin' to feel like a Rap God, Rap God|
        All my people from the front to the back nod, back nod|
        The way I'm racin' around the track, call me NASCAR, NASCAR|
        Dale Earnhardt of the trailer park, the White Trash God|
        Kneel before General Zod|
        This planet's Krypton-, no, Asgard, Asgard|
        So you'll be Thor and I'll be Odin|
        You rodent, I'm omnipotent|
        Let off, then I'm reloadin'|
        Immediately with these bombs I'm totin'|
        And I should not be woken|
        I'm the walkin' dead, but I'm just a talkin' head, a zombie floatin'|
        But I got your mom deep-throatin'|
        I'm out my Ramen Noodle|
        We have nothin' in common, poodle|
        I'm a Doberman, pinch yourself in the arm and pay homage, pupil|
        It's me, my honesty's brutal|
        But it's honestly futile if I don't utilize what I do though|
        For good at least once in a while|
        So I wanna make sure somewhere in this chicken scratch I scribble and doodle eno|ugh rhymes
        To maybe try to help get some people through tough times|
        But I gotta keep a few punchlines|
        Just in case 'cause even you unsigned|
        Rappers are hungry lookin' at me like it's lunchtime|
        I know there was a time where once I|
        Was king of the underground|
        But I still rap like I'm on my Pharoahe Monch grind|
        So I crunch rhymes, but sometimes when you combine|
        Appeal with the skin color of mine|
        You get too big and here they come tryin'|
        To censor you like that one line|
        I said on "I'm Back" from The Mathers LP 1 when I|
        Tried to say I'll take seven kids from Columbine|
        Put 'em all in a line, add an AK-47, a revolver and a .9|
        See if I get away with it now that I ain't as big as I was, but I'm|
        Morphin' into an immortal, comin' through the portal|
        You're stuck in a time warp from 2004 though|
        And I don't know what the fuck that you rhyme for|
        You're pointless as Rapunzel with fuckin' cornrows|
        You write normal? Fuck being normal!|
        And I just bought a new raygun from the future|
        Just to come and shoot ya, like when Fabolous made Ray J mad|
        'Cause Fab said he looked like a fag at Mayweather's pad|
        Singin' to a man while he played piano|
        So Ray J went straight to the radio station|
        The very next day, "Hey Fab, I'ma kill you!"|
        Lyrics comin' at you at supersonic speed (J.J. Fad)|
        Uh, summa-lumma, dooma-lumma, you assumin' I'm a human|
        What I gotta do to get it through to you I'm superhuman?|
        Innovative and I'm made of rubber so that anything|
        You say is ricochetin' off of me, and it'll glue to you and|
        I'm devastating, more than ever demonstrating|
        How to give a motherfuckin' audience a feeling like it's levitating|
        Never fading, and I know the haters are forever waiting|
        For the day that they can say I fell off, they'll be celebrating|
        'Cause I know the way to get 'em motivated|
        I make elevating music, you make elevator music|
        "Oh, he's too mainstream"|
        Well, that's what they do when they get jealous, they confuse it|
        "It's not hip-hop, it's pop, " 'cause I found a hella way to fuse it|
        With rock, shock rap with Doc|
        Throw on "Lose Yourself" and make 'em lose it|
        "I don't know how to make songs like that|
        I don't know what words to use"|
        Let me know when it occurs to you|
        While I'm rippin' any one of these verses that versus you|
        It's curtains, I'm inadvertently hurtin' you|
        How many verses I gotta murder to|
        Prove that if you were half as nice, your songs you could sacrifice virgins too?|
        Ugh, school flunky, pill junkie|
        But look at the accolades these skills brung me|
        Full of myself, but still hungry|
        I bully myself 'cause I make me do what I put my mind to|
        And I'm a million leagues above you|
        Ill when I speak in tongues, but it's still tongue-in-cheek, fuck you|
        I'm drunk, so, Satan, take the fucking wheel|
        I'ma sleep in the front seat|
        Bumpin' Heavy D and the Boyz, still "Chunky but Funky"|
        But in my head, there's something I can feel tugging and struggling|
        Angels fight with devils and here's what they want from me|
        They're askin' me to eliminate some of the women hate|
        But if you take into consideration the bitter hatred|
        I have, then you may be a little patient|
        And more sympathetic to the situation|
        And understand the discrimination|
        But fuck it, life's handin' you lemons? Make lemonade then!|
        But if I can't batter the women|
        How the fuck am I supposed to bake them a cake then?|
        Don't mistake him for Satan; it's a fatal mistake|
        If you think I need to be overseas and take a vacation|
        To trip a broad, and make her fall on her face and|
        Don't be a retard, be a king? Think not|
        Why be a king when you can be a god?`
    },
],
spanish: <Song[]>[
    {
        name: 'Comienza la Funcion',
        id: '5KtbsLwcSW3MSzDWm5o3EU',
        artist: 'TeCanela',
        duration: '3:19',
        lyrics: `Comienza a función al son del don de esta candela|
        Fuego para que prenda el calor de las antenas|
        Y que ruja este talent show como un león buscando presa|
        Bailes de guión hasta tu casa, extractos de un poder "teledivino",|
        Sueños que salen de casa y son cazados por el camino|
        El algodón no engaña,|
        En esta España de Ristos, Chicotes, de saltos de fama,|
        De talentos pagando el precio de que|
        La cultura esté un día más de rebajas|
        Tiemblan los escenarios,|
        Cantan los canarios dentro de su jaula|
        Gladiadores saltando a la arena, subastadoras juntando plata|
        Para comprar su voz, para vestirla bien, para poder gastarla|
        Fuera de los focos el apagón va dejando sin guita la guitarra,|
        Sin baile el barrio, sin lienzo el aire|
        Se está quemando el corazón|
        Otra audición de otra edición,|
        Ya es tradición ser parte de este casting|
        Que ser jurado está de moda,|
        Los músicos a solas y el mundo haciendo cola en otro reality|
        Que siga la competición, salga al ring, dispare en la pantalla,|
        Que tres personas decidan si das la talla|
        Mira, dame tu sueño "become a star"|
        La calle acalla así que canta ya|
        Y mantente bien arriba de la ola|
        Que para la música callejera no hay sitio en las emisoras|
        Tiemblan los escenarios,|
        Cantan los canarios dentro de su jaula|
        Gladiadores saltando a la arena, subastadoras juntando plata|
        Para comprar su voz, para vestirla bien, para poder gastarla|
        Fuera de los focos el apagón va dejando sin guita la guitarra|
        Sin baile el barrio, sin lienzo el aire|
        Se está quemando el corazón|
        Otra audición de otra edición,|
        Ya es tradición ser parte de este casting|
        Que ser jurado está de moda,|
        Los músicos a solas y el mundo haciendo cola en otro reality`
    },
    {
        name: 'Movimiento',
        id: '7pBoi7yWCPzn3UjeMsGKg6',
        artist: 'Jorge Drexler',
        duration: '3:51',
        lyrics: `Apenas nos pusimos en dos pies|
        Comenzamos a migrar por la sabana|
        Siguiendo la manada de bisontes|
        Más allá del horizonte|
        A nuevas tierras, lejanas|
        Los niños a la espalda y expectantes|
        Los ojos en alerta, todo oídos|
        Olfateando aquel desconcertante paisaje nuevo, descono|cido
        Somos una especie en viaje|
        No tenemos pertenencias sino equipaje|
        Vamos con el polen en el viento|
        Estamos vivos porque estamos en movimiento|
        Nunca estamos quietos, somos trashumantes|
        Somos padres, hijos, nietos y bisnietos de inmigrantes|
        Es más mío le que sueño que lo que toco|
        Yo no soy de aquí|
        Pero tú tampoco|
        Yo no soy de aquí|
        Pero tú tampoco|
        De ningún lado del todo|
        De todos lados un poco|
        Atravesamos desiertos, glaciares, continentes|
        El mundo entero de extremo a extremo|
        Empecinados, supervivientes|
        El ojo en el viento y en las corrientes|
        La mano firme en el remo|
        Cargamos con nuestras guerras|
        Nuestras canciones de cuna|
        Nuestro rumbo hecho de versos|
        De migraciones, de hambrunas|
        Y así ha sido desde siempre, desde el infinito|
        Fuimos la gota de agua viajando en el meteorito|
        Cruzamos galaxias, vacío, milenios|
        Buscábamos oxígeno, encontramos sueños|
        Apenas nos pusimos en dos pies|
        Y nos vimos en la sombra de la hoguera|
        Escuchamos la voz del desafío|
        Siempre miramos el río|
        Pensando en la otra rivera|
        Somos una especie en viaje|
        No tenemos pertenencias sino equipaje|
        Vamos con el polen en el viento|
        Estamos vivos porque estamos en movimiento|
        Nunca estamos quietos, somos trashumantes|
        Somos padres, hijos, nietos y bisnietos de inmigrantes|
        Es más mío le que sueño que lo que toco|
        Yo no soy de aquí|
        Pero tú tampoco|
        Yo no soy de aquí|
        Pero tú tampoco|
        De ningún lado del todo y|
        De todos lados un poco|
        Lo mismo con las canciones, los pájaros, los alfabetos|
        Si quieres que algo se muera, déjalo quieto`
    },
    {
        name: 'Una Cancion Nada Mas',
        id: '5u4QToM0UQ15isroQXPOzR',
        artist: 'Mr. Kilombo',
        duration: '2:47',
        lyrics: `Es un antídoto contra la pena|
        es una antena y un caleidoscopio|
        un cuento ajeno, que se hace propio|
        es un veneno que nunca envenena|
        es un resorte de la sonrisa|
        es una calma en mitad del monzón|
        abre el pulmón, quita la prisa|
        y en una repisa reposa el corazón|
        Un refugio nuclear|
        es un espacio seguro|
        es un puente sobre el muro|
        una canción nada más|
        Un refugio nuclear|
        es un espacio seguro|
        es un puente sobre el muro|
        una canción nada más|
        Es el cincel para romper el hielo|
        es la bujía que prende el desquite|
        una arboleda que te permite ir|
        de rama en rama sin pisar el suelo|
        punto de encuentro de las rencillas|
        una sencilla manera de amar|
        es un atajo y una cosquilla|
        placebo y semilla, monte de azafrán|
        Un refugio nuclear|
        es un espacio seguro|
        es un puente sobre el muro|
        una canción nada más|
        Un refugio nuclear|
        es un espacio seguro|
        es un puente sobre el muro|
        una canción nada más|
        Un refugio nuclear|
        es un espacio seguro|
        es un puente sobre el muro|
        una canción nada más|
        Un refugio nuclear|
        es un espacio seguro|
        es un puente sobre el muro|
        una canción nada más|
        Te vi pasar|
        te conocí|
        y ya perdí|
        los huesos por tu tumbao`
    },
    {
        name: 'Guitarra y Vos',
        id: '0bsYD4JWWrUqXXUXDi8SYK',
        artist: 'Jorge Drexler',
        duration: '3:55',
        lyrics: `Que viva la ciencia, que viva la poesía|
        Que viva siento mi lengua|
        Cuando tu lengua está sobre la lengua mía|
        El agua esta en el barro, el barro en el ladrillo|
        El ladrillo está en la pared y en la pared tu fotografía|
        Es cierto que no hay arte sin emoción|
        Y que no hay precisión sin artesanía|
        Como tampoco hay guitarras sin tecnología|
        Tecnología del nylon para las primas|
        Tecnología del metal para el clavijero|
        La prensa, la gubia y el barniz:|
        Las herramientas del carpintero|
        El cantautor y su computadora|
        El pastor y su afeitadora|
        El despertador que ya está anunciando la aurora|
        Y en el telescopio se demora la última estrella|
        La máquina la hace el hombre|
        Y es lo que el hombre hace con ella|
        El arado, la rueda, el molino|
        La mesa en que apoyo el vaso de vino|
        Las curvas de la montaña rusa|
        La semicorchea y hasta la semifusa|
        El té, los ordenadores y los espejos|
        Los lentes para ver de cerca y de lejos|
        La cucha del perro, la mantequilla|
        La yerba, el mate y la bombilla|
        Estás conmigo|
        Estamos cantando a la sombra de nuestra parra|
        Una canción que dice que uno solo conserva lo que no amarra|
        Y sin tenerte, te tengo a vos y tengo a mi guitarra|
        Hay tantas cosas|
        Yo solo preciso dos:|
        Mi guitarra y vos|
        Mi guitarra y vos|
        Hay tantas cosas|
        Yo solo preciso dos:|
        Mi guitarra y vos|
        Mi guitarra y vos|
        Hay cines, hay trenes, hay cacerolas|
        Hay fórmulas hasta para describir la espiral de una caracola|
        Hay más: hay tráfico, créditos, cláusulas, salas vip|
        Hay cápsulas hipnóticas y tomografias computarizadas|
        Hay condiciones para la constitución de una sociedad limitada|
        Hay biberones y hay obúses|
        Hay tabúes, hay besos|
        Hay hambre y hay sobrepeso|
        Hay curas de sueño y tisanas|
        Hay drogas de diseño y perros adictos a las drogas en las aduanas|
        Hay manos capaces de fabricar herramientas|
        Con las que se hacen máquinas para hacer ordenadores|
        Que a su vez diseñan máquinas que hacen herramientas|
        Para que las use la mano|
        Hay escritas infinitas palabras:|
        Zen, gol, bang, rap, Dios, fin...|
        Hay tantas cosas|
        Yo solo preciso dos:|
        Mi guitarra y vos|
        Mi guitarra y vos|
        Hay tantas cosas|
        Yo solo preciso dos:|
        Mi guitarra y vos|
        Mi guitarra y vos|
        Hay tantas cosas|
        Yo solo preciso dos:|
        Mi guitarra y vos|
        Mi guitarra y vos|
        Hay tantas cosas|
        Yo solo preciso dos:|
        Mi guitarra y vos|
        Mi guitarra y vos`
    },
    {
        name: 'La Complicidad',
        id: '2urvQqG10v0AysBX1i8ntz',
        artist: 'Perota Chingo',
        duration: '4:04',
        lyrics: `Soy el verbo que da acción a una buena conversación|
        Y cuando tu me nombras siente ganas|
        Soy la nueva alternativa contra contaminación|
        Y tu eres la energía que me carga|
        Soy una arboleda que da sombra a tu casa|
        Un viento suave que te soba la cara|
        De too's tus sueños, negra, soy la manifestación|
        Tu eres esa libertad soñada|
        Soy la serenidad que lleva a la meditación|
        Y tu eres ese tan sagrado mantra|
        Soy ese juguito e' parcha que te baja la presión|
        Y siempre que te sube tu me llamas ya|
        Tira la sábana sal de la cama|
        Vamos a conquistar toda la casa|
        De todo lo que tu acostumbras soy contradicción|
        Creo que eso es lo que a ti te llama|
        La complicidad es tanta|
        Que nuestras vibraciones se complementan|
        Lo que tienes me hace falta|
        Y lo que tengo te hace ser más completa|
        La afinidad es tanta|
        Miro a tus ojos y ya se lo que piensas|
        Te quiero por que eres tantas|
        Cositas bellas que me hacen creer que soy|
        La levadura que te hace crecer el corazón|
        Y tu la vitamina que me falta|
        Soy ese rocío que se posa en tu vegetación|
        Y tu esa tierra fértil que esta escasa|
        Soy La blanca arena que alfombra tu playa|
        Todo el follaje que da vida a tu mapa|
        De toda idea creativa soy la gestación|
        Tu eres la utopía deseada|
        La complicidad es tanta|
        Que nuestras vibraciones se complementan|
        Lo que tienes me hace falta|
        Y lo que tengo te hace ser más completa|
        La afinidad es tanta miro a tus ojos|
        Y ya se lo que piensas|
        Te quiero por que eres tantas cositas|
        Bellas que me hacen sentir muy bien|
        Soy la locura que estremece,|
        Soy tu adicción y tu eres mi felicidad, mi calma|
        Soy una colonia que va en busca de liberación|
        Y tu eres esa dosis de esperanza|
        Soy la cordillera que en la distancia|
        Te cura la visión con su elegancia|
        De todo loco que lo intenta soy la frustración|
        Y tu eres ese reto que me encanta|
        La complicidad es tanta|
        Que nuestras vibraciones se complementan|
        Lo que tienes me hace falta|
        Y lo que tengo te hace ser más completa|
        La afinidad es tanta miro a tus ojos|
        Y ya se lo que piensas|
        Te quiero por que eres tantas|
        Cositas bellas que me hacen sentir muy bien|
        La complicidad es tanta|
        Que nuestras vibraciones se complementan|
        Lo que tienes me hace falta|
        Y lo que tengo te hace ser más completa|
        La afinidad es tanta miro a tus ojos|
        Y ya se lo que piensas|
        Te quiero por que eres tantas|
        Cositas bellas que me hacen sentir muy bien`
    },
]
}