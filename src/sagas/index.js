import {
  takeLatest,
  takeEvery
} from 'redux-saga/effects';
import startup from './text';

export default function *root() {
yield [
  takeLatest('STARTUP',startup)
]
}