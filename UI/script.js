/*eslint no-undef: "off"*/

const photoPosts1 = [
    {
        id: '_1',
        description: 'New film!',
        createdAt: new Date('1964-01-07T15:25:00'),
        author: 'Nicolas Cage',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg',
        hashTags: ['filmmaking', 'actor', 'ghostrider'],
        likes: []
    },
    {
        id: '_2',
        description: 'When I was five I think, that\'s when I started wanting to be an actress. I loved to play.',
        createdAt: new Date('1926-06-01T18:56:00'),
        author: 'Marilyn Monroe',
        photoLink: 'https://images-na.ssl-images-amazon.com/images/I/71jhI7QEcPL._SX425_.jpg',
        hashTags: ['sex-symbol', 'beuty'],
        likes: []
    },
    {
        id: '_3',
        description: 'Being Prime Minister is a lonely job. In a sense, it ought to be: you cannot lead from the crowd.',
        createdAt: new Date('1925-10-13T10:38:00'),
        author: 'Margaret Thatcher',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Margaret_Thatcher.png/431px-Margaret_Thatcher.png',
        hashTags: ['iron', 'lady'],
        likes: ['Leonardo da Vinci']
    },
    {
        id: '_4',
        description: ' I didn\'t like the world around me because it was kind of grim, but I loved to play house.',
        createdAt: new Date('1936-06-01T17:23:00'),
        author: 'Marilyn Monroe',
        photoLink: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-boln7p6918vj8t9ptkbgf7lm12-20180201185439.Medi.jpeg',
        hashTags: ['sex-symbol', 'beuty'],
        likes: ['Leonardo da Vinci']
    },
    {
        id: '_5',
        description: 'Where is my faith? Even deep down ... there is nothing but emptiness and darkness...',
        createdAt: new Date('1910-08-26T12:35:17'),
        author: 'Mother Teresa',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/220px-Mother_Teresa_1.jpg',
        hashTags: ['help', 'help_each_other'],
        likes: ['Leonardo da Vinci']
    },
    {
        id: '_6',
        description: 'Both parties deprecated war, but one of them would make war rather than let the Nation survive, and the other would accept war rather than let it perish, and the war came.',
        createdAt: new Date('1809-02-12T19:15:00'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg',
        hashTags: ['president', 'noslavery'],
        likes: ['Leonardo da Vinci']
    },
    {
        id: '_7',
        description: 'All this will not be finished in the first one hundred days. Nor will it be finished in the first one thousand days, nor in the life of this Administration, nor even perhaps in our lifetime on this planet. But let us begin.',
        createdAt: new Date('1917-05-29T21:14:00'),
        author: 'John F. Kennedy',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/1/12/John_Fitzgerald_Kennedy.png',
        hashTags: ['president'],
        likes: []
    },
    {
        id: '_8',
        description: 'In October 1838, that is, fifteen months after I had begun my systematic enquiry, I happened to read for amusement Malthus on Population, and being well prepared to appreciate the struggle for existence which everywhere goes on from long-continued observation of the habits of animals and plants, it at once struck me that under these circumstances favourable variations would tend to be preserved, and unfavourable ones to be destroyed.',
        createdAt: new Date('1809-02-12T22:48:00'),
        author: 'Charles Darwin',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg',
        hashTags: ['species', 'theory', 'ultimate_survival'],
        likes: ['Leonardo da Vinci']
    },
    {
        id: '_9',
        description: 'I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the Moon and returning him safely to the Earth. No single space project in this period will be more impressive to mankind, or more important for the long-range exploration of space; and none will be so difficult or expensive to accomplish.',
        createdAt: new Date('1937-05-29T11:44:00'),
        author: 'John F. Kennedy',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy,_White_House_color_photo_portrait.jpg/220px-John_F._Kennedy,_White_House_color_photo_portrait.jpg',
        hashTags: ['president'],
        likes: []
    },
    {
        id: '_10',
        description: 'Pardon me, sorry! Always I am mistaken for Professor Einstein.',
        createdAt: new Date('1879-09-14T23:12:00'),
        author: 'Albert Einstein',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
        hashTags: ['math', 'physics', 'science'],
        likes: []
    },
    {
        id: '_11',
        description: 'Leonardo di ser Piero da Vinci.',
        createdAt: new Date('1452-04-15T11:19:00'),
        author: 'Leonardo da Vinci',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Francesco_Melzi_-_Portrait_of_Leonardo_-_WGA14795.jpg/220px-Francesco_Melzi_-_Portrait_of_Leonardo_-_WGA14795.jpg',
        hashTags: ['masterpiece', 'helicopter', 'engineer', 'sculptor'],
        likes: []
    },
    {
        id: '_12',
        description: 'Take a look at my star in Hollywood!',
        createdAt: new Date('1994-01-07T13:27:00'),
        author: 'Nicolas Cage',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nicolas_Cage_Walk_of_Fame.jpg/800px-Nicolas_Cage_Walk_of_Fame.jpg',
        hashTags: ['filmmaking', 'actor', 'ghostrider'],
        likes: []
    },
    {
        id: '_13',
        description: 'Columbus was not a scholarly man. Yet he studied these books, made hundreds of marginal notations in them and came out with ideas about the world that were characteristically simple and strong and sometimes wrong, ...',
        createdAt: new Date('1451-10-31T16:42:00'),
        author: 'Christopher Columbus',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Christopher_Columbus_at_the_gates_of_the_monastery_of_Santa_Maria_de_la_Rabida_with_his_son_Diego.jpg/170px-Christopher_Columbus_at_the_gates_of_the_monastery_of_Santa_Maria_de_la_Rabida_with_his_son_Diego.jpg',
        hashTags: ['ocean', 'hopes', 'sea', 'notations', 'worldwide'],
        likes: []
    },
    {
        id: '_14',
        description: 'I do but quote from one of those speeches when I declare that "I have no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists.',
        createdAt: new Date('1829-02-12T22:57:00'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lincoln_O-17_by_Brady%2C_1860.png/220px-Lincoln_O-17_by_Brady%2C_1860.png',
        hashTags: ['president', 'noslavery'],
        likes: []
    },
    {
        id: '_15',
        description: 'Up in front, there with the screen so big, a little kid all alone, and I loved it.',
        createdAt: new Date('1956-06-01T15:05:21'),
        author: 'Marilyn Monroe',
        photoLink: 'https://thingsthatarerectangles.files.wordpress.com/2009/10/marilyn-monroe.jpg',
        hashTags: ['sex-symbol', 'beuty'],
        likes: []
    },
    {
        id: '_16',
        description: 'The result of this would be the formation of new species. Here, then, I had at last got a theory by which to work...',
        createdAt: new Date('1819-02-12T16:15:03'),
        author: 'Charles Darwin',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Charles_Darwin_by_Maull_and_Polyblank%2C_1855-crop.png',
        hashTags: ['species', 'theory', 'ultimate_survival'],
        likes: []
    },
    {
        id: '_17',
        description: 'For nine days I was as one lost, without hope of life. Eyes never beheld the sea so angry, so high, so covered with foam. The wind not only prevented our progress, but offered no opportunity to run behind any headland for shelter; hence we were forced to keep out in this bloody ocean, seething like a pot on a hot fire.',
        createdAt: new Date('1453-07-21T21:56:53'),
        author: 'Christopher Columbus',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/220px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg',
        hashTags: ['ocean', 'hopes', 'sea', 'sunbathe', 'worldwide'],
        likes: []
    },
    {
        id: '_18',
        description: 'As many more individuals of each species are born than can possibly survive.',
        createdAt: new Date('1825-02-12T15:46:00'),
        author: 'Charles Darwin',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg/220px-Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg',
        hashTags: ['species', 'theory', 'ultimate_survival'],
        likes: []
    },
    {
        id: '_19',
        description: 'But with Denis there I was never alone. What a man. What a husband. What a friend.',
        createdAt: new Date('1950-10-13T17:29:00'),
        author: 'Margaret Thatcher',
        photoLink: 'https://secure.i.telegraph.co.uk/multimedia/archive/02532/denis-margaret-tha_2532944b.jpg',
        hashTags: ['iron', 'lady'],
        likes: []
    },
    {
        id: '_20',
        description: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.',
        createdAt: new Date('1839-02-12T14:23:07'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emancipation_proclamation.jpg/1024px-Emancipation_proclamation.jpg',
        hashTags: ['president', 'noslavery'],
        likes: []
    }
];

class Controller {
    constructor() {
        this._photoList = new PhotoList(photoPosts1/*posts from localStorage*/);
        this._view = new View(document.getElementsByClassName('main__publications')[0], 'Guest'/*username from localStorage*/);
        this._formWrapper = document.querySelector('.form-wrapper');
        this._alreadyShown = 0;

        this._view._postsWrapper.addEventListener('click', Controller._onPostClick);
    }

    static _showPosts(skip = 0, top = 10, filter = {}) {
        controller._view._showPosts(controller._photoList._getPosts(skip, top, filter/*filter from filter form*/));
    }

    _showMorePosts() {
        this._view._showPosts(this._alreadyShown + 1, 10/*, filter from filter form*/);
    }

    _addPost(post) {
        if(this._photoList._add(post)) {
            this._view._showPosts(this._photoList._getPosts());
        }
        else {
            alert('Failed to add post.');
        }
    }
    
    _editPost(id, photoPost) {
        if(this._photoList._edit(id, photoPost)) {
            this._view._editPost(id, photoPost);
        }
        else {
            alert('Failed to edit post.');
        }
    }

    static _onPostClick() {
        const button = event.target.parentNode.parentNode;
        if(button.className === 'post__like-button') {  // Обработка клика на like
            const id = button.parentNode.parentNode.parentNode.id;
            const post = controller._photoList._get(id);
            const index = post.likes.indexOf(controller._view._user);
            if(index === -1) {
                post.likes.push(controller._view._user);
                event.target.setAttribute('src', './images/like_active.png');
            }
            else {
                post.likes.splice(index, 1);
                event.target.setAttribute('src', './images/like.png');
            }
        }
        else if(button.className === 'post__edit-button') { // Обработка клика на edit
            controller._formWrapper.style.display = 'block';
            const form = controller._formWrapper.querySelector('.edit-form');
            form.style.display = 'block';

            const id = button.parentNode.parentNode.parentNode.id;
            const post = controller._photoList._get(id);

            form.id = id.substring(1);

            const image = form.querySelector('.edit-form__image').firstElementChild;
            image.setAttribute('src', post.photoLink);
            form.querySelector('.edit-form__author').firstChild.textContent = post.author;
            const inputImage = form.querySelector('#edit-image-url');
            inputImage.value = post.photoLink;
            form.querySelector('#edit-hashTags').value = '#' + post.hashTags.join(' #');
            form.querySelector('#edit-description').value = post.description;

        }
        else if(button.className === 'post__delete-button') {   // Обработка клика на delete
            if(confirm('Are you sure you want to delete post?')) {
                const postElement = button.parentNode.parentNode.parentNode;
                if(controller._photoList._remove(postElement.id)) {
                    postElement.parentNode.removeChild(postElement);
                }
                else {
                    alert('Failed to remove post.');
                }
            }
        }
    }

    static _closeEditForm() {
        controller._formWrapper.style.display = 'none';
        controller._formWrapper.querySelector('.edit-form').style.display = 'none';
    }

    static _setEditImage() {
        console.log(controller._formWrapper.querySelector('.edit-form__image'));
        const img = controller._formWrapper.querySelector('.edit-form__image').firstElementChild;
        img.setAttribute('src', controller._formWrapper.querySelector('#edit-image-url').value);
    }

    static _submitEditForm() {
        const editForm = event.target.parentNode.parentNode.parentNode;
        const postObject = {};
        postObject.photoLink = editForm.querySelector('#edit-image-url').value;
        postObject.description = editForm.querySelector('#edit-description').value;
        postObject.hashTags = editForm.querySelector('#edit-hashTags').value.trim().substring(1).split(/[ #]+/);

        alert(postObject.description + '\n#' + postObject.hashTags.join(' #'));

        if(controller._photoList._edit(`_${editForm.id}`, postObject)) {
            controller._view._editPost(`_${editForm.id}`, postObject);
            editForm.style.display = 'none';
            controller._formWrapper.style.display = 'none';
        }
        else {
            alert('Failed to edit post.');
        }
    }

    static _login(username) {
        controller._view._user = username;
        controller._view._showHeader();
        controller._view._clearPosts();
        Controller._showPosts();
    }

    static _logout() {
        controller._view._logout();
        controller._view._clearPosts();
        Controller._showPosts();
    }
}

const controller = new Controller();
Controller._showPosts();

(function foo() {
    const logOut = document.querySelector('.header__user').lastElementChild;
    logOut.addEventListener('click', Controller._logout);

    const headerHome = document.querySelector('.header__home');
    headerHome.firstElementChild.addEventListener('click', Controller._showPosts);

    const editForm = controller._formWrapper.querySelector('.edit-form');

    const editCloseBtn = editForm.querySelector('.edit-form__close-button');
    editCloseBtn.addEventListener('click', Controller._closeEditForm);

    const inputURL = editForm.querySelector('#edit-image-url');
    inputURL.addEventListener('change', Controller._setEditImage);

    const editSubmit = editForm.querySelector('.edit-form__submit');
    editSubmit.addEventListener('click', Controller._submitEditForm);
}())