import routing from './home.routes';
import HomeController from './home.controller';
import homeCss from './home.sass';

import NewsStoriesDirective from './../directives/news-stories/news-stories.directive';
import UserDisplayDirective from './../directives/user-display/user-display.directive';
import NewsWidgetDirective from './../directives/news-widget/news-widget.directive';

import NewsService from './../services/NewsService/NewsService';

export default angular.module('app.home', ['ui.router', NewsWidgetDirective,  NewsService])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;
