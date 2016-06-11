import routing from './home.routes';
import HomeController from './home.controller';
import homeCss from './home.sass';

import NewsStoriesDirective from './../directives/news-stories/news-stories.directive';
import UserDisplay from './../directives/user-display/user-display.directive';

import NewsService from './../services/NewsService/NewsService';

export default angular.module('app.home', ['ui.router', NewsStoriesDirective, UserDisplay,  NewsService])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;
