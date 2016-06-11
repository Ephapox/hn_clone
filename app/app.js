import configs from './app.config.js'; 

import home from './home';

let app = angular.module('hn_clone', ['ui.router', home])
				.config(configs);

export default app;
