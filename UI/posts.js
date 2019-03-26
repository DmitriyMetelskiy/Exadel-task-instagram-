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

    _validateID(id) {
        if(this._posts.findIndex((item) => item.id === id) === -1) {
            return true;
        }
        return false;
    }

    static _validate(photoPost) {
        if (photoPost.description.length < MAX_DESCRIPTION_LENGTH) {
            if (Array.isArray(photoPost.hashTags)) {
                if (photoPost.hashTags.length !== 0 && 
                photoPost.hashTags.filter((item) => typeof item !== 'string').length !== 0) {
                    return false;
                }
            }
            if (Array.isArray(photoPost.likes)) {
                if (photoPost.likes.length !== 0 &&
                photoPost.likes.filter((item) => typeof item !== 'string').length !== 0) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    _add(post) {
        if(PhotoList._validate(post) && this._validateID(post.id)) {
            this._posts.push(post);
            return true;
        }
        else {
            return false;
        }
    }

    _edit(id, photoPost) {
        let index = this._posts.findIndex((item) => item.id === id);
        if (index === -1) {
            return false;
        }
        let post = this._posts[index];
        if(typeof photoPost.descriprion === 'string' && photoPost.descriprion.length < MAX_DESCRIPTION_LENGTH) {
            post.descriprion = photoPost.descriprion;
        }
        if(typeof photoPost.photoLink === 'string' && photoPost.photoLink.length !== 0) {
            post.photoLink = photoPost.photoLink;
        }
        if (Array.isArray(photoPost.hashTags)) {
            if (photoPost.hashTags.length === 0) {
                post.hashTags = [];
            }
            else if (photoPost.hashTags.filter((item) => typeof item !== 'string').length === 0) {
                post.hashTags = photoPost.hashTags.slice();
            }
        }
        if (Array.isArray(photoPost.likes)) {
            if (photoPost.likes.length === 0) {
                post.likes = [];
            }
            else if (photoPost.likes.filter((item) => typeof item !== 'string').length === 0) {
                post.likes = photoPost.likes.slice();
            }
        }
        return true;
    }

    _remove(id) {
        let index = this._posts.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._posts.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
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