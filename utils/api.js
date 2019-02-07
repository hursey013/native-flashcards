import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "UdaciCards:decks";

const initialData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

function setInitialData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData));
  return initialData;
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results =>
      results !== null ? JSON.parse(results) : setInitialData()
    )
    .then(results => Object.keys(results).map(key => results[key]));
}

export function saveDeck(title) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );
}

export function addCardToDeck(deckId, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(data => {
    decks = JSON.parse(data);
    decks[deckId].questions.push(card);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    return decks[deckId];
  });
}
