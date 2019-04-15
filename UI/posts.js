const MAX_DESCRIPTION_LENGTH = 200;

const _filterHelper = {
    author: function (author, posts) {
        return posts.filter((item) => item.author.toLowerCase().includes(author.toLowerCase().trim()));
    },
    hashTags: function (hashTags, posts) {
        return posts.filter((item) => hashTags.every((tag) => item.hashTags.includes(tag)));
    },
    fromDate: function (fromDate, posts) {
        return posts.filter((item) => item.createdAt >= fromDate);
    },
    tillDate: function (tillDate, posts) {
        return posts.filter((item) => item.createdAt <= tillDate);
    }
};

class PhotoList {
    constructor(photoPosts) {
        this._posts = photoPosts.slice();
    }

    _getPosts(skip = 0, top = 10, filterConfig = {}) {
        let res = this._posts.slice();
        if(filterConfig) {
            Object.keys(filterConfig).forEach((field) => {
                res = _filterHelper[field](filterConfig[field], res);
            })
        }
        res = res.sort((a, b) => b.createdAt - a.createdAt);
        res = res.slice(skip, skip + top);
        return res;
    }
    
    _get(id) {
        let index = this._posts.findIndex((item) => item.id === id);
        return this._posts[index];
    }

    static _validate(photoPost) {
        if (photoPost.photoLink.length === 0 || photoPost.description.length > MAX_DESCRIPTION_LENGTH) {
            return false;
        }
        if (photoPost.hashTags.length !== 0 && 
        photoPost.hashTags.filter((item) => typeof item !== 'string').length !== 0) {
            return false;
        }
        return true;
    }

    _add(post) {
        if(PhotoList._validate(post)) {
            this._posts.push(post);
            return true;
        }
        else {
            return false;
        }
    }

    _edit(id, photoPost) {
        if(PhotoList._validate(photoPost)) {
            let index = this._posts.findIndex((item) => item.id === id);
            let post = this._posts[index];
            post.description = photoPost.description;
            post.photoLink = photoPost.photoLink;
            post.hashTags = photoPost.hashTags.slice();
            return true;
        }
        else {
            return false;
        }
    }

    _remove(id) {
        let index = this._posts.findIndex((item) => item.id === id);
        this._posts.splice(index, 1);
        return true;
    }

    _addAll(postArray) {
        let notAdded = [];
        if(!Array.isArray(postArray)) {
            return [];
        }
        postArray.forEach((post) => {
            if(!this.add(post)) {
                notAdded.push(post);
            }
        });
        return notAdded;
    }
}