// Add squares
const squares = document.querySelector('.squares');

const DAY_FAILED = 4;
const DID_SOMETHING_EXTRA = 3;
const BOTH_GOALS_ACHIEVED = 2;
const BARE_MINIMUM = 1;
const PREV_MONTH = 0;

// first three days from the July
for (let i = 0; i < 3; i++) {
  squares.insertAdjacentHTML('beforeend', `<li data-level="${PREV_MONTH}"></li>`);
}

// Empty additions till Friday (exclusive)
const progressUpdate = (achievement) => {
  squares.insertAdjacentHTML('beforeend', `<li data-level="${achievement}"></li>`);
}

// starting from August
progressUpdate(DAY_FAILED);
progressUpdate(DAY_FAILED);
progressUpdate(BARE_MINIMUM);
progressUpdate(BOTH_GOALS_ACHIEVED); // This is fine!
progressUpdate(BOTH_GOALS_ACHIEVED);




