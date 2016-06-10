import angular from 'angular';
import NewsService from './impl';
export default angular.module('services.newsService', [])
	.service('NewsService', NewsService)
	.name;
