import { Character } from "./structures/character";
import { hashify } from "../utils/hashify";

type RawCharactersObject = {
    [propName: string]: Omit<Character, "logogram" | "id">;
};
type CharacterObject = { [propName: string]: Character };

// :{meaning:[''],pinyin:''},

const rawCharacters: RawCharactersObject = {
    你: { meaning: "you", pinyin: "nǐ" },
    好: { meaning: "good", pinyin: "hǎo" },
    再: { pinyin: "zài", meaning: ["again", "once more"] },
    见: { pinyin: "jiàn", meaning: ["to meet"] },
    零: { meaning: "0", pinyin: "líng" },
    一: { meaning: "1", pinyin: "yī" },
    二: { meaning: "2", pinyin: "èr" },
    三: { meaning: "3", pinyin: "sān" },
    四: { meaning: "4", pinyin: "sì" },
    五: { meaning: "5", pinyin: "wǔ" },
    六: { meaning: "6", pinyin: "liù" },
    七: { meaning: "7", pinyin: "qī" },
    八: { meaning: "8", pinyin: "bā" },
    九: { meaning: "9", pinyin: "jiǔ" },
    十: { meaning: "10", pinyin: "shí" },
    百: { meaning: "100", pinyin: "bǎi" },
    元: { meaning: ["yuan", "¥"], pinyin: "yuán" },
    名: { meaning: "name", pinyin: "míng" },
    姓: {
        meaning: ["to be called (family-name)", "to be called (last-name)"],
        pinyin: "xìng"
    },
    什: { pinyin: "shén", meaning: "what" },
    么: { pinyin: "me", meaning: "suffix, used to form interrogative" },
    呢: {
        pinyin: "ne",
        remarks: "Binding word used after answering a questions to direct the question to someone else"
    },
    叫: { meaning: "to be called", pinyin: "jiào" },
    人: { meaning: "person", pinyin: "rén" },
    大: { meaning: ["big", "large", "great"], pinyin: "dà" },
    夫: { meaning: ["male adult", "husband"], pinyin: "fū" },
    小: { meaning: ["small", "few", "young"], pinyin: "xiǎo" },
    日: { meaning: ["sun", "day"], pinyin: "rì" },
    月: { meaning: ["moon", "month", "monthly"], pinyin: "yuè" },
    明: {
        meaning: ["bright", "of clear meaning", "to understand", "wise"],
        pinyin: "míng"
    },
    旦: { meaning: ["dawn", "morning", "daybreak"], pinyin: "dàn" },
    夕: { meaning: ["dusk", "dawn"], pinyin: "xī" },
    兔: { meaning: ["rabbit"], pinyin: "tù" },
    狗: { meaning: ["dog"], pinyin: "gǒu" },
    猫: { meaning: ["cat"], pinyin: "māo" },
    马: { meaning: ["horse"], pinyin: "mǎ" },
    火: { meaning: ["fire", "urgent", "ammunition"], pinyin: "huǒ" },
    木: {
        meaning: ["tree", "wood", "wooden", "coffin", "simple"],
        pinyin: "mù"
    },
    山: { meaning: ["mountain", "hill"], pinyin: "shān" },
    石: { meaning: ["stone"], pinyin: "shí" },
    水: { meaning: ["water", "river", "liquid", "beverage"], pinyin: "shuǐ" },
    雨: { meaning: ["rain"], pinyin: "yǔ" },
    冰: { meaning: ["ice"], pinyin: "bīng" },
    雪: { meaning: ["snow", "snowfall"], pinyin: "xuě" },
    风: { meaning: ["wind", "news"], pinyin: "fēng" },
    从: { meaning: ["from"], pinyin: "cóng" },
    炎: { meaning: ["flame", "inflammation"], pinyin: "yán" },
    林: { meaning: ["woods", "forest"], pinyin: "lín" },
    出: { meaning: ["to go out"], pinyin: "chū" },
    岩: { meaning: ["rock", "cliff"], pinyin: "yán" },
    子: {
        meaning: ["son", "child", "seed", "egg"],
        pinyin: "zǐ",
        remarks: ["Often pronounced with no tone as a suffix to emphasize smallness"]
    },
    女: { meaning: ["female", "woman", "daughter"], pinyin: "nǚ" },
    父: { meaning: ["father"], pinyin: "fù" },
    母: {
        meaning: ["mother", "elderly female relative", "origin"],
        pinyin: "mǔ"
    },
    家: { meaning: ["home", "family"], pinyin: "jiā" },
    众: { meaning: ["crowd", "many", "numerous"], pinyin: "zhòng" },
    焱: { meaning: ["flame"], pinyin: "yàn" },
    晶: { meaning: ["crystal"], pinyin: "jīng" },
    森: { meaning: ["forest"], pinyin: "sēn" },
    口: { meaning: ["mouth"], pinyin: "kǒu" },
    心: { meaning: ["heart", "mind"], pinyin: "xīn" },
    目: { meaning: ["eye"], pinyin: "mù" },
    耳: { meaning: ["ear"], pinyin: "ěr" },
    手: { meaning: ["hand"], pinyin: "shǒu" },
    回: { meaning: ["to circle", "to go back"], pinyin: "huí" },
    不: { meaning: ["not"], pinyin: "bù" },
    老: { meaning: ["old", "experienced", "always"], pinyin: "lǎo" },
    平: { meaning: ["flat", "equal", "fair"], pinyin: "píng" },
    高: { meaning: ["high", "tall", "above average", "loud"], pinyin: "gāo" },
    长: { meaning: ["length", "long", "forever", "always"], pinyin: "cháng" },
    门: { meaning: ["gate", "door"], pinyin: "mén" },
    间: { meaning: ["between", "among", "room"], pinyin: "jiān" },
    王: {
        meaning: ["king", "monarch"],
        pinyin: "wáng",
        remarks: 'Pronounced "wàng" it means "to rule" or "to reign"'
    },
    主: { meaning: ["master", "owner", "host"], pinyin: "zhǔ" },
    后: {
        meaning: ["queen", "empress", "back", "behind", "after", "later"],
        pinyin: "hòu"
    },
    玉: { meaning: ["jade"], pinyin: "yù" },
    牛: { meaning: ["bull", "cow", "ox"], pinyin: "niú" },
    羊: { meaning: ["sheep"], pinyin: "yáng" },
    鸟: { meaning: ["bird"], pinyin: "niǎo" },
    鱼: { meaning: ["fish"], pinyin: "yú" },
    国: { meaning: ["country", "nation", "state", "national"], pinyin: "guó" },
    中: { meaning: ["within", "among", "in", "middle"], pinyin: "zhōng" },
    美: { meaning: ["beautiful", "very satisfactory"], pinyin: "měi" },
    白: { meaning: ["white", "snowy", "pure", "bright"], pinyin: "bái" },
    金: {
        meaning: ["gold", "golden", "money", "highly respected"],
        pinyin: "jīn"
    },
    珀: { meaning: ["amber"], pinyin: "pò" },
    淡: { meaning: ["plain", "tasteless", "mild"], pinyin: "dàn" },
    田: { meaning: ["field", "farm"], pinyin: "tián" },
    竹: { meaning: ["bamboo"], pinyin: "zhú" },
    冬: { meaning: ["winter"], pinyin: "dōng" },
    草: { meaning: ["grass", "straw", "manuscript"], pinyin: "cǎo" },
    苗: { meaning: ["sprout", "bud"], pinyin: "miáo" },
    吃: { meaning: ["to eat"], pinyin: "chī" },
    喝: { meaning: ["to drink"], pinyin: "hē" },
    瓜: { meaning: ["melon"], pinyin: "guā" },
    果: { meaning: ["fruit", "nut"], pinyin: "guǒ" },
    油: { meaning: ["oil", "fat", "greasy", "oily"], pinyin: "yóu" },
    呆: { meaning: ["foolish", "stupid", "idiot"], pinyin: "dāi" },
    未: { meaning: ["not yet"], pinyin: "wèi" },
    末: { meaning: ["final", "end"], pinyin: "mò" },
    来: { meaning: ["to come", "to arrive", "ever since"], pinyin: "lái" },
    爸: { meaning: ["father", "dad"], pinyin: "bà" },
    妈: { meaning: ["mama"], pinyin: "mā" },
    妹: { meaning: ["younger sister"], pinyin: "mèi" },
    住: { meaning: ["to stay", "to stay", "to reside"], pinyin: "zhù" },
    保: { meaning: ["to protect", "to defend"], pinyin: "bǎo" },
    休: { meaning: ["to rest"], pinyin: "xiū" },
    闪: { meaning: ["to dodge"], pinyin: "shǎn" },
    皿: { meaning: ["dish", "vessel"], pinyin: "mǐn" },
    刀: { meaning: ["knife", "blade", "(single-edged) sword"], pinyin: "dāo" },
    酉: { meaning: ["vessel"], pinyin: "yǒu" },
    点: { meaning: ["o'clock", "point", "dot", "drop"], pinyin: "diǎn" },
    半: { meaning: ["half", "semi", "incomplete"], pinyin: "bàn" },
    身: { meaning: ["body", "life", "personally"], pinyin: "shēn" },
    体: { meaning: ["body", "form", "system"], pinyin: "tǐ" },
    星: { meaning: ["star", "heavenly body", "satellite"], pinyin: "xīng" },
    海: { meaning: ["ocean", "sea"], pinyin: "hǎi" },
    洋: { meaning: ["ocean", "vast", "foreign"], pinyin: "yáng" },
    东: { meaning: ["east"], pinyin: "dōng" },
    西: { meaning: ["west"], pinyin: "xī" },
    南: { meaning: ["south"], pinyin: "nán" },
    北: { meaning: ["north"], pinyin: "běi" },
    工: { meaning: ["work", "skill", "profession"], pinyin: "gōng" },
    士: { meaning: ["scholar"], pinyin: "shì" },
    贝: { meaning: ["cowrie", "shellfish"], pinyin: "bèi" },
    蛙: { meaning: ["frog"], pinyin: "wā" },
    龟: { meaning: ["turtle", "tortoise"], pinyin: "guī" },
    丑: {
        meaning: ["clown", "shameful", "ugly", "disgraceful"],
        pinyin: "chǒu"
    },
    巫: { meaning: ["witch", "wizard", "shaman"], pinyin: "wū" },
    男: { meaning: ["male"], pinyin: "nán" },
    有: { meaning: ["to have", "there is"], pinyin: "yǒu" },
    飞: { meaning: ["to fly"], pinyin: "fēi" },
    去: { meaning: ["to go"], pinyin: "qù" },
    天: { meaning: ["day", "sky", "heaven"], pinyin: "tiān" },
    云: { meaning: ["cloud"], pinyin: "yún" },
    光: { meaning: ["light", "ray"], pinyin: "guāng" },
    气: { meaning: ["gas", "air", "smell"], pinyin: "qì" },
    雷: { meaning: ["thunder"], pinyin: "léi" },
    弓: { meaning: ["bow"], pinyin: "gōng" },
    网: { meaning: ["net", "network"], pinyin: "wǎng" },
    球: { meaning: ["ball", "sphere", "globe"], pinyin: "qiú" },
    足: { meaning: ["foot"], pinyin: "zú" },
    朋: { meaning: ["friend"], pinyin: "péng" },
    友: { meaning: ["friend"], pinyin: "yǒu" },
    上: {
        meaning: ["on top", "upon", "above", "to climb", "to get onto"],
        pinyin: "shàng"
    },
    下: {
        meaning: ["down", "downwards", "below", "lower", "to go down"],
        pinyin: "xià"
    },
    车: { meaning: ["car", "vehicle"], pinyin: "chē" },
    户: { meaning: ["household"], pinyin: "hù" },
    孙: { meaning: ["grandchild"], pinyin: "sūn" },
    生: {
        meaning: ["to be born", "to give birth", "life", "to grow"],
        pinyin: "shēng"
    },
    安: {
        meaning: ["content", "calm", "still", "quiet", "safe"],
        pinyin: "ān"
    },
    灾: { meaning: ["disaster"], pinyin: "zāi" },
    品: {
        meaning: ["article", "commodity", "product", "goods", "quality"],
        pinyin: "pǐn"
    },
    味: { meaning: ["taste", "smell"], pinyin: "wèi" },
    杏: { meaning: ["apricot", "almond"], pinyin: "xìng" },
    茶: { meaning: ["tea", "tea plant"], pinyin: "chá" },
    米: { meaning: ["rice"], pinyin: "mǐ", remarks: "Refers to uncooked rice" },
    欠: { meaning: ["to owe", "to lack"], pinyin: "qiàn" },
    言: { meaning: ["words", "speech", "to say", "to talk"], pinyin: "yán" },
    吹: { meaning: ["to blow"], pinyin: "chuī" },
    炊: { meaning: ["to cook food"], pinyin: "chuī" },
    信: { meaning: ["letter", "mail"], pinyin: "xìn" },
    仙: { meaning: ["immortal"], pinyin: "xiān" },
    伙: { meaning: ["companion", "partner", "group"], pinyin: "huǒ" },
    佛: { meaning: ["Buddha", "Buddhism"], pinyin: "fó" },
    的: { meaning: ["suffix to express possession"], pinyin: "de" },
    几: { meaning: ["how many?"], pinyin: "jǐ" }
};

function buildCharacters(rawCharacters: RawCharactersObject): CharacterObject {
    const result: CharacterObject = {};
    Object.entries(rawCharacters).forEach(
        entry =>
            (result[entry[0]] = {
                logogram: entry[0],
                id: hashify(entry[0]),
                ...entry[1]
            })
    );
    return result;
}

export const characters = buildCharacters(rawCharacters);
