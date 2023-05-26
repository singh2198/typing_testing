



// import { put, takeLatest } from 'redux-saga/effects';

// function* typingSaga() {
//   yield takeLatest('START_TYPING', countKeysPressed);
// }

// function* countKeysPressed() {
//   const startTime = Date.now();
//   let keysPressed = 0;

//   while (Date.now() - startTime <= 300000) {
//     yield new Promise((resolve) => setTimeout(resolve, 1000)); 

//     keysPressed++;
//     yield put({ type: 'UPDATE_STATS', payload: keysPressed });
//   }
// }

// export default typingSaga;
