// ===== 全站页面数据（SEO 架构版）=====
// 结构依据 SEO 架构：核心内页平级路由 /guide/ /characters/ /story/ /platforms/ /dlc/ ...
// 内容提炼自项目根目录调研文件（guide/characters/story/platforms/dlc 等），均为已核验事实，未虚构。

export interface PageSection {
  h: string;
  text?: string;
  list?: string[];
}

export interface PageData {
  slug: string;
  /** 页面 H1 */
  title: string;
  /** <title>，用于 SEO */
  seoTitle: string;
  /** meta description，用于 SEO */
  seoDescription: string;
  /** H1 下方导语 */
  description: string;
  category: string;
  updated: string;
  sections: PageSection[];
}

export const pages: PageData[] = [
  {
    slug: 'guide',
    title: 'Another Eden Begins Guide',
    seoTitle: 'Another Eden Begins Guide | Beginner Tips & Walkthrough',
    seoDescription:
      'Another Eden Begins guide with beginner tips, gameplay information, walkthrough help, and useful resources for new players.',
    description:
      'The complete beginner resource for Another Eden Begins — core systems, party setup, battles, progression, and essential mechanics before you start your journey.',
    category: 'Guide',
    updated: 'Sep 17, 2026',
    sections: [
      {
        h: 'Getting Started with Another Eden Begins',
        text:
          'The story opens in Baruoki Village, where Aldo trains with Darunis and helps with village errands. Early on you will earn the Village Guard Proof badge — a +1 MP Regen badge that restores 10 MP per turn, worth keeping through the first chapters. Chests in the opening area hold a Longsword, a Leather Bangle and the Ruby Staff for Feinne, and an underground cave hides 500 Git plus the River of Time Water respec item. Follow the story into the Moonlight Forest, where the journey truly begins — but be warned that your first meeting with the Beast King is a scripted defeat, so save your items. After the Vares fight you step through a rift into a world 800 years in the future, and the full adventure opens up from there.',
        list: [
          'Village Guard Proof badge: +1 MP Regen, restores 10 MP per turn — keep it early.',
          'Key early chests: Longsword, Leather Bangle and Ruby Staff (for Feinne).',
          'Underground cave near the start: 500 Git plus the River of Time Water.',
          'The first Beast King fight is scripted — do not waste healing items there.',
          'Hidden path near the end of the opening area leads to the Ratle-Carved Statuette.',
        ],
      },
      {
        h: 'Gameplay Basics',
        text:
          'Two map styles to get used to. Free-roaming fields show wandering enemies, treasure chests and quest markers directly — there is no fog of war, so you can plan your route. Dungeon maps unlock gradually as you explore, and clearing them in full reveals the way forward. Chests hide weapons, bangles and items: a Longsword, Leather Bangle and Ruby Staff (for Feinne) appear early, and an underground cave holds 500 Git plus the River of Time Water respec item. The world energy of Prisma comes in four elements — fire, water, earth and wind — and drives both skills and field puzzles, so pay attention to element colours when solving puzzles or picking targets.',
        list: [
          'Camps matter: the Moonlight Forest Edge unlocks a Camp where you rest and cook meals for battle buffs.',
          'The Industrial Ruins Sky Bridge Camp unlocks Gift-giving, which raises Kinship between companions.',
          'In Route 99, an NPC opens the Junk Shop, where Crimson Gems are traded for consumables.',
        ],
      },
      {
        h: 'Battle Basics',
        text:
          'Battles are command-based with no random encounters — enemies are visible on the field, so you can choose your fights deliberately. Attacks build the Another Force gauge, which unlocks continuous follow-up attacks when full; saving it for boss fights is the standard strategy. Build a balanced party of damage, support and healing, and learn each character’s Chain Skill timing, because Chain Skills trigger automatically once their CP gauge fills. Horror-type enemies sit a class above normal foes: they guard valuable chests, are far stronger than anything around them, and drop their own badges when defeated. Fighting them the first time you meet them is usually the smartest path.',
        list: [
          'Save Another Force for bosses and dangerous encounters.',
          'Chain Skills fire automatically once the CP gauge is full.',
          'Horror enemies (Stoneguard Abbetos, Forest Guardian, Vibrant Talon, Arianhod, Vengeful Soldier, Durable Agateram) drop unique badges.',
        ],
      },
      {
        h: 'Character Basics',
        text:
          'Beyond the Main Party you can prepare up to 3 Another Parties, swapped in with Valor commands. Characters in either party earn full EXP and Kinship EXP; characters left out of both gain nothing, so rotate freely. Each companion brings a party role, personal skill trees, character quests and kinship quests. Finish a character’s full quest line to earn their Character Badge — equip it on another character of the same weapon type and they can use that character’s Chain Skill, which lets units gain element coverage they normally lack. Encounter Quests introduce each companion, Character Quests deepen their personal stories, and Kinship Quests unlock as your bonds grow across the three eras.',
      },
      {
        h: 'Another Eden Begins Walkthrough Overview',
        text:
          'The main story runs 26 chapters across three eras. The early chapters (1-5) cover Baruoki, the Moonlight Forest, the sky city Elzion and the first clash with the Synth Humans. The middle arc (6-13) moves through Acteul, Palsifal Palace, the man-eating marsh and the Tower of Time, and ends with Miglance Castle in flames. The later arc (14-20) returns to Elzion, reveals the truth about Chronos, survives the Great Timequake and faces the Synth Hydra. The finale (21-26) climbs the Tower of Stars, infiltrates the Beast King’s Castle, storms the Dimensional Vortex and ends with the battle against Chronos’s Umbra before the emotional farewell of “All My Friends: Beyond Time and Space.”',
        list: [
          'Chapters 1-5: Baruoki → Moonlight Forest → Elzion → Synth Humans.',
          'Chapters 6-13: Acteul, Palsifal Palace, Tower of Time, Miglance Castle.',
          'Chapters 14-20: Return to Elzion, Chronos, the Great Timequake, Synth Hydra.',
          'Chapters 21-26: Tower of Stars, Beast King’s Castle, Dimensional Vortex, Chronos’s Umbra.',
        ],
      },
      {
        h: 'Progression & New Game+',
        text:
          'Progression is character-first: level up in battle, spend ability points on two skill trees per character, forge gear from materials, and reset ability points anytime with the River of Time Water. Completing the main story unlocks New Game+ — your party keeps their strength, a mysterious girl named Ramiu guides the second journey, and the choices you make branch into more than 10 different endings. New Game+ also adds exclusive equipment and a new companion to recruit, which is why many players treat the first playthrough as preparation for the second.',
        list: [
          'Ability points can be reset freely with the River of Time Water.',
          'New Game+ keeps character strength and adds exclusive gear.',
          'More than 10 endings branch from choices made in New Game+.',
        ],
      },
      {
        h: 'Useful Tips',
        list: [
          'Register cats to your Cat Codex — there are 56 across the game, and registered cats can follow Aldo. Early finds: Varuo (start), Langelo (Baruoki NE), Peasuke (Baruoki SE), Leale (Nuaru Uplands west), Kassy and Gust (Elzion airport), Gear (Theta district), Chain and Millie (Gamma district), plus Kotaro and Sabi on Route 99.',
          'Horror-type enemies (Stoneguard Abbetos, Forest Guardian, Vibrant Talon, Arianhod, Vengeful Soldier, Durable Agateram) are far stronger than normal foes, guard valuable chests, and drop their own badges when defeated. Fight them the first time you meet them.',
          'The River of Time Water lets you reset character ability points (respec), so experiment freely with builds.',
          'Cook meals at Camps before tough fights — the battle buffs stack and make longer bosses noticeably easier.',
          'Trade Crimson Gems at the Route 99 Junk Shop for consumables instead of hoarding them.',
          'On Steam you get 28 achievements, full controller support and automatic cloud saves.',
        ],
      },
      {
        h: 'Another Eden Begins Guide FAQ',
        list: [
          'How many chapters are there? — The main story runs 26 chapters.',
          'Is the game single-player? — Yes, it is fully single-player.',
          'Does progress carry into New Game+? — Yes, characters keep their strength; see the Story page for details.',
          'Is there a demo? — Yes, a free demo covers the opening chapters and saves carry over.',
          'How many endings are there? — More than 10, unlocked through New Game+ choices.',
          'Can I respec characters? — Yes, using the River of Time Water item.',
          'Does it support controllers? — Yes, full controller support on Steam.',
        ],
      },
    ],
  },
  {
    slug: 'characters',
    title: 'Another Eden Begins Characters',
    seoTitle: 'Another Eden Begins Characters | Character Guide',
    seoDescription:
      'All 19 playable characters in Another Eden Begins, with roles, skills, quests and progression explained in one place.',
    description:
      'Every playable companion in Another Eden Begins — recruitment, party roles, skills, quests and how character progression works.',
    category: 'Characters',
    updated: 'Sep 17, 2026',
    sections: [
      {
        h: 'Another Eden Begins Character List',
        text:
          'The roster spans 19 playable characters in total — 18 companions met during the main story plus Ramiu, who joins as a guide in New Game+. In recruitment order: Aldo (sword, fire), Feinne (staff), Riica (battle/support android), Amy (fists, wind), Yuna (purification), Cyrus (Enku Jizai swordsman), Suzette (spear, wind), Melina (hammer), Mariel (healing), Anabel (paladin), Cetie (spear), Renri (execution), Helena (demolition), Shion (katana), Bertrand (royal spear), Gariyu (hellfire), Shanie (water sword), Myrus (beast), and Ramiu (planet blessing, New Game+ guide). Every companion has a distinct weapon, element and party role, so the roster supports a wide range of team compositions.',
      },
      {
        h: 'Character Stories',
        text:
          'Aldo and Feinne were adopted as infants by the village chief of Baruoki and raised together for 16 years — Aldo joined the village guard, while Feinne hid a mysterious power that the Beast King eventually seizes. Aldo is straightforward and selfless, rushing into danger to save others; Feinne is gentle and adventurous, the emotional anchor of the party. Around them, the game builds companions with distinct personalities: the confident and energetic hunter Amy, the mysterious frog samurai Cyrus, the android Riica who wants to help people, and the dark princess Suzette who lives by “fake it till you make it.” The companions come from different eras and races, and their storylines are tied to the timeline: Bertrand (former royal knight, now a mercenary) and Mariel (a priestess who fled the church) belong to the Present; Riica and Amy have personal ties to the Synth Rebellion in the Future; Yuna (a young shrine maiden) and Cyrus (a masterless swordsman) belong to Antiquity.',
      },
      {
        h: 'Character Roles',
        text:
          'Each companion fits a clear role, and most shine in specific fight archetypes:',
        list: [
          'Aldo — fire sword damage; builds CP fast for Chain Skill follow-ups.',
          'Yuna — mage who charges CP by healing, then boosts water-type damage.',
          'Feinne — healer/support with Maiden Prayer, Fairy Light Regen, status recovery and barriers.',
          'Suzette — wind spear with poison/paralysis stacking; Dragonbuster punishes poisoned targets.',
          'Riica — android with two modes: battle and support.',
          'Cyrus — mysterious frog samurai wielding Enku Jizai sword arts.',
          'Mariel — healing priestess with light blessings and recovery prayers.',
          'Anabel — paladin carrying sword and shield, protecting the frontline.',
        ],
      },
      {
        h: 'Character Skills',
        text:
          'Each character grows along two skill trees — for example Aldo’s fire Sword Draw tree and his general Sword Skills tree:',
        list: [
          'Booster nodes add stat bonuses (PWR, INT, and more); passives cover crit rate, weakness damage and Break.',
          'Chain Skills trigger automatically once their CP gauge fills.',
          'Skill upgrades evolve abilities, such as Fire Slash upgrading into Volcano Blade.',
        ],
      },
      {
        h: 'Recruitment & Party',
        text:
          'Companions join at different points of the story, some temporarily. Feinne joins for Chapter 1 but only permanently in Chapter 23; Amy joins in Chapter 3 and permanently in Chapter 11; Suzette unlocks through the “New Encounter: Suzette” side quest in Chapter 11; and Ramiu is exclusive to New Game+. Recruiting a character is only the start — each one carries an Encounter Quest, a Character Quest and a Kinship Quest that develop their personal story.',
        list: [
          'Aldo — playable from the start.',
          'Feinne — temporary in Chapter 1, permanent from Chapter 23.',
          'Amy — temporary in Chapter 3, permanent from Chapter 11.',
          'Suzette — unlocked via side quest in Chapter 11.',
          'Ramiu — joins as guide in New Game+ only.',
        ],
      },
      {
        h: 'Character Quests',
        text:
          'Finish a character’s full quest line to earn their Character Badge. Equip it on another character of the same weapon type and they can use that character’s Chain Skill — letting units gain element coverage they normally lack. The quest system also feeds progression beyond battle: Encounter Quests introduce each companion, Character Quests deepen their personal stories, and Kinship Quests unlock as your bonds grow. The main story is fully voiced in Japanese and English, with a cast that includes Jared Zeus as Aldo and Leader Looi as Feinne and Ramiu.',
      },
      {
        h: 'Character Information',
        text:
          'Beyond the main story, the 18 companions are distributed across the three eras of the timeline, and their quests weave into the chapter structure. Because the game rebuilds the mobile original without gacha, every character is earned through story and quests rather than pulls — reviewers have praised this as the biggest improvement over the source material. Reviews also highlight how sharply the cast is characterized: the confident and energetic Amy, the mysterious frog samurai Cyrus and the dark princess Suzette each carry their own background, tone and battle identity. The only structural criticism reviewers note is that some story cutscenes assume companions you have not recruited yet, a leftover of the mobile original’s structure.',
      },
      {
        h: 'Character Progression Tips',
        text:
          'Because every companion earns full EXP in Main and Another Parties, the roster encourages rotation rather than a fixed four. A few practical notes:',
        list: [
          'Rotate regularly so everyone keeps pace — characters left out of both parties gain nothing.',
          'Spend ability points deliberately: Booster nodes, passives and Chain Skill upgrades all draw from the same pool.',
          'Equip Character Badges across weapon types to borrow Chain Skills for element coverage.',
          'Push Kinship early with meals and gifts at Camps to unlock Kinship Quests sooner.',
          'Pair DLC characters with matching weapon-type badge holders to cover element gaps.',
        ],
      },
      {
        h: 'Party Building',
        text:
          'With 19 characters across the Main Party and up to 3 Another Parties, team building is flexible. A practical starting pattern:',
        list: [
          'One damage dealer that builds CP quickly — Aldo or Suzette.',
          'One healer or support — Feinne, Mariel or Yuna.',
          'One flex unit for element and role coverage — Cyrus, Riica or Shanie.',
          'Use Another Parties for job-specific setups: cat hunting, Horror farming or boss fights.',
          'The first chapters are forgiving, so experiment instead of chasing an “optimal” team early.',
        ],
      },
      {
        h: 'Another Eden Begins Characters FAQ',
        list: [
          'How many playable characters are there? — 19, including the New Game+ guide Ramiu.',
          'Are all characters free? — Yes, all 19 base characters are earned through story and quests; the gacha systems were removed.',
          'Can DLC add more characters? — Yes, five character packs add 10 more; see the DLC page.',
          'Do DLC characters have English voice acting? — Their quests currently do not.',
          'Is the main story fully voiced? — Yes, the main storyline is fully voiced.',
          'Can I swap characters mid-battle? — Yes, Valor commands swap in up to 3 prepared Another Parties.',
          'Who is the best character? — There is no single best; teams depend on element coverage, role balance and your play style.',
        ],
      },
    ],
  },
  {
    slug: 'story',
    title: 'Another Eden Begins Story',
    seoTitle: 'Another Eden Begins Story | Game Length & Guide',
    seoDescription:
      'Another Eden Begins story overview, setting, chapters, New Game+, endings and how long to beat the game.',
    description:
      'The story of Another Eden Begins across three eras — plus how New Game+, endings and play time work.',
    category: 'Story',
    updated: 'Sep 17, 2026',
    sections: [
      {
        h: 'Another Eden Begins Story Overview',
        text:
          'Aldo and his sister Feinne were adopted by the village chief of Baruoki as infants and raised together for 16 years. The opening chapter follows their quiet life: Aldo trains with Darunis, asks Ashtear about prisma, explores the Nuaru Uplands for a Coconerica Branch, searches for the cat Varuo, and helps the village. When the self-proclaimed Beast King seizes Feinne for her hidden power, Aldo chases him into the Moonlight Forest — and during the fight he is pulled into a spacetime rift that opens onto a world 800 years in the future. From there the story expands across three eras, and the search for Feinne becomes a journey through the history of the world itself.',
      },
      {
        h: 'Prologue Walkthrough',
        text:
          'The first chapter plays out as a short, linear prologue that teaches the systems through story:',
        list: [
          'Train with Darunis in Baruoki to learn the basics of combat.',
          'Ask Ashtear about prisma — the world’s crystal energy.',
          'Find a Coconerica Branch in the Nuaru Uplands.',
          'Defeat a Horror in the village’s underground well cave.',
          'Find Varuo, the first Cat Codex recruit.',
          'Reach the Observatory of Time, then chase the Beast King into the Moonlight Forest.',
          'Fight the Beast King — a scripted loss that sends Aldo through the spacetime rift.',
        ],
      },
      {
        h: 'Setting',
        text: 'The journey spans three eras of the Another Eden world, each with its own rulers, conflicts and companions:',
        list: [
          'The Present · 300 AD — the kingdom of Miglance, where humanity depends on prisma crystal energy and tensions with the Beasts run high.',
          'The Future · 1100 AD — after an accident left the soil barren and irradiated, humanity fled to the sky and built the Shining City of Elzion, where the Synth Rebellion unfolds.',
          'The Antiquity · 20,000 BC — humans live alongside spirits and the four great elementals, while the troubled King Palsifal builds a tower for a wholly unnatural experiment.',
        ],
      },
      {
        h: 'Main Story',
        text:
          'Another Eden Begins is a standalone reconstruction of the first arc of Another Eden: The Cat Beyond Time and Space, retold as a complete console/PC experience. Scenario and direction by Masato Kato (Chrono Trigger, Chrono Cross, Xenogears); main theme by Yasunori Mitsuda, with the score by Procyon Studio. The main storyline is fully voiced, and the writing carries Kato’s signature structure — quiet village life, a sudden abduction, era-spanning conspiracies, and companions whose personal stories interlock with the larger plot. As a scope reference, the early-buy bonus includes a skip code for Part 1 of the mobile game — confirming that the first arc of that story is exactly what this game rebuilds.',
      },
      {
        h: 'Chapters',
        text: 'The full main story runs 26 chapters, from the village to the end of the first arc:',
        list: [
          'Ch1 Dawn Rises in Baruoki',
          'Ch2 Pursuit: The One Waiting in Moonlight Forest',
          'Ch3 Elzion: Echoes in the Skies',
          'Ch4 Roar in the Ruins: Rise of the Synth Humans',
          'Ch5 You\'re Gone?! The Lost Future',
          'Ch6 Salamander Encroached Upon from Another World',
          'Ch7 Acteul: A Shadow Across the Water',
          'Ch8 Palsifal Palace',
          'Ch9 Fear the Man-eating Marsh',
          'Ch10 Tower of Time',
          'Ch11 Spacetime Rift: Lost in Time',
          'Ch12 Homecoming... Ogre Rancorem Roars',
          'Ch13 Fight to the Death: Miglance Castle in Flames',
          'Ch14 Return to Elzion',
          'Ch15 Call from the Stars: Xeno-Domain',
          'Ch16 The Truth About Chronos',
          'Ch17 Cataclysm: Escape the Great Timequake',
          'Ch18 The Great Timequake',
          'Ch19 Twilight of the World',
          'Ch20 The Riftbreaker Embarks! Synth Hydra',
          'Ch21 The Tower of Stars',
          'Ch22 Infiltrating the Beast King\'s Castle',
          'Ch23 Storming the Dimensional Vortex',
          'Ch24 Chronos\'s Umbra Revealed',
          'Ch25 As Time Wails: Fly, Kyros, Fly',
          'Ch26 All My Friends: Beyond Time and Space',
        ],
      },
      {
        h: 'New Game+',
        text: 'New Game+ unlocks after clearing the main story:',
        list: [
          'Characters keep their existing strength and progression.',
          'Ramiu, a lively sand-spirit guide, joins the journey and guides Aldo into new territory.',
          'New narrative content, exclusive equipment and branching paths open up beyond the first arc.',
          'A new companion becomes recruitable, and the choices you make now branch into the different endings.',
        ],
      },
      {
        h: 'Endings',
        text:
          'Your choices and actions across the run branch into more than 10 different endings. The biggest forks sit early: Chapter 4 and Chapter 7 lock in major route decisions, and a dialogue choice in Chapter 8 determines whether the true ending and a hidden boss are reachable. Because the branches exclude each other, seeing every ending in a single playthrough is not realistic — most players map them across New Game+ runs or reload older saves. With a fully built party carried over, later runs can focus on quest completion, kinship bonds and cat collection without re-grinding.',
      },
      {
        h: 'How Long to Beat',
        text:
          'Playtime estimates vary depending on how much you explore. Reviewers and community reports put a story-focused run at roughly 30-50 hours: most first playthroughs land around 30-40 hours, dedicated completionists who clear side stories and quests report 50+ hours, and players chasing all 10+ endings, every memory prism, all 56 cats and the full 28 Steam achievements report well over 100 hours. The free demo covers the first six chapters, and its save carries into the full release — a good way to gauge whether the pacing suits you before buying.',
      },
      {
        h: 'Another Eden Begins Story FAQ',
        list: [
          'Is Another Eden Begins a remake? — It is a standalone reconstruction of the first arc of Another Eden: The Cat Beyond Time and Space.',
          'How many endings are there? — More than 10, reached through New Game+ choices.',
          'Who wrote the story? — Masato Kato (Chrono Trigger, Chrono Cross, Xenogears).',
          'Is the story fully voiced? — Yes, the main storyline is fully voiced.',
          'Does the demo share the full game? — The demo covers the first six chapters and carries saves over.',
          'Does the game have gacha? — No, the gacha systems were removed; all characters are earned through story and quests.',
        ],
      },
      {
        h: 'What to Know Before Playing',
        list: [
          'It is a standalone story — no prior knowledge of the mobile game is required.',
          'The opening hour is deliberately slow: village errands, training and cat-hunting before the abduction.',
          'Expect a story-focused JRPG with heavy text and full voice acting; the first arc runs roughly 30-50 hours.',
          'The demo (first six chapters) is the best way to preview the pacing, and its save carries into the full release.',
          'Chapter 4, 7 and 8 choices shape the endings you can reach, so keep multiple save slots.',
        ],
      },
    ],
  },
  {
    slug: 'platforms',
    title: 'Another Eden Begins Platforms',
    seoTitle: 'Another Eden Begins Platforms | Switch & PC',
    seoDescription:
      'Another Eden Begins platforms: Nintendo Switch, Nintendo Switch 2 and Steam (PC), plus the current PS5 status explained.',
    description:
      'Confirmed platforms for Another Eden Begins, platform differences, and the current status of PS5 availability.',
    category: 'Platforms',
    updated: 'Sep 23, 2026',
    sections: [
      {
        h: 'Another Eden Begins on Nintendo Switch',
        text:
          'Another Eden Begins launched on Nintendo Switch worldwide on September 16, 2026, alongside the Switch 2 edition. The standard digital edition is priced at 4,980 yen (tax included) in Japan and 46,800 KRW on the Korean Nintendo Store; the Switch 2 Edition is priced higher at 5,480 yen. The game runs on Switch, Switch OLED and Switch Lite, supports the Switch Pro Controller, and takes about 3.6 GB of storage. The Korean store page lists Korean/English/Japanese/Chinese language support and single-player play. Physical buyers have two options: the Japanese retail edition published by Wright Flyer Studios launched September 17, 2026, and a western physical release from Aksys Games arrives in 2027.',
      },
      {
        h: 'Buying Notes',
        text:
          'Digital versions are the fastest route at launch. These buying notes for Another Eden Begins Platforms cover the platform-specific decisions:',
        list: [
          'Japanese physical editions — standard Switch Collection Box (9,980 yen) and Switch 2 Edition Collection Box (10,480 yen) — launched September 17, 2026.',
          'The western physical release by Aksys Games follows in 2027.',
          'Steam carries the demo, wishlist and DLC Season Pass alongside the base game.',
          'Pre-order details, price tiers and regional pricing are covered in more depth on the Release Date page.',
        ],
      },
      {
        h: 'Nintendo Switch 2',
        text:
          'A dedicated Nintendo Switch 2 Edition is available at launch, priced at 5,480 yen (tax included). Note the compatibility rule: the base version runs on both Switch and Switch 2, but the Switch 2 Edition runs only on Switch 2 hardware. A physical Switch 2 Edition Collection Box (10,480 yen) and the standard Switch Collection Box (9,980 yen) were released in Japan alongside the digital launch. There is no separate native Switch 2 demo — the Switch demo runs on Switch 2 as a cross-gen upgrade, and its save carries into the Switch 2 Edition.',
      },
      {
        h: 'PC (Steam)',
        text: 'The Steam release launched on September 16, 2026. The store page lists a “Download Demo” button alongside purchase and wishlist options, so you can try the opening chapters before committing. Steam features include:',
        list: [
          'Single-player only, with 28 achievements and cloud saves.',
          'Full controller support.',
          'Language support: English, Japanese, Korean, Simplified Chinese and Traditional Chinese.',
          'CN store price: ¥128 for the base game, with DLC packs at ¥25 each or ¥108 for the Season Pass.',
          'Runs on Steam Deck; the demo was played in handheld mode without reported issues.',
        ],
      },
      {
        h: 'PS5',
        text:
          'As of September 23, 2026, there has been no official announcement of a PS5 version. PlayStation-focused sites list the game only under PC and Nintendo platforms, PlayStation Store carries no Another Eden Begins product page, and official materials from Wright Flyer Studios list only Nintendo Switch 2 / Nintendo Switch / Steam. If a PS5 version is announced, official sources (anothereden.games and WFS news) will confirm it. The PS5 question is the most common one in community threads — this page will be updated the moment official sources confirm anything.',
      },
      {
        h: 'Platform Differences',
        text: 'Most differences come down to price, saves and platform-specific extras; the game content itself is the same everywhere:',
        list: [
          'The Switch 2 Edition carries a separate price point (5,480 yen vs 4,980 yen).',
          'Steam offers achievements and cloud saves; Nintendo versions share the same game content.',
          'A free demo lets you play through Chapter 6 with save data carrying over to the full game (all platforms).',
          'Demo saves transfer Switch → Switch 2 Edition, but cross-platform transfer (Switch → Steam) is not supported.',
          'On Steam Deck, save transfer needs manual steps — disable Steam Cloud sync, then move the save folder.',
          'Switch and Switch 2 versions take about 3.6 GB; the virtual game card rental mode is supported on the Korean eShop.',
        ],
      },
      {
        h: 'Handheld & Portable Play',
        text: 'The game is built around chapter-sized sessions, which makes it a strong handheld title:',
        list: [
          'Runs on Switch, Switch OLED, Switch Lite and Switch 2.',
          'The demo was recorded in handheld mode on Switch OLED with stable frame rate.',
          'Steam Deck users can play the demo in handheld mode; save transfer requires the manual Steam Cloud steps.',
          'Most chapters end at a natural stopping point, so short sessions fit the structure well.',
        ],
      },
      {
        h: 'System Requirements',
        text:
          'Full system requirements for the PC version are listed on the official Steam store page — check there for the latest spec sheet before buying. The game also runs on Steam Deck; handheld footage of the demo on Switch OLED shows stable performance in portable mode. Both Nintendo versions take about 3.6 GB of storage, so the download fits comfortably on an entry-level Switch.',
      },
      {
        h: 'Languages & Accessibility',
        text: 'All platforms ship with the same language set — English, Japanese, Korean, Simplified Chinese and Traditional Chinese (text and voice). Beyond languages:',
        list: [
          'Full controller support on Steam, and Nintendo Switch Pro Controller support on Nintendo platforms.',
          '28 Steam achievements; several are mutually exclusive across branching endings, so multiple runs are needed.',
          'Cloud saves on Steam; demo saves transfer Switch → Switch 2 Edition but not across platforms.',
          'Virtual game card rental is supported on the Korean eShop.',
          'The game is CERO rated B (ages 12+).',
        ],
      },
      {
        h: 'Official Channels & Events',
        text: 'The official sources below are the ones to watch for announcements, patches and future platform news:',
        list: [
          'Official website: anothereden.games (EN/JP).',
          'Official X account: @StudioPrisma_EN; official YouTube: @wrightflyerstudios.',
          'Tokyo Game Show 2026: a playable build at the Happinet booth (Hall 6, N04), with a Cyrus face visor giveaway.',
          'WFS news page (wfs.games) publishes official release notes — the source for all platform announcements.',
        ],
      },
      {
        h: 'Another Eden Begins Platforms FAQ',
        list: [
          'Is Another Eden Begins on PS5? — Not announced as of September 2026.',
          'Is it on Xbox? — No announcement.',
          'Does the game support cross-save? — Cloud saves are available on Steam; demo saves carry Switch → Switch 2 Edition, but not across platforms.',
          'Is there a demo? — Yes, a free demo covers the first six chapters and progress carries over.',
          'When does the physical edition release in the West? — Aksys Games ships the western physical release in 2027.',
          'Does it run on Switch Lite? — Yes, the base version runs on Switch, Switch OLED and Switch Lite.',
          'Is the Switch 2 Edition different from the Switch version? — It is priced separately (5,480 vs 4,980 yen); content differences beyond the platform upgrade have not been detailed.',
        ],
      },
    ],
  },
  {
    slug: 'dlc',
    title: 'Another Eden Begins DLC',
    seoTitle: 'Another Eden Begins DLC | DLC Guide & Details',
    seoDescription:
      'Another Eden Begins DLC guide: the Season Pass, five character packs, prices, release schedule and what each pack includes.',
    description:
      'Everything about Another Eden Begins DLC — the Season Pass, character packs, prices and the 2026 release schedule.',
    category: 'DLC',
    updated: 'Sep 23, 2026',
    sections: [
      {
        h: 'Another Eden Begins DLC Overview',
        text:
          'Another Eden Begins launched with a DLC Season Pass covering five character packs (Vol.1–5). Vol.1 and Vol.2 went live alongside the game on September 16, 2026, per the official WFS news post; Vol.3–5 are planned through the rest of 2026. Each pack adds 2 playable characters with their own quests — 10 additional characters in total beyond the 19 in the base roster. The DLC characters are returning characters from the mobile game Another Eden; so far none of them has a dedicated official trailer of its own. The Season Pass bundles all five packs at a discount, while each pack can also be bought individually. Players who want the complete roster can treat the Season Pass as part of the launch purchase — the two day-one packs extend the party immediately, and the remaining three arrive through the rest of 2026 on the official schedule.',
      },
      {
        h: 'DLC List',
        text:
          'Season Pass lineup and timing (official Chinese titles in parentheses). The chapter gates spread new content across the playthrough rather than front-loading it:',
        list: [
          'Vol.1 — Thillelille & Tiramisu (琪路莉露&缇拉米苏) · September 16, 2026; encounter quest unlocks after Chapter 12',
          'Vol.2 — Elseal & Benedict (艾尔席尔&贝内迪特) · September 16, 2026; after Chapter 11',
          'Vol.3 — Aoife & Wenefica · October 2026; Aoife after Chapter 20, Wenefica after Chapter 12',
          'Vol.4 — Isuka & Claude · November 2026; Isuka after Chapter 12, Claude after Chapter 11',
          'Vol.5 — Ashtear & Victor · December 2026; after Chapter 11',
        ],
      },
      {
        h: 'DLC Content',
        text:
          'Every character pack includes 2 additional playable characters, and each character gets the full quest treatment — a dedicated Encounter Quest, Character Quest and Kinship Quest. The quest structure mirrors the base game: the Encounter Quest introduces the character, the Character Quest deepens their personal story, and the Kinship Quest unlocks as your bond grows. Beyond the quests:',
        list: [
          'Characters join your party only after their encounter quest is cleared at the required chapter point.',
          'The base game is required — DLC is sold separately.',
          'DLC quests do not currently have English voices (no English voice acting).',
          'Make sure the game is updated to the latest version before playing DLC content.',
        ],
      },
      {
        h: 'DLC Price',
        text:
          'Official pricing, verified across the Steam store (US / SG / CN) and the WFS announcement in yen:',
        list: [
          'Individual character pack: $9.99 / 1,000 yen (tax incl.) / ~¥25 CN / S$9.99.',
          'Season Pass (Vol.1–5): $44.99 / 4,500 yen (tax incl.) / ~¥108 CN / S$44.99.',
          'All DLC bundled: ~¥158 CN on Steam.',
        ],
      },
      {
        h: 'DLC Release Information',
        text:
          'Vol.1 and Vol.2 were available at launch. Vol.3 ships in October 2026, Vol.4 in November and Vol.5 in December — each goes live for download the moment it releases. Steam notifies you when later packs go live; from Vol.2 onward each pack can also be bought individually, so avoid duplicate purchases if you own the Season Pass. The WFS news post confirms the packs, their unlock conditions and the pricing across regions.',
      },
      {
        h: 'DLC in New Game+',
        text: 'DLC characters and their quests integrate with the New Game+ structure:',
        list: [
          'Recruit them in the main story once their chapter gate is reached.',
          'Once recruited, they carry into New Game+ like any other companion.',
          'Their quests are side content attached to the character — Encounter, Character and Kinship quests — rather than main-story chapters.',
          'This means DLC purchases are useful across multiple playthroughs, not just the first run.',
        ],
      },
      {
        h: 'Season Pass vs Individual Packs',
        text:
          'The Season Pass bundles all five packs at a discount (~¥108 CN / S$44.99) versus buying five packs separately (~¥125 CN / S$49.95). If you plan to use the DLC characters at all, the Season Pass is the cheaper route; buy individual packs only when you want specific characters.',
        list: [
          'Season Pass unlocks all five packs as they release — no extra purchase steps needed.',
          'From Vol.2 onward, packs are sold individually; avoid buying a pack you already own via the Season Pass.',
          'Steam sends a notification when each later pack goes live.',
        ],
      },
      {
        h: 'How to Access DLC Characters',
        list: [
          'Update the game to the latest version.',
          'Purchase the pack (or Season Pass) and download it.',
          'Progress the main story to the required chapter (Chapter 11–20, depending on the character).',
          'Complete the character’s Encounter Quest, then recruit them into the party.',
          'Finish their Character Quest and Kinship Quest for the full story.',
        ],
      },
      {
        h: 'Which Packs Should You Pick First?',
        text:
          'If you want the full extra roster, the Season Pass is the simplest and cheapest route. If you only care about specific characters, check the unlock gate before buying — the chapter requirements change how soon you can actually use them:',
        list: [
          'Vol.1 and Vol.2 unlock earliest (Chapters 12 and 11) and were both available at launch.',
          'Vol.3’s Aoife requires Chapter 20 — the deepest gate in the Season Pass.',
          'Vol.4 and Vol.5 unlock after Chapters 12 and 11 but ship in November and December.',
          'For a first playthrough, Vol.1-2 add value immediately; Vol.3-5 are better planned for New Game+ runs.',
        ],
      },
      {
        h: 'Support & Updates',
        text:
          'DLC content requires the latest game version. A few practical notes:',
        list: [
          'Update the game before playing new packs — older saves and quest data may not show DLC characters otherwise.',
          'Steam sends a store notification when each later pack goes live.',
          'If a pack does not appear after purchase, verify the transaction and restart the game.',
          'Official announcements come from the WFS news page and the Steam DLC store page.',
        ],
      },
      {
        h: 'Another Eden Begins DLC FAQ',
        list: [
          'Do I need the base game? — Yes, the base game is sold separately.',
          'Are DLC quests voiced in English? — DLC characters’ Encounter/Character/Kinship quests do not currently have English voices.',
          'When can I recruit DLC characters? — After clearing the required chapter and completing their encounter quest.',
          'Will more DLC follow? — Vol.3–5 complete the announced Season Pass through December 2026.',
          'Can I buy packs separately? — Yes, from Vol.2 onward each pack is sold individually; the Season Pass bundles all five at a discount.',
          'Do DLC packs include costumes or items? — No, each pack contains 2 characters plus their quests only.',
          'Can I refund a DLC pack? — Follow the standard Steam refund policy for individual packs; the Season Pass is treated as one purchase.',
        ],
      },
    ],
  },
  {
    slug: 'codes',
    title: 'Another Eden Begins Codes',
    seoTitle: 'Another Eden Begins Codes | Redeem Codes',
    seoDescription:
      'Another Eden Begins codes guide: the Early Bird Bonus serial codes, how to claim them on Steam and Switch, platform restrictions and redemption steps.',
    description:
      'The current state of Another Eden Begins codes — early purchase serial codes, how to redeem them and what is actually available.',
    category: 'Codes',
    updated: 'Sep 25, 2026',
    sections: [
      {
        h: 'Active Codes',
        text:
          'As of September 25, 2026, there are no publicly confirmed in-game redeem codes for Another Eden Begins itself. Begins is a buy-to-play single-player game with no gacha and no in-game currency shop, so there is no ongoing code economy to track the way mobile games do. To be explicit: no active codes have been confirmed yet. This page will be updated the moment official sources release any — and it will never publish invented codes, because a fake code wastes a player’s time. The codes that do exist for this game are the Early Bird Bonus serial codes for the mobile game Another Eden, explained below.',
      },
      {
        h: 'Early Bird Bonus Serial Codes',
        text:
          'The codes bundled with Another Eden Begins are serial codes for the mobile game Another Eden: The Cat Beyond Time and Space, included as an Early Bird Bonus with every version. Three codes are bundled with the bonus:',
        list: [
          'Skip Part 1 code — lets new mobile players skip the first arc and continue from where Begins ends; one use per account, valid 2026/9/16 – 2027/9/16 (UTC).',
          'Encounter Ramiu ticket — guarantees the 5★ character Ramiu, plus Begins outfits for Aldo and Feinne in the mobile game; valid until 2027/9/16.',
          '5-Star Guaranteed 10 Allies Bundle — three 10-pull tickets, each with a guaranteed 5★ on the tenth pull; valid until 2027/3/15.',
          'These codes are tied to the purchase of Begins and are separate from the mobile game’s own periodic anniversary and event codes.',
        ],
      },
      {
        h: 'How to Redeem Your Serial Codes',
        text: 'Where and how each version lets you claim the serial codes:',
        list: [
          'Steam: buy the game, play for at least 2 hours, then use the “Claim Serial Code” button on the official site (anothereden.games) and sign in with your Steam account.',
          'Switch physical (Japanese editions): the serial code leaflet ships inside the box; codes redeem on the mobile game for Android/iOS only.',
          'Switch and Switch 2 digital: no serial code is included with digital purchases.',
          'Mobile redemption path: in-game Menu → Other → Serial Code → enter the code exactly as printed (codes are case-sensitive) → Confirm, then collect the rewards from the Present Box.',
          'If the code does not work, double-check the region and platform rules below before contacting support.',
        ],
      },
      {
        h: 'Platform & Region Restrictions',
        list: [
          'Switch and Switch 2 digital versions do not include serial codes.',
          'Switch physical serial codes are available only with the Japanese edition, and redeem only on the mobile Android/iOS versions — not on PC.',
          'Steam codes work across all mobile platforms.',
          'Each code is limited to one use per account.',
          'Early Bird codes have fixed validity windows; expired codes cannot be claimed.',
        ],
      },
      {
        h: 'How the Early Bird Bonus Works',
        text:
          'The Early Bird Bonus is not a pre-order bonus — it is bundled with every purchase of Another Eden Begins, physical or digital, from launch onward. The catch is where the codes can be claimed. Steam buyers use the official Claim Serial Code portal (requiring the game owned and 2 hours of playtime); Japanese physical buyers find a serial code leaflet inside the box. Digital Nintendo buyers receive nothing, because Nintendo digital SKUs do not include the serial code at all. Validity runs from September 16, 2026 through September 16, 2027 for the Skip Part 1 code and Ramiu ticket, and through March 15, 2027 for the 10-pull bundle.',
      },
      {
        h: 'Mobile Game Codes vs Begins',
        text:
          'Be careful with code lists you find online: most “Another Eden codes” articles refer to the mobile game Another Eden: The Cat Beyond Time and Space — codes such as ANOTHEREDEN9TH for its 9th anniversary, or seasonal codes like AESUMMER25 and AEWINTER25. Those are for a different game with a different redemption system. They cannot be redeemed inside Another Eden Begins, and Begins has no matching in-game code entry at all. These lists are also updated less often than they claim: some "active" codes in them expired months ago. Treat any site claiming “working codes for Another Eden Begins” with suspicion until an official source confirms them.',
      },
      {
        h: 'Code Safety & Scams',
        text:
          'Because code pages attract traffic, they also attract fake offers. A few rules keep you safe:',
        list: [
          'Official codes only ever come from anothereden.games, the WFS news page or the official X account.',
          'Any site asking you to enter your Steam password or log in with your account to “generate codes” is a phishing attempt.',
          'There are no code generators for this game — the serial codes are printed and tied to a purchase.',
          'If a code seems too good to be true, report the page rather than trying it.',
        ],
      },
      {
        h: 'What Codes Should You Expect Next?',
        text:
          'The mobile game historically releases short-window codes around anniversaries, download milestones and crossovers. Begins, as a self-contained single-player title, has no equivalent cadence — so we do not predict when or whether in-game codes will appear. Any official announcement would come from anothereden.games, the WFS news page, or the official X account. This page tracks those sources and will be updated within a day of any confirmation.',
      },
      {
        h: 'Checking for New Codes',
        list: [
          'Official website: anothereden.games (EN/JP).',
          'WFS news page: wfs.games — source for all official announcements.',
          'Official X account: @StudioPrisma_EN.',
          'Reddit community: r/AnotherEdenGlobal for community-driven updates.',
        ],
      },
      {
        h: 'Code FAQ',
        list: [
          'Are there any active codes for Another Eden Begins? — Not as of September 2026; the page updates when official sources confirm any.',
          'What do the bundled codes actually do? — They unlock content in the mobile game Another Eden, not inside Begins.',
          'I bought digitally on Switch — do I get codes? — No, serial codes are bundled only with physical Japanese editions and the Steam version.',
          'How long are the codes valid? — Skip Part 1 and the Ramiu ticket until 2027/9/16; the 10-pull bundle until 2027/3/15.',
          'Can I use a Switch code on Steam? — No; Switch physical codes work only on mobile Android/iOS.',
          'Where do I claim my Steam codes? — The official site’s Claim Serial Code button, after 2 hours of playtime.',
          'Are mobile game codes valid in Begins? — No — they are separate games with separate redemption systems.',
          'Can I share a code with a friend? — Each code is limited to one use per account, so sharing invalidates it for everyone else.',
          'What if my code expires? — Expired codes cannot be claimed; the validity windows are fixed at purchase.',
        ],
      },
    ],
  },
  {
    slug: 'tier-list',
    title: 'Another Eden Begins Tier List',
    seoTitle: 'Another Eden Begins Tier List | Best Characters',
    seoDescription:
      'Another Eden Begins tier list status: no official ranking exists yet, how character roles replace tier lists, and where to watch for community rankings.',
    description:
      'The honest state of Another Eden Begins tier lists — why this game does not use S/A/B rankings, and how roles and party building replace them.',
    category: 'Tier List',
    updated: 'Sep 25, 2026',
    sections: [
      {
        h: 'The Current State of Tier Lists',
        text:
          'As of September 25, 2026, there is no official Another Eden Begins tier list, and no established community tier list has formed yet either. The game launched on September 17, and reviewers and wiki editors are still mapping the roster. Search results that rank “Another Eden” characters are almost all for the mobile game Another Eden: The Cat Beyond Time and Space — a gacha game with 5★ rarities, style variants and a very different character pool — and they must not be applied to Begins. A tier list for one game does not transfer to the other.',
      },
      {
        h: 'Why a Traditional Tier List Does Not Fit',
        text:
          'Begins is a buy-to-play game with no gacha and no rarity system: all 19 characters are fixed story companions, and there is no pulling that would create a power ladder. The developers’ own guidance is that team composition matters more than individual strength — Wright Flyer Studios states that picking parties with perfect synergy is the key to victory. Concretely:',
        list: [
          'No gacha, no 5★/4★/3★ rarity tiers — every character is earned through the story.',
          'No official power ranking exists, and the developers have not published one.',
          'The design centers on role synergy (attacker / support / healer) and element coverage rather than a single strongest unit.',
          'Mobile tier lists rank gacha-exclusive styles (Alter, AS, ES) that simply do not exist in Begins.',
        ],
      },
      {
        h: 'How the Tier List Will Work Here',
        text:
          'When a community consensus does emerge, this page will present it with clear methodology: which content the ranking assumes (main story, Horrors, boss fights), which roles are compared, and the date of the ranking. Until then we do not publish a fabricated S/A/B table — an invented ranking would mislead players more than it helps. The honest interim answer is role-based guidance instead.',
      },
      {
        h: 'Character Roles & Party Building',
        text:
          'What replaces a tier list in Begins is role-based team building. Practical starting points from the current roster:',
        list: [
          'Attackers: Aldo (fire sword), Amy (wind fists), Suzette (wind spear, poison stacking), Cyrus (water sword arts), Gariyu (hellfire magic), Shion (katana), Shanie (water sword).',
          'Support: Feinne (healing and shields), Mariel (healing priestess), Yuna (CP-charging mage), Riica (android that switches between battle and support modes).',
          'Tanks and frontline: Anabel (paladin), Bertrand (royal spear).',
          'Flexible: Riica doubles as offense-capable support; Yuna charges CP by healing then boosts water damage.',
          'The core loop: build a Main Party plus up to 3 Another Parties, rotate for element coverage, and use Character Badges to share Chain Skills across same-weapon characters.',
        ],
      },
      {
        h: 'Party Building Examples',
        text:
          'A few starting formations that match the attacker/support/healer triangle. These are starting points, not rankings:',
        list: [
          'Aldo + Feinne + Cyrus — a fire/water frontline with solid healing, useful from the first chapters.',
          'Suzette + Yuna + Mariel — poison stacking backed by two healer supports for long boss fights.',
          'Amy + Riica + Anabel — wind damage, android flexibility and a tank for Horror farming.',
          'Gariyu + Shanie + Bertrand — magic burst, water coverage and a royal spear wall.',
          'Late-game: add Ramiu (New Game+) as a sand-spirit guide with her own progression path.',
        ],
      },
      {
        h: 'What Reviews Say About Balance',
        text:
          'Early reviews praise the roster’s distinctiveness rather than a single dominant unit: CGMagazine highlights how sharply each companion is characterized, and community playthrough notes describe Riica as a healer-support with strong offensive options and Suzette as a crit/poison specialist. Because every companion earns full EXP in Main and Another Parties, rotation — not ranking — is the practical path to strength. The practical takeaway for new players: almost any three-character party clears the story chapters, and the difficulty curve leaves room for experimentation without a “wrong” roster.',
      },
      {
        h: 'How to Build Your Own Party',
        text:
          'Until a community tier list exists, the practical way to use this page is to build around roles. A simple three-step method:',
        list: [
          'Pick one attacker, one support and one healer from the role lists above — most of the roster fits these three buckets cleanly.',
          'Check element coverage: aim for at least two elements among fire, water, earth and wind so you can hit enemy weaknesses across eras.',
          'Use Character Badges to borrow Chain Skills from same-weapon characters, filling the gaps your party is missing.',
          'Keep the Main Party’s slots flexible: Valor commands let you swap in up to 3 Another Parties mid-battle, so a bench of leveled characters is a real advantage.',
        ],
      },
      {
        h: 'What a Consensus Tier List Would Look Like',
        text:
          'When the community settles on a ranking, it will most likely follow the conventions of other single-player JRPG communities: an S/A/B table split by content type — story, Horrors, boss fights and New Game+ — rather than one global ranking. Expect tiers to be argued over week one and stabilized by month two, with methodology notes attached. Until that exists, treat any “S-tier” claim about Another Eden Begins as opinion, not data — this page will only publish a tier list with its assumptions and update date stated.',
      },
      {
        h: 'Where to Watch for New Rankings',
        list: [
          'RPG Site’s full character database for Another Eden Begins is currently the closest thing to a roster reference.',
          'Community hubs: r/AnotherEdenGlobal on Reddit and the official X account @StudioPrisma_EN.',
          'This page will add a real tier list section as soon as a consensus ranking exists, with methodology and dates attached.',
        ],
      },
      {
        h: 'Tier List FAQ',
        list: [
          'Is there an official tier list? — No, the developers have not published one.',
          'Can I use the mobile game’s tier list? — No — those rankings cover gacha versions and characters not in Begins.',
          'Who are the best characters? — There is no single best; teams built around attacker/support/healer roles and element coverage work best.',
          'When will a real tier list appear? — Community rankings usually take a few weeks after launch; this page will track them.',
          'Is Riica good? — Reviewers rate her as a strong healer-support with solid offensive options.',
          'Does New Game+ change rankings? — Hard to say until a consensus list exists; NG+ adds content but not new roster strength systems.',
          'Is the mobile tier list the same game? — No, it ranks gacha versions; the rosters barely overlap.',
          'How is this tier list different from the mobile one? — This page ranks nothing yet and will publish only consensus data with dates.',
        ],
      },
    ],
  },
  {
    slug: 'release-date',
    title: 'Another Eden Begins Release Date',
    seoTitle: 'Another Eden Begins Release Date, Price & Pre-Order',
    seoDescription:
      'Another Eden Begins release date (September 17, 2026), regional prices, pre-order details and where to buy the game.',
    description:
      'Release date, price tiers, pre-order details and buying options for Another Eden Begins across all platforms.',
    category: 'Release Date',
    updated: 'Sep 25, 2026',
    sections: [
      {
        h: 'Release Date',
        text:
          'Another Eden Begins launched worldwide on September 17, 2026 (Thursday), a simultaneous global release across Nintendo Switch 2, Nintendo Switch and Steam. Steam’s store page displays September 16 because it uses US Pacific time — which is already September 17 in Asia — while Nintendo stores unlock by local timezone. The game was first revealed at the February 17, 2026 Nintendo Direct Partner Showcase with a “Summer 2026” window, and the exact date was locked in during the April 4, 2026 Anaden Matsuri livestream. The score is by Yasunori Mitsuda (main theme) with Procyon Studio, the scenario is directed by Masato Kato, and the game carries a CERO B (12+) rating with text in English, Japanese, Korean, Simplified Chinese and Traditional Chinese.',
      },
      {
        h: 'Announcement Timeline',
        list: [
          'Feb 17, 2026 — first reveal at Nintendo Direct Partner Showcase; “Scheduled for Summer 2026”.',
          'Apr 4, 2026 — Anaden Matsuri 2026 spring livestream confirms September 17 and opens Special Collection Box pre-orders.',
          'Apr 9, 2026 — retail pre-orders open across Japan with store-specific bonuses.',
          'Sep 2, 2026 — free demo launches on Switch and Steam.',
          'Sep 16/17, 2026 — worldwide release (Steam shows Sep 16 in US time).',
          'Sep 17, 2026 — DLC Vol.1 and Vol.2 available at launch; TGS 2026 playable build at the Happinet booth.',
        ],
      },
      {
        h: 'Price',
        text: 'Official pricing, verified across regions (base game). All Japanese prices include tax:',
        list: [
          'Japan: Switch / Steam standard 4,980 yen; Switch 2 Edition 5,480 yen (tax included).',
          'Hong Kong: Switch HKD 249; Switch 2 Edition HKD 274.',
          'Steam China: ¥128 for the base game; all DLC bundled comes to ~¥158.',
          'US: $39.99 · Singapore: S$37.99 · Russia: 1,550 RUB (a regional quirk where the Season Pass costs more than the base game).',
          'DLC: character packs $9.99 / 1,000 yen / ~¥25 CN each; Season Pass $44.99 / 4,500 yen / ~¥108 CN.',
          'For context, $39.99 places Begins in the standard buy-to-play JRPG band — reviewers compared its 26-chapter content against that price favorably.',
        ],
      },
      {
        h: 'Global Launch Facts',
        list: [
          'Developer and publisher: Wright Flyer Studios (STUDIO PRISMA), worldwide simultaneous release.',
          'Genre: time-traveling RPG; fully voiced main story; 26 chapters across three eras.',
          'Launch DLC: Character Packs Vol.1 and Vol.2 available on day one; the full Season Pass covers Vol.1–5 through December 2026.',
          'Free demo: live since September 2, 2026, with save transfer into the full game (see the Demo page).',
          'Tokyo Game Show 2026: playable build at the Happinet booth (Hall 6, N04) with a Cyrus face visor giveaway.',
          'The base game is a standalone reconstruction of the mobile original’s first arc — no subscription and no gacha.',
        ],
      },
      {
        h: 'Pre-Order',
        text:
          'Pre-orders opened on April 4, 2026 for the WRIGHT FLYER STORE-exclusive Special Collection Box, and on April 9, 2026 at retail stores across Japan. Steam did not run a physical pre-order, but Steam buyers still qualify for the Early Bird serial codes via the Claim Serial Code page on the official site. Japanese retailers added exclusive bonuses — Animate (B2 cloth), Amazon (original postcards), Ebten (Fami通 DX pack), Yodobashi (holographic stickers) and more — while quantities were limited and sold out at several stores.',
      },
      {
        h: 'Early Bird Bonus',
        text:
          'Every version includes mobile-game serial codes as an Early Bird Bonus — a Skip Part 1 code, an Encounter Ramiu ticket plus Aldo and Feinne outfits, and three 5★-guaranteed 10-pull tickets. Full redemption rules, platform restrictions and validity windows are covered on the Codes page. Two things to know before you buy: the codes are redeemable in the mobile game Another Eden (not inside Begins), and digital Nintendo purchases do not include them at all — the Steam version and Japanese physical copies are the ones that carry the codes.',
      },
      {
        h: 'Editions at Launch',
        text:
          'The release lineup includes standard digital editions on all three platforms, standard physical editions on Nintendo platforms in Japan, and two collector boxes — the Collection Box and the WFS STORE-exclusive Special Collection Box. A western physical edition from Aksys Games arrives in 2027. Edition contents and prices are detailed on the Editions page.',
      },
      {
        h: 'Where to Buy',
        text:
          'Every official storefront is linked from the game’s website (anothereden.games), which also hosts the serial code claim portal. The purchase routes:',
        list: [
          'Digital: Nintendo eShop (Switch / Switch 2) and Steam (PC).',
          'Physical (Japan): standard editions and Collection Boxes, published by Wright Flyer Studios, available from September 17, 2026.',
          'Physical (West): Aksys Games release in 2027 on Switch / Switch 2 — physical only, price TBA.',
          'The official site (anothereden.games) links each storefront and hosts the serial code claim portal.',
        ],
      },
      {
        h: 'Price Changes & Deals',
        text:
          'As of September 25, 2026, no official discount or sale has been announced for the base game — it launched at full price on every platform. The DLC Season Pass is the only standing bundle discount (¥108 CN / 4,500 yen vs. buying five packs individually). For future deals, the reliable channels are the Steam store page (wishlist and sale notifications) and the WFS news page; we do not speculate about when the first discount will appear.',
      },
      {
        h: 'Official Channels for Release News',
        list: [
          'Official website: anothereden.games — product page, store links and the serial code claim portal.',
          'WFS news page: wfs.games — the source for all official announcements, patches and events.',
          'Official X account: @StudioPrisma_EN.',
          'Steam store page: app/4163960 — wishlist, demo and DLC listings.',
          'Tokyo Game Show 2026: playable build at the Happinet booth (Hall 6, N04).',
        ],
      },
      {
        h: 'Release Information FAQ',
        list: [
          'What is the release date? — September 17, 2026 worldwide; Steam shows September 16 in US time.',
          'Is it on PS5? — No announcement yet; see the Platforms page for the current status.',
          'Was there a demo before launch? — Yes, from September 2, 2026; see the Demo page.',
          'Does pre-ordering give bonuses? — Early Bird serial codes come with every version; Steam had no physical pre-order.',
          'When is the western physical edition? — 2027 via Aksys Games.',
          'What is the CERO rating? — B (ages 12+).',
          'How much does the game cost? — From ¥128 CN / $39.99 / 4,980 yen depending on region and edition.',
          'Which region released first? — The launch was simultaneous; Steam unlocked hours earlier because of timezones.',
          'Is the game a limited-time title? — No — it is a permanent buy-to-play release with no subscription.',
        ],
      },
    ],
  },
  {
    slug: 'demo',
    title: 'Another Eden Begins Demo',
    seoTitle: 'Another Eden Begins Demo | Demo Guide & Details',
    seoDescription:
      'Another Eden Begins demo guide: what the free demo covers, platforms, save transfer rules and how to carry progress into the full game.',
    description:
      'Everything about the Another Eden Begins demo — coverage, platforms, save transfer and how it leads into the full game.',
    category: 'Demo',
    updated: 'Sep 25, 2026',
    sections: [
      {
        h: 'Is There a Demo?',
        text:
          'Yes. A free demo went live on September 2, 2026 (23:00 Beijing time) on Nintendo Switch and Steam, and it does not require a pre-order or any code. The official Final Trailer launched at the same time to mark the occasion. The demo plays the opening chapters of the main story exactly as they appear in the full game, so it is an honest preview of the pacing, combat and story tone — recorded playthroughs confirm the covered chapters are identical to the release build. In practical terms, it is a try-before-you-buy window: roughly six chapters of story, which is far more generous than most JRPG demos.',
      },
      {
        h: 'How to Play the Demo',
        list: [
          'Steam: open the game’s store page and click the “Download Demo” button next to the purchase and wishlist options.',
          'Switch: download from the Nintendo eShop page for Another Eden Begins.',
          'No pre-order or code is required — the demo is open to everyone.',
          'Progress and character stats created in the demo carry into the full version on the same platform.',
          'Both versions unlock the demo the same way as the full game — no extra account or launcher steps.',
        ],
      },
      {
        h: 'Demo Platforms',
        text:
          'The demo is available on Nintendo Switch and Steam. There is no native Nintendo Switch 2 demo — because Begins is a cross-gen title, the Switch demo also runs on Switch 2, and its save can be used by the Switch 2 Edition of the full game. That makes the demo effectively playable on every release platform through one of the two available versions. On Steam the store page lists a dedicated “Download Demo” button next to the purchase and wishlist options, so finding it takes no extra steps.',
      },
      {
        h: 'Demo Content',
        text:
          'The demo covers the main story from the prologue through Chapter 6, “Salamander Encroached Upon from Another World” — roughly the first quarter of the 26-chapter story. The opening hour alone walks through Baruoki life: training with Darunis, asking Ashtear about prisma, exploring the Nuaru Uplands for a Coconerica Branch, clearing the village cave Horror, and finding Varuo the cat — before the Beast King fight pulls Aldo into the future era of Elzion. From there the demo continues through the Route 99 and Industrial Ruins chapters, including the Galliard boss fight and the recruitment of Riica and Amy. That spans two eras and introduces the core loop — exploration, Horror battles and the first Another Force battles — so by the end you have met a third of the playable roster and tried every major system the full game builds on.',
      },
      {
        h: 'Demo Progress & Save Transfer',
        text:
          'Saves transfer on the same platform; the rules matter most for PC and handheld users:',
        list: [
          'Switch demo saves continue in the full Switch version, and they work with the Switch 2 Edition of the full game.',
          'Cross-platform transfer (Switch → Steam) is not supported.',
          'Steam Deck users must transfer manually: disable Steam Cloud for the game (Properties → General), move the save folder from the demo to the full game directory, then re-enable cloud saves.',
          'After transfer, the full game continues from Chapter 7, “Acteul: A Shadow Across the Water”.',
          'Demo saves made before the full release transfer exactly the same way after launch.',
        ],
      },
      {
        h: 'What Comes After the Demo',
        text:
          'The full game launched on September 17, 2026 with 26 chapters, New Game+ and more than 10 endings. Carrying a demo save means starting the full game at Chapter 7 with your party and character stats intact — no need to replay the opening. The demo is the recommended first step for anyone unsure about the pacing or the story-heavy JRPG format, since the covered content is identical to the retail build. Progress earned in the demo also counts toward achievements and trophies when you continue in the full game, so nothing from those first six chapters is wasted.',
      },
      {
        h: 'Demo Impressions',
        text:
          'Community impressions of the demo have been consistent with the reviews: handheld footage on Switch OLED shows stable performance, Steam Deck playthroughs report no major issues, and players highlight the 360-degree free movement and the fully voiced opening chapters as the biggest improvements over the mobile original. The demo’s Chapter 1 story content matches the recorded full-release walkthroughs shot-for-shot.',
      },
      {
        h: 'Tips Before You Play',
        list: [
          'The demo save is separate from the full game’s — decide on your platform before starting, because cross-platform transfer is not supported.',
          'All five languages (EN / JA / KO / Simplified CN / Traditional CN) are available in the demo, matching the full game.',
          'On Steam Deck, plan for the manual save transfer steps before starting a long session.',
          'The opening chapters are story-heavy and fully voiced — expect a slower, more narrative first hour than an action RPG.',
          'Horror enemies in the demo drop unique badges; fighting them early is worth it even in trial content.',
        ],
      },
      {
        h: 'Demo Version & Updates',
        text:
          'The demo runs within the same specification envelope as the full game: on Switch it takes about 3.6 GB of storage, and on Steam the store page lists the system requirements that apply to both the demo and the release build. As of September 2026 the demo has not received separate content updates — the covered chapters match the retail version, and the save transfer rules have stayed unchanged since the September 2 launch.',
      },
      {
        h: 'Demo FAQ',
        list: [
          'How many chapters is the demo? — Six chapters (prologue through Chapter 6).',
          'Does my demo progress carry over? — Yes, on the same platform; see the transfer rules above.',
          'Is there a Switch 2 demo? — No native demo; the Switch demo runs on Switch 2.',
          'Do I need to pre-order to play it? — No, it is open to everyone.',
          'Is the demo different from the full game? — The covered chapters are identical.',
          'When did it launch? — September 2, 2026.',
          'Can I transfer a demo save to Steam from Switch? — No, cross-platform transfer is not supported.',
          'Does the demo include DLC characters? — No, DLC content is part of the full game only.',
          'Is the demo still available after launch? — Yes, it remains on the Switch eShop and Steam store.',
          'How big is the demo? — About 3.6 GB on Switch, matching the full game’s install footprint.',
          'Can I play the demo in other languages? — Yes, all five supported languages are available.',
        ],
      },
    ],
  },
  {
    slug: 'editions',
    title: 'Another Eden Begins Editions',
    seoTitle: 'Another Eden Begins Editions | Physical & Collector’s',
    seoDescription:
      'Another Eden Begins editions guide: the standard versions, Collection Box, Special Collection Box, what is included and where to buy.',
    description:
      'Every Another Eden Begins edition — digital, physical, Collection Box and the WFS Special Collection Box — with contents and prices.',
    category: 'Editions',
    updated: 'Sep 25, 2026',
    sections: [
      {
        h: 'Editions Overview',
        text:
          'Another Eden Begins launched with a clear edition ladder: standard digital on all platforms, standard physical on Nintendo platforms, and two collector boxes in Japan. A western physical edition follows in 2027. All editions run the same 26-chapter game — the differences are extras, price and platform. The lineup at a glance:',
        list: [
          'Standard Digital — Switch / Switch 2 / Steam · 4,980–5,480 yen · no serial code.',
          'Standard Physical — Switch / Switch 2 (Japan, WFS) · same price as digital · Early Bird serial codes included.',
          'Collection Box — Switch 9,980 yen / Switch 2 Edition 10,480 yen · OST + SteelBook + slipcase + codes.',
          'Special Collection Box — WRIGHT FLYER STORE exclusive · adds paper knife, metal pins and booklet.',
          'Western Physical — Switch / Switch 2 · 2027 via Aksys Games · details TBA.',
        ],
      },
      {
        h: 'Physical Edition',
        text:
          'In Japan, physical editions launched September 17, 2026 alongside the digital release, published by Wright Flyer Studios. Physical versions are the ones that bundle the mobile-game serial code leaflet (Skip Part 1, Ramiu ticket, 10-pull tickets) — digital downloads do not include it. Retail listings (for example CDJapan, where the Collection Box carries the WFS-1 catalog number and is marked region-free and first-press limited) show the Japanese Switch release as region-free. The western physical release from Aksys Games was announced at Anime Expo 2026 and is set for 2027 on Switch and Switch 2: physical only, with no specific month or price announced yet, and an ESRB rating still pending.',
      },
      {
        h: 'Where to Buy Physical Copies',
        list: [
          'Japan: retail stores (Yodobashi, Bic Camera, Gamers and others) and the WRIGHT FLYER STORE for the Special Collection Box.',
          'Online Japanese stores: CDJapan and Amazon Japan carry the Collection Box; overseas buyers can import it.',
          'Western shoppers: Play-Asia and Amazon Japan are the typical import routes until the 2027 western release.',
          'The official site (anothereden.games/store) lists the Japanese lineup and links each store.',
        ],
      },
      {
        h: 'Collector’s Edition',
        text: 'The Collection Box is the collector edition in Japan, in two variants:',
        list: [
          'Collection Box (Switch) — 9,980 yen: game, Original Soundtrack CD, SteelBook, three-sided slipcase box and the Early Bird serial code leaflet.',
          'Collection Box (Switch 2 Edition) — 10,480 yen: the same contents for the Switch 2 edition.',
          'Special Collection Box — WRIGHT FLYER STORE-exclusive limited edition: everything above plus an Ogre Rancorem paper knife, three metal pins (ancient / present / future) and a Special Booklet with developer interviews.',
          'The boxes are first-print limited; the serial code bonus was time-limited, so second-hand copies may lack it.',
        ],
      },
      {
        h: 'What’s Included',
        text: 'Comparing what every edition actually ships with:',
        list: [
          'Digital: game only — no serial code, no physical extras.',
          'Standard physical: game card + serial code leaflet.',
          'Collection Box: standard physical + Original Soundtrack CD + SteelBook + slipcase box.',
          'Special Collection Box: Collection Box + paper knife + three pins + Special Booklet.',
          'No edition ships with DLC content — Character Packs are purchased separately on all platforms.',
        ],
      },
      {
        h: 'Edition Differences',
        list: [
          'Digital vs physical: only physical (Japan) and the Steam version include the mobile serial codes.',
          'Switch vs Switch 2 Edition: separate SKUs with different prices; the Switch 2 Edition runs only on Switch 2 hardware.',
          'Japan vs West: Japanese physical editions shipped at launch; the western release is 2027.',
          'Retail bonuses: Japanese stores added exclusive pre-order bonuses, listed below.',
          'PC: no physical edition exists for Steam — digital only.',
          'Same-game content: every edition runs the same 26-chapter game; editions differ only in extras, prices and platform.',
          'Early Bird Bonus: bundled with every edition, but only claimable where serial codes are included (Steam and Japanese physical).',
        ],
      },
      {
        h: 'Store-Specific Pre-Order Bonuses',
        text: 'Japanese retailers offered exclusive bonuses during the pre-order window (limited stock):',
        list: [
          'Animate — B2 multi-purpose cloth.',
          'Amazon.co.jp — original postcard set (12 cards) plus an original character frame overlay.',
          'Ebten (Fami通 DX Pack) — acrylic plate, 7-character badge set and two Aldo & Feinne acrylic stands; or a 3D crystal set with an Aldo laser-etched crystal and LED base.',
          'Yodobashi — holographic stickers · Yamada Denki — metal card · Melonbooks — acrylic card.',
          'Gamers — original acrylic figure (Collection Box purchasers only).',
        ],
      },
      {
        h: 'Which Edition Should You Buy?',
        text:
          'The practical advice depends on what you value. The standard digital edition is the cheapest route and carries no physical extras, but it also omits the serial codes — those come only with physical Japanese copies and the Steam version. The Collection Box is the best value for collectors who want the soundtrack and SteelBook. The Special Collection Box is only worth hunting for if you collect WFS store exclusives. And if you are outside Japan, the western physical edition in 2027 is the one to wait for — otherwise the digital version is the straightforward choice. In short: digital for price, Japanese physical for the codes, Collection Box for the extras, and patience for the 2027 western box.',
      },
      {
        h: 'Price & Availability',
        list: [
          'Digital: 4,980 yen (Switch / Steam) · 5,480 yen (Switch 2 Edition).',
          'Collection Box: 9,980 yen (Switch) · 10,480 yen (Switch 2 Edition).',
          'Special Collection Box: WRIGHT FLYER STORE exclusive, limited stock.',
          'Western physical: 2027, price TBA.',
          'Resale: first-print serial codes are time-limited — check before buying used copies.',
          'Store stock varies: Japanese retailers sold out some first-print boxes within days; check current listings before relying on a fixed store.',
        ],
      },
      {
        h: 'Editions FAQ',
        list: [
          'Is there a PC physical edition? — No, physical editions are Nintendo-only.',
          'What is in the Collection Box? — OST CD, SteelBook, slipcase box and the serial code leaflet.',
          'Do digital versions include serial codes? — No.',
          'When is the western edition? — 2027, announced at Anime Expo 2026.',
          'Are collector boxes still available? — They were first-print limited; check current stock at Japanese stores.',
          'Is the Collection Box region-free? — The Japanese Switch version is region-free per retail listings.',
          'Does the Special Collection Box exist outside Japan? — No, it is a WRIGHT FLYER STORE exclusive.',
          'Is there an art book in any edition? — The Special Collection Box includes a Special Booklet with developer interviews; no standalone art book has been announced.',
          'Can I still get the serial codes if I buy used? — Only if the original leaflet is included; first-print codes were time-limited.',
        ],
      },
    ],
  },
];
