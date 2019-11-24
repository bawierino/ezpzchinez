import { Word } from './structures/word';
import { characters } from './characters';
import { hashify } from '../utils/hashify';

type RawWordsObject = { [propName: string]: Omit<Word, 'characters' | 'id'> };
type WordsObject = { [propName: string]: Word };

const rawWords: RawWordsObject = {
	你好: { meaning: 'hello' },
	再见: { meaning: [ 'bye', 'goodbye' ] },
	什么: { meaning: 'what', remarks: 'replace with word you are asking for' },
	一二三四: { meaning: '1, 2, 3, 4', remarks: 'IH AH SEN TZÜÜÜ' },
	人人: { meaning: [ '' ] },
	大人: { meaning: [ '' ] },
	小人: { meaning: [ '' ] },
	大小: { meaning: [ '' ] },
	小狗: { meaning: [ '' ] },
	火山: { meaning: [ '' ] },
	冰山: { meaning: [ '' ] },
	雨水: { meaning: [ '' ] },
	山水: { meaning: [ '' ] },
	大雨: { meaning: [ '' ] },
	父母: { meaning: [ '' ] },
	父子: { meaning: [ '' ] },
	父女: { meaning: [ '' ] },
	母子: { meaning: [ '' ] },
	母女: { meaning: [ '' ] },
	子女: { meaning: [ '' ] },
	大众: { meaning: [ '' ] },
	森林: { meaning: [ '' ] },
	水晶: { meaning: [ '' ] },
	出众: { meaning: [ '' ] },
	回家: { meaning: [ '' ] },
	出口: { meaning: [ '' ] },
	火山口: { meaning: [ '' ] },
	不大不小: { meaning: [ '' ] },
	门口: { meaning: [ '' ] },
	家人: { meaning: [ '' ] },
	大雪: { meaning: [ '' ] },
	小雪: { meaning: [ '' ] },
	小雨: { meaning: [ '' ] },
	风雨: { meaning: [ '' ] },
	大风雨: { meaning: [ '' ] },
	主人: { meaning: [ '' ] },
	大王: { meaning: [ '' ] },
	女王: { meaning: [ '' ] },
	王子: { meaning: [ '' ] },
	小王子: { meaning: [ '' ] },
	猫王: { meaning: [ '' ] },
	山羊: { meaning: [ '' ] },
	中国: { meaning: [ '' ] },
	美国: { meaning: [ '' ] },
	木瓜: { meaning: [ '' ] },
	水果: { meaning: [ '' ] },
	油田: { meaning: [ '' ] },
	水田: { meaning: [ '' ] },
	冬天: { meaning: [ '' ] },
	小草: { meaning: [ '' ] },
	吃水果: { meaning: [ '' ] },
	呆子: { meaning: [ '' ] },
	爸爸: { meaning: [ '' ] },
	妈妈: { meaning: [ '' ] },
	妹妹: { meaning: [ '' ] },
	闪人: { meaning: [ '' ] },
	水果刀: { meaning: [ '' ] },
	国家: { meaning: [ '' ] },
	国王: { meaning: [ '' ] },
	休火山: { meaning: [ '' ] },
	住家: { meaning: [ '' ] },
	保母: { meaning: [ '' ] },
	三点半: { meaning: [ '' ] },
	手心: { meaning: [ '' ] },
	身体: { meaning: [ '' ] },
	星星: { meaning: [ '' ] },
	海洋: { meaning: [ '' ] },
	东西南北: { meaning: [ '' ] },
	东西: { meaning: [ '' ] },
	吃东西: { meaning: [ '' ] },
	小吃: { meaning: [ '' ] },
	大吃: { meaning: [ '' ] },
	好吃: { meaning: [ '' ] },
	工人: { meaning: [ '' ] },
	手工: { meaning: [ '' ] },
	女士: { meaning: [ '' ] },
	海马: { meaning: [ '' ] },
	海龟: { meaning: [ '' ] },
	女巫: { meaning: [ '' ] },
	男巫: { meaning: [ '' ] },
	去中国: { meaning: [ '' ] },
	有人: { meaning: [ '' ] },
	去美国: { meaning: [ '' ] },
	白天: { meaning: [ '' ] },
	天气: { meaning: [ '' ] },
	雷雨: { meaning: [ '' ] },
	雪人: { meaning: [ '' ] },
	大雷雨: { meaning: [ '' ] },
	足球: { meaning: [ '' ] },
	球门: { meaning: [ '' ] },
	朋友: { meaning: [ '' ] },
	网友: { meaning: [ '' ] },
	女朋友: { meaning: [ '' ] },
	男朋友: { meaning: [ '' ] },
	上车: { meaning: [ '' ] },
	下车: { meaning: [ '' ] },
	七上八下: { meaning: [ '' ] },
	上海: { meaning: [ '' ] },
	户口: { meaning: [ '' ] },
	孙女: { meaning: [ '' ] },
	孙子: { meaning: [ '' ] },
	生女: { meaning: [ '' ] },
	生男: { meaning: [ '' ] },
	安心: { meaning: [ '' ] },
	水灾: { meaning: [ '' ] },
	火灾: { meaning: [ '' ] },
	未来: { meaning: [ '' ] },
	来日: { meaning: [ '' ] },
	生日: { meaning: [ '' ] },
	回来: { meaning: [ '' ] },
	来回: { meaning: [ '' ] },
	品味: { meaning: [ '' ] },
	人品: { meaning: [ '' ] },
	口味: { meaning: [ '' ] },
	女人味: { meaning: [ '' ] },
	中国茶: { meaning: [ '' ] },
	大米: { meaning: [ '' ] },
	仙人: { meaning: [ '' ] },
	大火: { meaning: [ '' ] },
	仙子: { meaning: [ '' ] }
};

function buildWords(rawWords: RawWordsObject): WordsObject {
	const result: WordsObject = {};
	Object.entries(characters).forEach((entry) => {
		result[entry[0]] = { characters: [ entry[1] ], ...entry[1] };
	});
	Object.entries(rawWords).forEach((entry) => {
		result[entry[0]] = {
			...entry[1],
			characters: entry[0].split('').map((characterIdentifier) => characters[characterIdentifier]),
			id: hashify(entry[0])
		};
	});
	return result;
}

export const words = buildWords(rawWords);
