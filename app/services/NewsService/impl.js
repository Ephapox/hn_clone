import hn from './NewsServiceData'; 

const storyUrl = "https://hacker-news.firebaseio.com/v0/item/";
const userUrl = "https://hacker-news.firebaseio.com/v0/user/";

let urlFormatter = (base, version, type, typeReplace, versionReplace) => {
	return base.replace(versionReplace, version).replace(typeReplace, type);	
} 

export default class NewsService {
	constructor($http) {
		this.$http = $http;
	}
	
	getIds(type) {
		let url = urlFormatter(hn.baseUrl, hn.version, hn.type[type], '$TYPE$', '$VERSION$');
		return this.$http.get(url);
	}
	getStories(storyIds, limit = 5) {
		const that = this;
		const promiseArray = storyIds.data
				.filter((id, idx) => {
					if(idx >= limit) return false;
					return true;
				})
				.map(id => {
					return that.$http.get(`${storyUrl + id}.json`)
				});
		return Promise.all(promiseArray);
	}
	getUser(user) {
		return this.$http.get(`${userUrl + user}.json`);
	}
}

NewsService.$inject = ["$http"];
