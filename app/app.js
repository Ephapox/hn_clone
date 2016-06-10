import angular from 'angular';
import uirouter from 'angular-ui-router';
import configs from './app.config.js'; 

let app = angular.module('hn_clone', ['ui.router'])
				.config(configs);

export default app;
