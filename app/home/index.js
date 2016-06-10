import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';

import NewsStoriesDirective from './../directives/news-stories/news-stories.directive';

import NewsService from './../services/NewsService/NewsService';

export default angular.module('app.home', ['ui.router', NewsStoriesDirective, NewsService])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;
