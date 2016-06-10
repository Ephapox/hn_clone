import angular from 'angular';
import RandomNames from './impl';

export default angular.module('services.nameService', [])
	.service('NameService', RandomNames)
	.name;
