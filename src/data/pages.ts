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
        h: 'Common Questions',
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
        h: 'Character List',
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
        h: 'Frequently Asked Questions',
        list: [
          'How many playable characters are there? — 19, including the New Game+ guide Ramiu.',
          'Can DLC add more characters? — Yes, five character packs add 10 more; see the DLC page.',
          'Do DLC characters have English voice acting? — Their quests currently do not.',
          'Is the main story fully voiced? — Yes, the main storyline is fully voiced.',
          'Can I swap characters mid-battle? — Yes, Valor commands swap in up to 3 prepared Another Parties.',
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
        h: 'Story Overview',
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
        h: 'Story FAQ',
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
        h: 'Nintendo Switch',
        text:
          'Another Eden Begins launched on Nintendo Switch worldwide on September 16, 2026, alongside the Switch 2 edition. The standard digital edition is priced at 4,980 yen (tax included) in Japan and 46,800 KRW on the Korean Nintendo Store; the Switch 2 Edition is priced higher at 5,480 yen. The game runs on Switch, Switch OLED and Switch Lite, supports the Switch Pro Controller, and takes about 3.6 GB of storage. The Korean store page lists Korean/English/Japanese/Chinese language support and single-player play. Physical buyers have two options: the Japanese retail edition published by Wright Flyer Studios launched September 17, 2026, and a western physical release from Aksys Games arrives in 2027.',
      },
      {
        h: 'Buying Notes',
        text:
          'Digital versions are the fastest route at launch. For platform-specific buying decisions:',
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
        h: 'FAQ',
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
        h: 'DLC Overview',
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
        h: 'DLC FAQ',
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
];
