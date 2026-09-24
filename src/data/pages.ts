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
        h: 'Getting Started',
        text:
          'The story opens in Baruoki Village, where Aldo trains with Darunis and helps with village errands. Early on you will earn the Village Guard Proof badge — a +1 MP Regen badge that restores 10 MP per turn, worth keeping through the first chapters. Follow the story into the Moonlight Forest, where the journey truly begins.',
      },
      {
        h: 'Gameplay Basics',
        text: 'Two map styles to get used to:',
        list: [
          'Free-roaming fields show wandering enemies, treasure chests and quest markers directly — no fog of war.',
          'Dungeon maps unlock gradually as you explore, so clearing them in full reveals the way forward.',
          'Chests hide weapons, bangles and items — a Longsword, Leather Bangle and Ruby Staff (for Feinne) appear early, and an underground cave holds 500 Git plus the River of Time Water respec item.',
        ],
      },
      {
        h: 'Battle Basics',
        text:
          'Battles are command-based with no random encounters. Attacks build the Another Force gauge, which unlocks continuous follow-up attacks when full. Build a balanced party of damage, support and healing, and learn each character’s Chain Skill timing.',
      },
      {
        h: 'Character Basics',
        text:
          'Beyond the Main Party you can prepare up to 3 Another Parties, swapped in with Valor commands. Characters in either party earn full EXP and Kinship EXP; characters left out of both gain nothing, so rotate freely.',
      },
      {
        h: 'Useful Tips',
        list: [
          'Register cats to your Cat Codex — there are 56 across the game, and registered cats can follow Aldo. Early finds: Varuo (start), Langelo (Baruoki NE), Peasuke (Baruoki SE), Leale (Nuaru Uplands west), plus Kassy, Gust, Gear, Chain and Millie around Elzion.',
          'Horror-type enemies (Stoneguard Abbetos, Forest Guardian, Vibrant Talon, Arianhod, Vengeful Soldier, Durable Agateram) are far stronger than normal foes, guard valuable chests, and drop their own badges when defeated. Fight them the first time you meet them.',
          'The River of Time Water lets you reset character ability points (respec), so experiment freely with builds.',
        ],
      },
      {
        h: 'Common Questions',
        list: [
          'How many chapters are there? — The main story runs 26 chapters.',
          'Is the game single-player? — Yes, it is fully single-player.',
          'Does progress carry into New Game+? — Yes, characters keep their strength; see the Story page for details.',
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
          'In recruitment order: Aldo (sword, fire), Feinne (staff), Riica (battle/support android), Amy (fists, wind), Yuna (purification), Cyrus (Enku Jizai swordsman), Suzette (spear, wind), Melina (hammer), Mariel (healing), Anabel (paladin), Cetie (spear), Renri (execution), Helena (demolition), Shion (katana), Bertrand (royal spear), Gariyu (hellfire), Shanie (water sword), Myrus (beast), and Ramiu (planet blessing, New Game+ guide).',
      },
      {
        h: 'Character Roles',
        list: [
          'Aldo — fire sword damage; builds CP fast for Chain Skill follow-ups.',
          'Yuna — mage who charges CP by healing, then boosts water-type damage.',
          'Feinne — healer/support with Maiden Prayer, Fairy Light Regen, status recovery and barriers.',
          'Suzette — wind spear with poison/paralysis stacking; Dragonbuster punishes poisoned targets.',
          'Riica — android with two modes: battle and support.',
          'Cyrus — mysterious frog samurai wielding Enku Jizai sword arts.',
        ],
      },
      {
        h: 'Character Skills',
        text: 'Each character grows along two skill trees — for example Aldo’s fire Sword Draw tree and his general Sword Skills tree:',
        list: [
          'Booster nodes add stat bonuses (PWR, INT, and more); passives cover crit rate, weakness damage and Break.',
          'Chain Skills trigger automatically once their CP gauge fills.',
          'Skill upgrades evolve abilities, such as Fire Slash upgrading into Volcano Blade.',
        ],
      },
      {
        h: 'Character Quests',
        text:
          'Finish a character’s full quest line to earn their Character Badge. Equip it on another character of the same weapon type and they can use that character’s Chain Skill — letting units gain element coverage they normally lack.',
      },
      {
        h: 'Character Information',
        text:
          'Beyond the main story, Encounter Quests introduce each companion, Character Quests deepen their personal stories, and Kinship Quests unlock as your bonds grow. All 18 companions are distributed across the three eras of the timeline.',
      },
      {
        h: 'Frequently Asked Questions',
        list: [
          'How many playable characters are there? — 19, including the New Game+ guide Ramiu.',
          'Can DLC add more characters? — Yes, five character packs add 10 more; see the DLC page.',
          'Do DLC characters have English voice acting? — Their quests currently do not.',
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
          'Aldo and his sister Feinne were adopted by the village chief of Baruoki as infants and raised together for 16 years. When the self-proclaimed Beast King seizes Feinne for her hidden power, Aldo chases him into the Moonlight Forest — and through a rift in spacetime that opens onto a world 800 years in the future.',
      },
      {
        h: 'Setting',
        text: 'The journey spans three eras of the Another Eden world:',
        list: [
          'The Present · 300 AD — the kingdom of Miglance, where humanity depends on prisma crystal energy and tensions with the Beasts run high.',
          'The Future · 1100 AD — after the land became barren, humanity fled to the sky and built the Shining City of Elzion, where the Synth Rebellion unfolds.',
          'The Antiquity · 20,000 BC — humans live alongside spirits and the four great elementals, while the troubled King Palsifal builds a tower for a wholly unnatural experiment.',
        ],
      },
      {
        h: 'Main Story',
        text:
          'Another Eden Begins is a standalone reconstruction of the first arc of Another Eden: The Cat Beyond Time and Space, retold as a complete console/PC experience. Scenario and direction by Masato Kato; main theme by Yasunori Mitsuda, with the score by Procyon Studio.',
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
        ],
      },
      {
        h: 'Endings',
        text:
          'Your choices and actions across the run branch into more than 10 different endings. With a fully built party carried over, later runs can focus on quest completion, kinship bonds and cat collection without re-grinding.',
      },
      {
        h: 'How Long to Beat',
        text:
          'The main story spans 26 chapters across the three eras. Exact playtime depends on how much exploring, questing and cat collecting you do — clearing the first arc takes dozens of hours, with New Game+ extending it further.',
      },
      {
        h: 'Story FAQ',
        list: [
          'Is Another Eden Begins a remake? — It is a standalone reconstruction of the first arc of Another Eden: The Cat Beyond Time and Space.',
          'How many endings are there? — More than 10, reached through New Game+ choices.',
          'Who wrote the story? — Masato Kato (Chrono Trigger, Chrono Cross, Xenogears).',
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
          'Another Eden Begins launched on Nintendo Switch worldwide on September 16, 2026, alongside the Switch 2 edition. The Nintendo eShop carries the standard edition; Switch 2 Edition pricing is set at 5,480 yen (tax included) in Japan, with the Switch/Steam editions at 4,980 yen.',
      },
      {
        h: 'Nintendo Switch 2',
        text:
          'A dedicated Nintendo Switch 2 Edition is available at launch, and the official news and trailer materials list Nintendo Switch 2 / Nintendo Switch / Steam as the confirmed platforms.',
      },
      {
        h: 'PC (Steam)',
        text: 'The Steam release launched on September 16, 2026. Steam features include:',
        list: [
          'Single-player only, with 28 achievements and cloud saves.',
          'Full controller support.',
          'Language support: English, Japanese, Korean, Simplified Chinese and Traditional Chinese.',
        ],
      },
      {
        h: 'PS5',
        text:
          'As of September 23, 2026, there has been no official announcement of a PS5 version. PlayStation-focused sites list the game only under PC and Nintendo platforms, PlayStation Store carries no Another Eden Begins product page, and official materials from Wright Flyer Studios list only Nintendo Switch 2 / Nintendo Switch / Steam. If a PS5 version is announced, official sources (anothereden.games and WFS news) will confirm it.',
      },
      {
        h: 'Platform Differences',
        list: [
          'The Switch 2 Edition carries a separate price point (5,480 yen vs 4,980 yen).',
          'Steam offers achievements and cloud saves; Nintendo versions share the same game content.',
          'A free demo lets you play through Chapter 6 with save data carrying over to the full game (all platforms).',
        ],
      },
      {
        h: 'System Requirements',
        text:
          'Full system requirements for the PC version are listed on the official Steam store page — check there for the latest spec sheet before buying.',
      },
      {
        h: 'FAQ',
        list: [
          'Is Another Eden Begins on PS5? — Not announced as of September 2026.',
          'Is it on Xbox? — No announcement.',
          'Does the game support cross-save? — Cloud saves are available on Steam; check Nintendo platform documentation for save transfers.',
          'Is there a demo? — Yes, a free demo covers the first chapters and progress carries over.',
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
          'Another Eden Begins launched with a DLC Season Pass covering five character packs (Vol.1–5). Vol.1 and Vol.2 went live alongside the game on September 16, 2026; Vol.3–5 are planned through the rest of 2026. Each pack adds 2 playable characters with their own quests.',
      },
      {
        h: 'DLC List',
        text: 'Season Pass lineup and timing:',
        list: [
          'Vol.1 — Thillelille & Tiramisu (September 16, 2026; encounter quest unlocks after Chapter 12)',
          'Vol.2 — Elseal & Benedict (September 16, 2026; after Chapter 11)',
          'Vol.3 — Aoife & Wenefica (October 2026; Aoife after Chapter 20, Wenefica after Chapter 12)',
          'Vol.4 — Isuka & Claude (November 2026; Isuka after Chapter 12, Claude after Chapter 11)',
          'Vol.5 — Ashtear & Victor (December 2026; after Chapter 11)',
        ],
      },
      {
        h: 'DLC Content',
        text: 'Every character pack includes:',
        list: [
          '2 additional playable characters.',
          'A dedicated Encounter Quest, Character Quest and Kinship Quest for each character.',
          'Characters join your party only after their encounter quest is cleared at the required chapter point.',
          'The base game is required — DLC is sold separately.',
        ],
      },
      {
        h: 'DLC Price',
        text: 'Official pricing (as listed on Steam and the WFS announcement):',
        list: [
          'Individual character pack: $9.99 / 1,000 yen (tax incl.) / ~¥25 CN.',
          'Season Pass (Vol.1–5): $44.99 / 4,500 yen (tax incl.) / ~¥108 CN.',
          'All DLC bundled: ~¥158 CN on Steam.',
        ],
      },
      {
        h: 'DLC Release Information',
        text:
          'Vol.1 and Vol.2 were available at launch. Vol.3 ships in October 2026, Vol.4 in November and Vol.5 in December. Steam notifies you when later packs go live; from Vol.2 onward each pack can also be bought individually — avoid duplicate purchases if you own the Season Pass.',
      },
      {
        h: 'DLC FAQ',
        list: [
          'Do I need the base game? — Yes, the base game is sold separately.',
          'Are DLC quests voiced in English? — DLC characters’ Encounter/Character/Kinship quests do not currently have English voices.',
          'When can I recruit DLC characters? — After clearing the required chapter and completing their encounter quest.',
          'Will more DLC follow? — Vol.3–5 complete the announced Season Pass through December 2026.',
        ],
      },
    ],
  },
];
