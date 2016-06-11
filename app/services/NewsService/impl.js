const askStoriesUrl = "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty";
const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
const storyUrl = "https://hacker-news.firebaseio.com/v0/item/";
const userUrl = "https://hacker-news.firebaseio.com/v0/user/";
let askStories = [];

export default class NewsService {
	constructor($http) {
		this.$http = $http;
	}
	
	getAskStoryIds() {
		return this.$http.get(askStoriesUrl);
	}
	getTopStoryIds() {
		return this.$http.get(topStoriesUrl);
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
