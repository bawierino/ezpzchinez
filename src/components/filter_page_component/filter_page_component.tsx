import * as React from "react";
import { Word } from "../../data/structures/word";
import { useForceUpdateOnUrlChange } from "../../hooks/use_force_update_on_url_change";
import { routerService } from "../../services/router_service";
import { DetailedWordCardComponent } from "../detailed_word_card_component";
import { WordsCardsComponent } from "../word_cards_component";
import { FilterBar } from "./filter_bar";
import { useIntuitiveFilterPageScrolling } from "./use_intuitive_filter_page_scrolling";
import { filterPageStyle } from "./filter_page_component.style";

export function FilterPageComponent(words: Word[]): JSX.Element {
    useForceUpdateOnUrlChange();

    const hasDetailedWord = routerService.hasHash();

    const { saveScrollTop } = useIntuitiveFilterPageScrolling(!hasDetailedWord);

    const [results, setResults] = React.useState(words);
    const [hidePinYin, setHidePinYin] = React.useState(false);
    const [hideMeaning, setHideMeaning] = React.useState(false);

    function renderDetailedWord(): JSX.Element {
        if (hasDetailedWord) {
            const id = getDetailedWordId();
            return (
                <DetailedWordCardComponent
                    word={getWordById(id)}
                    id={id}
                    onSubCharacterClick={handleCardClick}
                />
            );
        } else {
            return undefined;
        }
    }

    function getWordById(id: string): Word {
        // check if word is in the results because the set is smaller than all words
        const wordFromResults = results.find(word => word.id === id);
        if (wordFromResults) {
            return wordFromResults;
        } else {
            // check if word is in set of all words
            const wordFromAllWords = words.find(word => word.id === id);
            if (wordFromAllWords) {
                return wordFromAllWords;
            } else {
                throw new Error(`Word for id ${id} not found`);
            }
        }
    }

    function handleCardClick(id: string): void {
        routerService.navigateToHash(id);
    }

    function getDetailedWordId(): string {
        if (hasDetailedWord) {
            return routerService.getHash();
        }
        return undefined;
    }

    return (
        <React.Fragment>
            <div className={filterPageStyle}>
                <FilterBar
                    isBackButtonMode={hasDetailedWord}
                    words={words}
                    onResultsChanged={setResults}
                    onHideMeaningChanged={setHideMeaning}
                    onHidePinYinChanged={setHidePinYin}
                />
                <div className="words">
                    {hasDetailedWord ? (
                        renderDetailedWord()
                    ) : (
                        <WordsCardsComponent
                            onClickCard={id => {
                                saveScrollTop();
                                handleCardClick(id);
                            }}
                            words={results}
                            hideMeaning={hideMeaning}
                            hidePinYin={hidePinYin}
                        />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}
