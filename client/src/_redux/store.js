import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categories } from '../_reducers/categories';
import { events, eventsToday,eventsUpComing } from '../_reducers/events';
import { userDetail } from '../_reducers/user';
import { promise, logger } from './middleware';

//get alll reducer
//global state come from here
const rootReducers = combineReducers({
	categories,
	events,
	userDetail,
	eventsToday,
	eventsUpComing
});

//setup store redux

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
