class Post {
    post_id = '';
    post_content = '';
    user_id = '';
    likes = '';
    api_url = 'https://66feb8a42b9aac9c997d1fbd.mockapi.io';

    async create() {
        let session = new Session();
       let session_id = session.startSession();

       let data = {
        user_id: session_id,
        content: this.post_content,
        likes:0
       }
       data = JSON.stringify(data);

       let response = await fetch(this.api_url + '/posts', {
        method:'POST',
        headers: {
             'Content-Type': 'application/json'
        },
        body:data
       });
       data = await response.json();
       return data;

    }
    async getAllPost() {
        let response = await fetch(this.api_url + '/posts');
        let data = await response.json();
        return data;
    }
    delete(post_id){
        fetch(this.api_url + '/posts/' + post_id,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(data => {alert('Post obrisan')})
    }
    like(post_id , likes) {
        let data = {
            likes:this.likes,
        }
        data = JSON.stringify(data);
        fetch(this.api_url + '/Posts/' + this.post_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })
        .then(response => response.json())
        .then(data =>{alert('post lajkovan')})
    }

}