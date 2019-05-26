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

    _createPostElement(postObject) {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.id = postObject.id;

        let hashTags = postObject.hashTags;
        if (hashTags.length !== 0) {
            hashTags = '#' + hashTags.join(' #')
        }

        postElement.innerHTML = `<img src="${postObject.photoLink}">
                    <div class="post__details">
                        <div><h3>${postObject.author}</h3></div>
                        <div>
                            <p class="post__hashtags">${hashTags}</p>
                        </div>
                        <div class="post__information"><p>${postObject.description}</p></div>
                        <div class="post__buttons">
                            <div class="post__like-button"><a><img src="./images/like.png" alt="Like"></a></div>
                            <div class="post__edit-button"><a><img src="./images/edit.png" alt="Edit"></a></div>
                            <div class="post__delete-button"><a><img src="./images/delete.png" alt="Delete"></a></div>
                        </div>
                        <div class="publication-date"><p>published ${postObject.createdAt}</p></div>
                    </div>`;
        const buttons = postElement.querySelector('.post__buttons');
        if(this._user === 'Guest') {
            buttons.style.display = 'none';
        }
        else {
            const likeImage = buttons.querySelector('img');
            if(postObject.likes.indexOf(this._user) !== -1) {
                likeImage.setAttribute('src', './images/like_active.png');
            }

            if(this._user !== postObject.author) {
                const editButton = buttons.querySelector('.post__edit-button');
                const deleteButton = buttons.querySelector('.post__delete-button');
                editButton.style.display = 'none';
                deleteButton.style.display = 'none';
            }
        }
        return postElement;
    }

    _showPosts(postsArray) {
        const documentFragment = document.createDocumentFragment();
        postsArray
            .slice()
            .map((post) => this._createPostElement(post))
            .forEach((postElement) => {
                documentFragment.appendChild(postElement);
            });

        this._postsWrapper.appendChild(documentFragment);
    }

    _clearPosts() {
        while (this._postsWrapper.firstElementChild) {
            this._postsWrapper.removeChild(this._postsWrapper.firstElementChild);
        }
    }

    _editPost(id, newPost) {
        const oldElement = this._postsWrapper.querySelector(`#${id}`);
        if(oldElement) {
            oldElement.querySelector('img').setAttribute('src', newPost.photoLink);

            let hashTags = newPost.hashTags;
            if (hashTags.length !== 0) {
                hashTags = '#' + hashTags.join(' #')
            }
            oldElement.querySelector('.post__hashtags').textContent = hashTags;
            oldElement.querySelector('.post__information').textContent = newPost.description;
            return true;
        }
        else {
            return false;
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
}