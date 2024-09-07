let dados = [
    {
        titulo: "Cyberpunk 2077",
        descricao: "Cyberpunk 2077 é um RPG de ação em mundo aberto ambientado em Night City, uma megalópole futurista dominada por corporações e tecnologia. Assuma o papel de um mercenário customizável e embarque em uma jornada épica repleta de escolhas que moldarão a história.",
        link: "https://www.cyberpunk.net/br/pt-br/",
    },
    {
        titulo: "Black Myth: Wukong",
        descricao: "Black Myth: Wukong é um RPG de ação em terceira pessoa inspirado na lenda chinesa do Rei Macaco. O jogo promete gráficos impressionantes e uma jogabilidade desafiadora, com combates frenéticos e habilidades mágicas.",
        link: "https://www.heishenhua.com//",
    },
    {
        titulo: "Elden Ring",
        descricao: "Elden Ring é um RPG de ação desenvolvido por FromSoftware, os criadores da série Dark Souls. Ambientado em um mundo aberto e sombrio, o jogo oferece uma experiência desafiadora e rica em exploração, com combates intensos e um sistema de progressão profundo.",
        link: "https://eldenring.bn-ent.net/en/",
    },
    {
        titulo: "League of Legends",
        descricao: "League of Legends é um jogo multiplayer online battle arena (MOBA) gratuito, onde equipes de cinco jogadores se enfrentam em batalhas táticas.",
        link: "https://www.leagueoflegends.com/"
    },
    {
        titulo: "Minecraft",
        descricao: "Minecraft é um jogo de construção em mundo aberto onde os jogadores podem explorar, criar e sobreviver em um mundo gerado proceduralmente.",
        link: "https://www.minecraft.net/",
    },
    {
        titulo: "The Witcher 3: Wild Hunt",
        descricao: "The Witcher 3: Wild Hunt é um RPG de ação em mundo aberto ambientado em um mundo de fantasia medieval. Assuma o papel de Geralt de Rivia, um caçador de monstros, e embarque em uma jornada épica para encontrar sua filha adotiva.",
        link: "https://www.thewitcher.com/"
        },
    {
        titulo: "Red Dead Redemption 2",
        descricao: "Red Dead Redemption 2 é um jogo de mundo aberto ambientado no Velho Oeste. Assuma o papel de Arthur Morgan, um fora da lei, e sobreviva em um mundo implacável enquanto a era do faroeste chega ao fim.",
        link: "https://www.rockstargames.com/reddeadredemption2/",
    },
    {
        titulo: "Persona 5",
        descricao: "Persona 5 é um RPG japonês que coloca os jogadores no papel de estudantes do ensino médio com a habilidade de invocar Personas, representações de suas almas, para lutar contra sombras corruptas.",
        link: "https://www.atlus.com/persona5/",
    },
    {
        titulo: "Hollow Knight",
        descricao: "Hollow Knight é um metroidvania 2D com gráficos belíssimos e uma jogabilidade desafiadora, ambientado em um reino subterrâneo infestado por insetos.",
        link: "https://www.hollowknight.com/",
    },
    {
        titulo: "Cuphead",
        descricao: "Cuphead é um jogo de tiro em 2D com animações à mão, inspirado em desenhos animados dos anos 30. O jogo é conhecido por sua dificuldade e trilha sonora jazzística.",
        link: "https://www.cupheadgame.com/",
    },
    {
        titulo: "Tomb Raider",
        descricao: "Tomb Raider é um reboot da franquia clássica, apresentando uma Lara Croft mais jovem e vulnerável. O jogo combina exploração de tumbas, combate e resolução de puzzles.",
        link: "https://www.tombraider.com/",
    },
    {
        titulo: "Resident Evil",
        descricao: "Resident Evil é uma franquia de survival horror conhecida por seus zumbis e atmosfera tensa. A série oferece uma variedade de jogos, cada um com sua própria história e personagens.",
        link: "https://game.capcom.com/residentevil/en/",
    },
    {
        titulo: "Alan Wake",
        descricao: "Alan Wake é um jogo de terror psicológico que segue a história de um escritor que sofre de amnésia e se vê preso em uma pequena cidade aterrorizada por forças sobrenaturais.",
        link: "https://www.alanwake.com/",
    },
    {
        titulo: "The Evil Within",
        descricao: "The Evil Within é um jogo de survival horror desenvolvido por Shinji Mikami, criador da série Resident Evil. O jogo oferece uma experiência assustadora e atmosférica.",
        link: "https://www.bethesda.net/en/game/the-evil-within",
    },
    {
        titulo: "Baldur's Gate 3",
        descricao: "Baldur's Gate 3 é um RPG de ação desenvolvido pela Larian Studios, baseado no universo de Dungeons & Dragons. O jogo oferece uma narrativa rica e um mundo aberto para explorar.",
        link: "https://www.larian.com/games/baldurs-gate-3",
    },
    // Adicione os demais jogos aqui...
    {
        titulo: "Hogwarts Legacy",
        descricao: "Hogwarts Legacy é um jogo de RPG de ação ambientado no universo de Harry Potter, permitindo que os jogadores criem seus próprios personagens e explorem o mundo mágico.",
        link: "https://www.hogwartslegacy.com/",
    },
    {
        titulo: "Tekken 8",
        descricao: "Tekken 8 é um jogo de luta desenvolvido pela Bandai Namco, conhecido por seus combates intensos e personagens carismáticos.",
        link: "https://www.tekken.com/",
    },
    {
        titulo: "It Takes Two",
        descricao: "It Takes Two é um jogo cooperativo focado em narrativa, onde dois jogadores controlam personagens diferentes em uma aventura única.",
        link: "https://www.ea.com/games/it-takes-two",
    },
    {
        titulo: "Hellblade",
        descricao: "Hellblade: Senua's Sacrifice é um jogo de ação e aventura que explora temas como a doença mental e a mitologia nórdica.",
        link: "https://www.hellblade.com/",
    },
    {
        titulo: "Diablo IV",
        descricao: "Diablo IV é um RPG de ação hack and slash desenvolvido pela Blizzard Entertainment, conhecido por seus combates frenéticos e masmorras geradas proceduralmente.",
        link: "https://diablo.blizzard.com/",
    },
    {
        titulo: "God of War Ragnarok",
        descricao: "God of War Ragnarok é um jogo de ação e aventura que continua a história de Kratos e seu filho Atreus, em uma jornada épica através dos nove reinos.",
        link: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/",
    },
    {
        titulo: "Euro Truck Simulator 2",
        descricao: "Euro Truck Simulator 2 é um simulador de caminhão que permite aos jogadores explorar a Europa, entregando cargas e construindo seu próprio império de transporte.",
        link: "https://www.eurotrucksimulator2.com/",
    },
    {
        titulo: "Fortnite",
        descricao: "Fortnite é um jogo online gratuito que combina elementos de battle royale, construção e cooperação.No modo Battle Royale, até 100 jogadores são lançados de um ônibus em uma ilha gigante, onde devem procurar itens para sobreviver",
        link: "https://www.epicgames.com/fortnite/",
    },
];