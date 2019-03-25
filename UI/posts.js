const MAX_DESCRIPTION_LENGTH = 200;

class PhotoList {
    constructor(photoPosts) {
        this._posts = photoPosts.slice();
    }

    _getPosts(skip = 0, top = 10, filterConfig = {}) {
        if(typeof skip === "number" && !isNaN(skip) && skip >= 0 &&
            typeof top === "number" && !isNaN(top) && top >= 0 &&
             typeof filterConfig === "object" && filterConfig !== null) {
            let res = this._posts.slice();
            if (filterConfig.author) {
                res = res.filter((item) => item.author === filterConfig.author);
            }
            if(filterConfig.hashtags) {
                res = res.filter((item) => filterConfig.hashTags.every((tag) => item.hashTags.includes(tag)));
            }
            if(filterConfig.date) {
                res = res.filter((item) => item.createdAt >= filterConfig.date.from &&
                                            item.createdAt <= filterConfig.date.till);
            }
            res = res.sort((a, b) => b.createdAt - a.createdAt);
            res = res.slice(skip, skip + top);
            return res;
        }
        else {
            return;
        }
    }
    
    _get(id) {
        if(typeof id !== 'string') {
            return;
        }
        let index = this._posts.findIndex((item) => item.id === id);
        if(index === -1) {
            return;
        }
        return this._posts[index];
    }

    _validateID(id) {
        if(this._posts.findIndex((item) => item.id === id) === -1) {
            return true;
        }
        return false;
    }

    static _validate(photoPost) {
        if (typeof photoPost === 'object' && photoPost !== null) {
            if (photoPost.id && (photoPost.descriprion || photoPost.descriprion === "") &&
            photoPost.createdAt && photoPost.author && photoPost.photoLink) {
                if (typeof photoPost.id === 'string' && typeof photoPost.descriprion === 'string' && 
                typeof photoPost.createdAt === 'object' && typeof photoPost.author === 'string' &&
                typeof photoPost.photoLink === 'string') {
                    if (photoPost.author !== '' && photoPost.descriprion.length < MAX_DESCRIPTION_LENGTH &&
                    photoPost.photoLink !== '') {
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
                }
            }
        }
        return false;
    }

    _add(post) {
        if(PhotoList.validate(post) && this._validateID(post.id)) {
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