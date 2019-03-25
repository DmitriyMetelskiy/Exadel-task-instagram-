class View {
    constructor(postsWrapper, user = 'Guest') {
        this._postsWrapper = postsWrapper;
        this._user = user;
        this._showHeader();
    }

    _showHeader() {
        if(this._user !== 'Guest') {
            const addButton = document.querySelector('.header__add-photo');
            addButton.style.display = 'initial';

            const header_user = document.querySelector('.header__user');
            header_user.style.display = 'initial';

            const username = header_user.querySelector('.header__username');
            username.textContent = this._user;

            const login = document.querySelector('.header__login');
            login.style.display = 'none';
        }
    }

    _logout() {
        this._user = 'Guest';
        const addButton = document.querySelector('.header__add-photo');
        addButton.style.display = 'none';

        const header_user = document.querySelector('.header__user');
        header_user.style.display = 'none';

        const login = document.querySelector('.header__login');
        login.style.display = 'initial';
    }

    _createPostElement(postObject) {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.id = postObject.id;

        const image = document.createElement('img');
        image.setAttribute('src', postObject.photoLink);
        postElement.appendChild(image);

        const info = document.createElement('div');
        info.classList.add('post__details');
        postElement.appendChild(info);
        
        const author = document.createElement('div');
        const author_h3 = document.createElement('h3');
        author_h3.textContent = postObject.author;
        author.appendChild(author_h3);
        info.appendChild(author);

        const hashtags = document.createElement('div');
        const hashtags_p = document.createElement('p');
        hashtags_p.textContent = postObject.hashTags;
        hashtags.appendChild(hashtags_p);
        info.appendChild(hashtags);

        const description = document.createElement('div');
        description.classList.add('post__information');
        const description_p = document.createElement('p');
        description_p.textContent = postObject.description;
        description.appendChild(description_p);
        info.appendChild(description);

        if(this._user !== 'Guest') {
            const buttons = document.createElement('div');
            buttons.classList.add('post__buttons');
        //////// Like
            const likeButton = document.createElement('div');
            likeButton.classList.add('post__like-button');

            const likeImage = document.createElement('img');
            if(postObject.likes.indexOf(this._user) === -1) {
                likeImage.setAttribute('src', './images/like.png');
            }
            else {
                likeImage.setAttribute('src', './images/like_active.png');
            }
            likeImage.setAttribute('alt', 'Like');
            // likeImage.setAttribute('on-click', 'View.changeLike()');

            likeButton.appendChild(likeImage);
            buttons.appendChild(likeButton);
        ////////
            if(postObject.author === this._user) {
            //////// Edit
                const editButton = document.createElement('div');
                editButton.classList.add('post__edit-button');

                const a = document.createElement('a');
                // a.setAttribute('href', './editPost.html');

                const editImage = document.createElement('img');
                editImage.setAttribute('src', './images/edit.png');
                editImage.setAttribute('alt', 'Edit');

                a.appendChild(editImage);
                editButton.appendChild(a);
                buttons.appendChild(editButton);
            //////// Delete
                const deleteButton = document.createElement('div');
                deleteButton.classList.add('post__delete-button');

                const deleteImage = document.createElement('img');
                deleteImage.setAttribute('src', './images/delete.png');
                deleteImage.setAttribute('alt', 'Edit');
                // deleteImage.setAttribute('on-click', '/*View/PhotoList*/.deletePost()');

                deleteButton.appendChild(deleteImage);
                buttons.appendChild(deleteButton);
            }
            info.appendChild(buttons);
        }
        const createdAt = document.createElement('div');
        createdAt.classList.add('publication-date');
        const date = postObject.createdAt;
        const dateString = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '  ' +
                                date.getHours() + ':' + date.getMinutes();
        const date_p = document.createElement('p');
        date_p.textContent = 'published ' + dateString;
        createdAt.appendChild(date_p);

        info.appendChild(createdAt);
        return postElement;
    }
/*
    static changeLike() {
        // I guess this.src is this image's URL.
    }
*/
    _showPosts(postsArray) {
        const documentFragment = document.createDocumentFragment();

        while (this._postsWrapper.firstElementChild) {
            this._postsWrapper.removeChild(this._postsWrapper.firstElementChild);
        }

        postsArray
            .slice()
            .map((post) => this._createPostElement(post))
            .forEach((postElement) => {
                documentFragment.appendChild(postElement);
            });

        this._postsWrapper.appendChild(documentFragment);
    }

    _editPost(id, newPost) {
        const oldElement = this._postsWrapper.querySelector('#' + id);
        if(oldElement) {
            const newElement = document.createElement(this._createPostElement(newPost));
            this._postsWrapper.replaceChild(newElement, oldElement);
        }
    }
}