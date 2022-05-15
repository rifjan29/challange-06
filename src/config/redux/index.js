import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persisConfig = {
    key: 'react-login',
    // storage: storage, jika nama key dan value sama dapat cuma satu aja
    storage
};

const persistedReducer = persistReducer(persisConfig, rootReducer)

const store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store)

export {store, persistor};  
