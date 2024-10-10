import { configureStore } from '@reduxjs/toolkit';

import reducers from "./index";

export default function configuredStore() {
    return configureStore(reducers);
}
